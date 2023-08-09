[toc]


环境搭建

docker

`/mnt/docker_data/metabase` 是你本地一个有权限的目录

```bash
docker run -d -p 3000:3000 -v /mnt/docker_data/metabase:/tmp -e "MB_DB_FILE=/tmp/metabase.db" --name metabase metabase/metabase
```

docker-compose 启动

```yml
version: '2'

services:
  metabase:
    image: metabase/metabase:latest
    ports:
      - "3000:3000"
    volumes:
      - /mnt/docker_data/metabase:/tmp
    environment:
      - MB_DB_FILE=/tmp/metabase.db
```



