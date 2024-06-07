# 微信原生小程序导航栏 navigation-bar 使用说明

### 1、安装插件，并在小程序开发工具中构建 npm

```
npm i navigationbar-wx
```

### 2、app.js 中得 globalData 内写上如下：

```JS
import { navigationbarWx } from "navigationbar-wx/config.js";
navigationbarWx.init({
  title: "小程序默认名称",
  homePath: "/pages/index/index",//默认路径，如果相同可以忽略这个参数
})
//备注：init 可初始化的字段如下字段说明
```

### 3、app.json 中配置插件

```json
"usingComponents": {
    "navigationbar-wx": "navigationbar-wx"
  }
```

### 4、页面使用-传参如下说明

```HTML
<!-- 可直接使用 -->
<navigationbar-wx />
<!-- 也可传参使用 -->
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

### 字段说明

| 字段      | 必传 | 类型    | 默认值             | 说明                                              |
| --------- | ---- | ------- | ------------------ | ------------------------------------------------- |
| title     | 否   | String  | 小程序默认标题     | 当前页面标题                                      |
| logo      | 否   | String  | 无                 | 可传入一个图片 URL 作为标题,logo 优先级大于 title |
| color     | 否   | String  | #000000            | 字体颜色，默认黑色                                |
| bgColor   | 否   | String  | #ffffff            | 导航栏颜色，默认白色                              |
| bgImg     | 否   | String  | 无                 | 导航栏整体图片,背景图优先级大于背景颜色           |
| iconColor | 否   | String  | black              | 左边按钮颜色，只支持 black、white 两种类型        |
| hideHome  | 否   | Boolean | false              | 当没有上一级页面时，是否隐藏小房子                |
| hideSeat  | 否   | Boolean | false              | 导航栏底部占位，默认占位不隐藏                    |
| homePath  | 否   | String  | /pages/index/index | 页面如果设置这个参数优先级高于 init 时传入的路径  |

### github 地址

[github 地址](https://github.com/XuBin63/navigationbar-wx-npm)
