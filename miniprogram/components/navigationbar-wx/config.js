module.exports = {
	config: {
		/**名称 */
		title: "",
		/**默认首页路径 */
		homePath: "/pages/index/index",
	},
	init(data) {
		this.config = { ...this.config, ...data }
	},
}
