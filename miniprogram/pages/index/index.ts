// pages/index/index.ts
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad() {

  },
  next() {
    wx.navigateTo({
      url: `/pages/index1/index`,
    })
  },
})