import { navigationbarWx } from "./components/navigationbar-wx/config.js";
navigationbarWx.init({
  title: "小程序标题",
  iconColor: "white",
  bgColor:"#000",
  color:"#fff"
})
App({
  globalData: {

  },
  onLaunch() {
    // 登录
    wx.login({
      success: res => {
        console.log(res.code)
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      },
    })
  },
})