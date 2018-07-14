# cascade_picker

> 利用 mint ui 的picker 完成一个省、市、区三级联动
> 数据源来自度娘json数据
> 俩种触发方式：1、首次进入触发 2、点击事件触发

> ！！！采用三个picker的方式，一个picker多个values会出现多次computed，导致联动失败的情况，已跳坑。
## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
