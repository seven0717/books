# books

> Vue + ElementUI

## 搭建项目
```
# 使用vue-cli搭建项目
    vue init webpack books
# 安装依赖
    npm install
# 启动项目
    npm start
```
##初始目录结构
```
# build:项目打包后的文件
# config:vue项目的配置文件目录
# node_modules:项目依赖
# src:项目文件存放
# static:静态文件存放目录
```

##安装第三方应用
```
# 网络请求
  cnpm install --save axios (暂时用不到)
# ElementUI
  npm i element-ui -S
```
##配置ElementUI（按需引入）
> [ElementUI按需引入](http://element-cn.eleme.io/#/zh-CN/component/quickstart)
```
# 借助 babel-plugin-component，我们可以只引入需要的组件，以达到减小项目体积的目的。
    npm install babel-plugin-component -D
# 修改babelrc
    {
      "presets": [
        ["env", {
          "modules": false,
          "targets": {
            "browsers": ["> 1%", "last 2 versions", "not ie <= 8"]
          }
        }],
        "stage-2"
      ],
      "plugins": ["transform-vue-jsx", "transform-runtime",[
        "component",
        {
          "libraryName": "element-ui",
          "styleLibraryName": "theme-chalk"
        }
      ]]
    }
# 引入方式
   import { Button, Select } from 'element-ui';
   Vue.use(Button)
```
##src目录结构
```
assets:引用的文件（js，css，font）等
common:公共的目录，最外层的结构
components:公共组件
router：路由
```
##布局
```
使用elementui中的响应式布局
```
