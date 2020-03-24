// var act = process.env.NODE_ENV;
// var test = false;
let base = '';
let baseApi = '';
// let loginOutUrl = '';
// let polymerizationUrl = '';
// let shopFront = '';
// if (act === 'production') {
//   if (test) {
//     base = '';
//     baseApi = '';
//     loginOutUrl = '';
//     polymerizationUrl = '';
//     shopFront = '';
//   } else {
//     base = '';
//     baseApi = '';
//     loginOutUrl = '';
//     polymerizationUrl = '';
//     shopFront = '';
//   }
// } else {
//   base = '';
//   baseApi = '';
//   loginOutUrl = '';
//   polymerizationUrl = '';
//   shopFront = '';
// }

export default {
  /**
   * @description 配置显示在浏览器标签的title
   */
  title: 'MagicMirror',

  /**
   * @description token在Cookie中存储的天数，默认1天
   */
  cookieExpires: 1,
  /**
   * @description 是否使用国际化，默认为false
   *              如果不使用，则需要在路由中给需要在菜单中展示的路由设置meta: {title: 'xxx'}
   *              用来在菜单中显示文字
   */
  useI18n: false,
  /**
   * @description 默认打开的首页的路由name值，默认为home
   */
  homeName: 'index',
  /**
   * @description 需要加载的插件
   */
  baseUrl: base + baseApi + '/',
}
