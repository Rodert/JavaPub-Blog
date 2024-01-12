

对于需要调试数据库事务隔离级别的情况，手把手教学

## 代码

基于原生 `database/sql` 测试事务隔离。

```go
package pg_test

import (
	"context"
	"database/sql"
	"fmt"
	_ "github.com/lib/pq"
	"log"

	_ "github.com/go-sql-driver/mysql"
)

// sql pg 事务测试
const DNS = "host=127.0.0.1 user=postgres password=yourpassword dbname=postgres port=5432 sslmode=disable TimeZone=Asia/Shanghai"
const DNS2 = "postgres:yourpassword@tcp(127.0.0.1:5432)/database_name"

func main() {
	db, err := sql.Open("postgres", DNS)
	if err != nil {
		log.Fatal(err)
	}
	defer db.Close()

	res := mustExec(db, "CREATE TABLE test (v INTEGER)")
	fmt.Println(res)
	ctx, cancel := context.WithCancel(context.Background())
	defer cancel()

	tx1, err := db.BeginTx(ctx, &sql.TxOptions{
		Isolation: sql.LevelRepeatableRead,
	})
	if err != nil {
		log.Fatal(err)
	}

	tx2, err := db.BeginTx(ctx, &sql.TxOptions{
		Isolation: sql.LevelRepeatableRead,
	})
	if err != nil {
		log.Fatal(err)
	}

	_, err = tx1.ExecContext(ctx, "INSERT INTO test VALUES (1)")
	if err != nil {
		log.Fatal(err)
	}

	var v int
	row1 := tx1.QueryRowContext(ctx, "SELECT COUNT(*) FROM test")
	if err := row1.Scan(&v); err != nil {
		log.Fatal(err)
	}

	row := tx2.QueryRowContext(ctx, "SELECT COUNT(*) FROM test")
	if err := row.Scan(&v); err != nil {
		log.Fatal(err)
	}
	// Because writer transaction wasn't commited yet, it should be available
	if v != 0 {
		log.Printf("expected val to be 0, got %d", v)
	}

	err = tx1.Commit()
	if err != nil {
		log.Fatal(err)
	}

	row = tx2.QueryRowContext(ctx, "SELECT COUNT(*) FROM test")
	if err := row.Scan(&v); err != nil {
		log.Fatal(err)
	}
	// Data written by writer transaction is already commited, it should be selectable
	if v != 1 {
		log.Printf("expected val to be 1, got %d", v)
	}
	tx2.Commit()

}

func mustExec(db *sql.DB, query string, args ...interface{}) (res sql.Result) {
	res, err := db.Exec(query, args...)
	if err != nil {
		log.Fatal("exec", query, err)
	}
	return res
}
```

基于 `Gorm` 测试事务隔离。

```go
package pg_test

import (
	"database/sql"
	"fmt"
	"gorm.io/driver/postgres"
	"gorm.io/gorm"
	"log"
)

const DNSGorm = "host=127.0.0.1 user=postgres password=yourpassword dbname=postgres port=5432 sslmode=disable TimeZone=Asia/Shanghai"
const DNS2Gorm = "postgres:yourpassword@tcp(127.0.0.1:5432)/database_name"
const tableName = "test"

// gorm pg 事务测试
func main() {
	db, err := gorm.Open(postgres.Open(DNSGorm), &gorm.Config{})
	db2, err := gorm.Open(postgres.Open(DNSGorm), &gorm.Config{})
	if err != nil {
		log.Fatal(err)
	}

	res := gormMustExec(db, "CREATE TABLE test (v INTEGER)")
	fmt.Println(res)
	tx1 := db.Begin(&sql.TxOptions{
		//Isolation: sql.LevelRepeatableRead,
		Isolation: sql.LevelRepeatableRead,
	})
	tx2 := db2.Begin(&sql.TxOptions{
		Isolation: sql.LevelRepeatableRead,
	})
	tx1 = tx1.Exec("INSERT INTO test VALUES (1)")

	var v1, v2 int64
	err = tx1.Table(tableName).Count(&v1).Error
	if err != nil {
		log.Fatal(err)
	}
	err = tx2.Table(tableName).Count(&v2).Error
	if err != nil {
		log.Fatal(err)
	}

	// Because writer transaction wasn't commited yet, it should be available
	//if v != 0 {
	//	log.Printf("expected val to be 0, got %d", v)
	//}

	if err := tx1.Commit().Error; err != nil {
		tx1.Rollback()
		fmt.Println("Transaction failed:", err)
	}

	err = tx2.Table(tableName).Count(&v2).Error
	if err != nil {
		log.Fatal(err)
	}
	// Data written by writer transaction is already commited, it should be selectable
	//if v != 1 {
	//	log.Printf("expected val to be 1, got %d", v)
	//}

	if err := tx2.Commit().Error; err != nil {
		tx2.Rollback()
		fmt.Println("Transaction failed:", err)
	}

	// last
	db3, err := gorm.Open(postgres.Open(DNSGorm), &gorm.Config{})
	err = db3.Table(tableName).Count(&v2).Error
	if err != nil {
		log.Fatal(err)
	}

}

func gormMustExec(db *gorm.DB, query string, args ...interface{}) (res sql.Result) {
	tx := db.Exec(query, args...)
	_ = tx
	return res
}
```

