/**
 * 应用相关工具
 * 陈登文
 * 2018年8月6日 19:11:00
 */

let appUtils = {}

/**
 * 打开加载
 * @param that
 * @param msg
 * @returns {*}
 */
appUtils.showLoading = function (that, msg) {
  var loading = layer.msg(msg == null ? '正在加载，请稍后...' : msg, {icon: 16, time: false, shade: 0.1})
  return loading
}

/**
 * 关闭加载
 * @param loading
 */
appUtils.hideLoading = function (loading) {
  if (loading != null) {
    layer.close(loading)
  } else {
    layer.closeAll()
  }
}

/**
 * 显示成功
 * @param that
 * @param msg
 */
appUtils.showSuccess = function (msg) {
  layer.msg(msg, {icon: 1})
}

appUtils.showError = function (msg) {
  layer.msg(msg, {icon: 2})
}

export default appUtils
