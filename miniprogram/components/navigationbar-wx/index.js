const app = getApp();
let config = {
  /**名称 */
  title: "",
  /**默认首页路径 */
  homePath: "/pages/index/index",
};
config = { ...config, ...app.globalData.navigationbarWx };
Component({

  /**
   * 组件的属性列表
   */
  properties: {
    /**标题 */
    title: {
      type: String,
      value: config.title,
    },
    /**logo图片url */
    logo: String,
    /**字体颜色 */
    color: {
      type: String,
      value: "#000000",
    },
    /**背景颜色 */
    bgColor: {
      type: String,
      value: "#ffffff",
    },
    /**背景图片 */
    bgImg: String,
    /**图标颜色
     * 默认黑：black
     * 白：white
     */
    iconColor: {
      type: String,
      value: "black",
    },
    /**是否隐藏返回按钮 */
    hideHome: {
      type: Boolean,
      value: false,
    },
    /**是否隐藏填充 */
    hideSeat: {
      type: Boolean,
      value: false,
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    /**菜单信息 */
    menu: null,
    /**导航栏高度 */
    barH: 0,
    /**页面栈 */
    pages: [],
  },
  lifetimes: {
    attached() {
      let that = this;
      let menu = wx.getMenuButtonBoundingClientRect();
      let pages = getCurrentPages();
      let barH = menu.bottom + 10;
      that.setData({
        barH,
        menu,
        pages,
      })
      // console.log("组件数据：", that.data)
    },
  },
  /**
   * 组件的方法列表
   */
  methods: {
    /**返回 */
    back() {
      wx.navigateBack();
    },
    /**返回首页 */
    home() {
      // console.log("跳转：", config.homePath)
      wx.reLaunch({
        url: config.homePath,
      })
    },
  }
})