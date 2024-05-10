const { navigationbarWx } = require("./config");
const { config } = navigationbarWx;
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
    logo: {
      type: String,
      value: config.logo,
    },
    /**字体颜色 */
    color: {
      type: String,
      value: config.color,
    },
    /**背景颜色 */
    bgColor: {
      type: String,
      value: config.bgColor,
    },
    /**背景图片 */
    bgImg: {
      type: String,
      value: config.bgImg,
    },
    /**图标颜色
     * 默认黑：black
     * 白：white
     */
    iconColor: {
      type: String,
      value: config.iconColor,
    },
    /**是否隐藏返回按钮 */
    hideHome: {
      type: Boolean,
      value: config.hideHome,
    },
    /**是否隐藏填充 */
    hideSeat: {
      type: Boolean,
      value: config.hideSeat,
    },
    /**首页默认路径 */
    homePath: {
      type: String,
      value: config.homePath,
    },
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
      let that = this;
      let { homePath } = that.data;
      wx.reLaunch({
        url: homePath[0] == '/' ? homePath : `/${homePath}`,
      })
    },
  }
})