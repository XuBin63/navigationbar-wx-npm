import { navigationbarWx } from "./components/navigationbar-wx/config.js";
navigationbarWx.init({
  title: "牛牛牛",
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