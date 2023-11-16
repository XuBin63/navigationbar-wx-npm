# navigationBar-wx

微信原生小程序导航栏navigation-bar使用说明

### 1、app.js中最上面导入并初始化

```JS
const navigationbarWx = require("./components/navigationbar-wx/config");
navigationbarWx.init({
  title: "小程序名称",
  homePath: "首页路径，默认/pages/index/index",//最前面必须带斜杠
})
```
|字段|是否必填|说明|
|--|--|--|
|title|否|小程序默认标题|
|homePath|是|小程序首页默认路径，斜杠开头|


### 2、app.json中配置插件
```json
"usingComponents": {
    "navigationbar-wx": "./components/navigationbar-wx/index"
  }
```
### 3、页面使用-传参如下说明
```HTML
<!-- 可直接使用 -->
<navigationbar-wx />
<!-- 可传参使用 -->
<navigationbar-wx
title=""
logo=""
color=""
bgColor=""
bgImg=""
iconColor=""
hideHome=""
hideSeat=""
 />

```
|字段|必传|类型|默认值|说明|
|--|--|--|--|--|
|title|否|String|无|当前页面标题|
|logo|否|String|无|可传入一个图片URL作为标题,logo优先级大于title|
|color|否|String|#000000|字体颜色，默认黑色|
|bgColor|否|String|#ffffff|导航栏颜色，默认白色|
|bgImg|否|String|无|导航栏整体图片,背景图优先级大于背景颜色|
|iconColor|否|String|black|左边按钮颜色，只支持black、white两种类型|
|hideHome|否|Boolean|false|当没有上一级页面时，是否隐藏小房子|
|hideSeat|否|Boolean|false|导航栏底部占位，默认占位不隐藏|