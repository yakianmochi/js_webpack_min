# 最小 webpack プロジェクト

## 使い方

本ディレクトリにて以下コマンドを実行する。

```dos
npm install
```

## 手動での作り方

### 1.npm init する

```dos
npm init -y
```

### 2. webpack をインストールする

```dos
npm i -D webpack webpack-cli
```

### 3. webpack-dev-server をインストールする

これをインストールすることでローカルで保存した際に自動的にリロードされるようになる

```dos
npm i -D webpack webpack-cli webpack-dev-server
```

### 4. package.json の scripts を編集しておく

```json
"scripts": {
  "dev": "webpack serve",
  "build": "webpack"
},
```

#### 5. html と src ファイルを作成する

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
