/**
 * bugs收集相关工具
 * 陈登文
 * 2018年8月6日 19:11:00
 */
import {errorInfo} from '@/api/index'

let bugUtils = {}

var _AgentInfo = {
  deviceType: '',
  OSname: '',
  browserName: '',
  browserVer: '',
  adaptType: 0,
  _init: function () {
    _AgentInfo.setDeviceAndOS()
    _AgentInfo.setBrowser()
  },
  setDeviceAndOS: function () {
    var name = 'unknown'
    if (window.navigator.userAgent.indexOf('Android') !== -1) {
      name = 'Android'
    } else if (window.navigator.userAgent.indexOf('iPhone') !== -1) {
      name = 'iPhone'
    } else if (window.navigator.userAgent.indexOf('SymbianOS') !== -1) {
      name = 'SymbianOS'
    } else if (window.navigator.userAgent.indexOf('Windows Phone') !== -1) {
      name = 'Windows Phone'
    } else if (window.navigator.userAgent.indexOf('iPad') !== -1) {
      name = 'iPad'
    } else if (window.navigator.userAgent.indexOf('iPod') !== -1) {
      name = 'iPod'
    }
    if (name !== 'unknown') {
      _AgentInfo.OSname = name
      _AgentInfo.deviceType = 'mobile'
      return
    }
    if (window.navigator.userAgent.indexOf('Windows NT 10.0') !== -1) {
      name = 'Windows 10'
    } else if (window.navigator.userAgent.indexOf('Windows NT 6.2') !== -1) {
      name = 'Windows 8'
    } else if (window.navigator.userAgent.indexOf('Windows NT 6.1') !== -1) {
      name = 'Windows 7'
    } else if (window.navigator.userAgent.indexOf('Windows NT 6.0') !== -1) {
      name = 'Windows Vista'
    } else if (window.navigator.userAgent.indexOf('Windows NT 5.1') !== -1) {
      name = 'Windows XP'
    } else if (window.navigator.userAgent.indexOf('Windows NT 5.0') !== -1) {
      name = 'Windows 2000'
    } else if (window.navigator.userAgent.indexOf('Mac') !== -1) {
      name = 'Mac/iOS'
    } else if (window.navigator.userAgent.indexOf('X11') !== -1) {
      name = 'UNIX'
    } else if (window.navigator.userAgent.indexOf('Linux') !== -1) {
      name = 'Linux'
    }
    _AgentInfo.OSname = name
    _AgentInfo.deviceType = 'pc'
  },
  setBrowser: function () {
    var userAgent = navigator.userAgent
    if (userAgent.match(/MicroMessenger/i) === 'MicroMessenger') {
      _AgentInfo.browserName = 'MicroMessenger'
    } else if (userAgent.match(/QQ/i) === 'QQ') {
      _AgentInfo.browserName = 'QQ'
    } else if (userAgent.match(/Chrome/i) === 'Chrome') {
      _AgentInfo.browserName = 'Chrome'
    } else if (userAgent.match(/Opera/i) === 'Opera') {
      _AgentInfo.browserName = 'Opera'
    } else if (userAgent.match(/Firefox/i) === 'Firefox') {
      _AgentInfo.browserName = 'Firefox'
    } else if (userAgent.match(/Safari/i) === 'Safari') {
      _AgentInfo.browserName = 'Safari'
    } else if (!!window.ActiveXObject || 'ActiveXObject' in window) {
      _AgentInfo.browserName = 'IE'
    } else {
      _AgentInfo.browserName = userAgent
    }
  },
  isMobile: function () {
    if (_AgentInfo.deviceType === 'mobile') {
      return true
    }
    return false
  },
  setAdaptType() {
    if (screen.width <= 374) {
      _AgentInfo.adaptType = 0
    } else if (screen.width <= 413) {
      _AgentInfo.adaptType = 1
    } else {
      _AgentInfo.adaptType = 2
    }
  }
}
_AgentInfo._init()

/**
 * 保存bug
 * @param error
 * @param mv
 * @returns {*}
 */
bugUtils.save = function (error, vm) {
  console.error(error)
  var errorData = ''
  if (error.name === 'AjaxError') {
    errorData = JSON.stringify(error)
  } else {
    errorData = error.toString()
  }

  var param = {
    type: error.name,
    msg: error.message,
    url: error.url == null ? window.location.href : error.url,
    errorData: errorData,
    browser: _AgentInfo.browserName,
    operatingSystem: _AgentInfo.OSname,
    ip: returnCitySN['cip'],
    city: returnCitySN['cname']
  }
  if (window.location.href.indexOf('error-info') < 0 && param.url.indexOf('error/save') < 0) {
    errorInfo.save(param, res => {
    })
  }
}
export default bugUtils
