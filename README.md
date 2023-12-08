# rails_app

## 立ち上げ手順

以下のコマンドでコンテナを立ち上げる

```
docker-compose build
docker compose up
```

以下のURLにアクセス

```
http://localhost:3000/
```

## コンテナ内部に入る方法
以下のコマンドでコンテナ内部に入る

```
docker exec -ti rubyPractice_web /bin/bash
```

## DB・テーブル確認手法

### コンテナ内に入ってmysqlにログインする場合

以下の手順でログインする

```
docker exec -ti db /bin/bash
mysql -u root -p 
=> password
```

### phpMyadminを使って表示する場合

以下の手順で表示する。以下のURLにアクセス

```
http://localhost:9999
```

<img width="766" alt="スクリーンショット 2023-11-02 21 05 18" src="https://github.com/maho-na510/rubyPractice/assets/34295276/500ac6a1-952f-4881-8d36-6beb2296d14c">
