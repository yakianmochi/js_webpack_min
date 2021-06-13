# 最小 webpack プロジェクト

## 1. 使い方

### 1-1. モジュールのインストール

本ディレクトリにて以下コマンドを実行する。

```dos
npm install
```

### 1-2. 開発モードでの実行

```dos
npm run dev
```

http://localhost:8080 へアクセスして動作を確認する。  
(js などを更新した時点でブラウザが更新されます)

### 1-3 ビルド

※工事中※
以下コマンドにて dist 配下にコンパイルされる

```dos
npm run build
```

## 2. 手動での作り方

以下本環境を手動にて作成した時の作り方を解説する。

### 2-1.npm init する

```dos
npm init -y
```

### 2-2. webpack をインストールする

```dos
npm i -D webpack webpack-cli
```

### 2-3. webpack-dev-server をインストールする

これをインストールすることでローカルで保存した際に自動的にリロードされるようになる

```dos
npm i -D webpack webpack-cli webpack-dev-server
```

### 2-4. package.json の scripts を編集しておく

```json
"scripts": {
  "dev": "webpack serve",
  "build": "webpack"
},
```

#### 2-5. html と src ファイルを作成する

```dos
+ {project}
  + src
    - index.js
  - index.html
```

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <title>Page Title</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <script src="src/index.js"></script>
  </head>
  <body></body>
</html>
```

```javascript
alert('test');
```
