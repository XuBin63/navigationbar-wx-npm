App({
  globalData: {
    navigationbarWx: {
      title: "小程序小程序",
      homePath: "/pages/index/index",
    },
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