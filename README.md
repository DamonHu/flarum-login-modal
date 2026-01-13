# Demo测试，请勿商用 Demo testing, please do not use commercially



## fork自 [GitHub](https://github.com/v17development/flarum-third-party-login-only)

安装

```
composer require DamonHu/flarum-login-modal
```

更新

```
composer update DamonHu/flarum-login-modal
```

## 代码更新步骤

下载仓库，进入`js`目录 

安装依赖

```
npm install 
```

安装webpackage

```
npm install webpack webpack-cli -g
```

运行

```
npm run build
```

### 运行报错处理

运行报错是因为node版本不兼容，切到16

```
brew unlink node@18
brew link --overwrite --force node@16
```

再执行

```
export NODE_OPTIONS=--openssl-legacy-provider
```

## 发布新版

github打tag，之后去[https://packagist.org/](https://packagist.org/)，可以使用github账号快捷登录。登录之后选择My packages，进入相应项目，点击更新即可。