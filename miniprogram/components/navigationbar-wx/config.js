const navigationbarWx = {
	config: {
		/**小程序标题 */
		title: "小程序默认标题",
		/**标题 logo */
		logo: "",
		/**文字颜色 */
		color: "#000000",
		/**北京颜色 */
		bgColor: "#FFFFFF",
		/**用图片当背景 */
		bgImg: "",
		/**icon颜色 */
		iconColor: "black" || "white",
		/**是否隐藏返回首页 */
		hideHome: false,
		/**是否隐藏填充 */
		hideSeat: false,
		/**首页默认路径 */
		homePath: "/pages/index/index",
	},
	init(data) {
		this.config = { ...this.config, ...data };
		console.log(this.config);
	}
};
module.exports = { navigationbarWx };