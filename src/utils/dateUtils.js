/**
 * 日期工具类
 * 陈登文
 * 2018年6月11日 16:58:43
 */

var dateUtils = {}
/**
 * 日期格式转换
 * @param str
 * @param format
 */
dateUtils.format = (str, format) => {
  var time = new Date(str.replace(/-/g, '/'))
  var t = new Date(time)
  var tf = function (i) {
    return (i < 10 ? '0' : '') + i
  }
  return format.replace(/yyyy|MM|dd|HH|mm|ss/g, function (a) {
    switch (a) {
      case 'yyyy':
        return tf(t.getFullYear())
      case 'MM':
        return tf(t.getMonth() + 1)
      case 'mm':
        return tf(t.getMinutes())
      case 'dd':
        return tf(t.getDate())
      case 'HH':
        return tf(t.getHours())
      case 'ss':
        return tf(t.getSeconds())
    }
  })
}

dateUtils.dateToStr = (date, slipe) => {
  var year = date.getFullYear()
  var month = (date.getMonth() + 1).toString()
  var day = (date.getDate()).toString()
  if (month.length === 1) {
    month = '0' + month
  }
  if (day.length === 1) {
    day = '0' + day
  }
  var dateTime = year + slipe + month + slipe + day
  return dateTime
}

dateUtils.dateTo = (date, slipe) => {
  var year = date.getFullYear()
  var month = (date.getMonth() + 1).toString()
  var day = (date.getDate()).toString()
  var timeHours = date.getHours().toString()
  var timeMinutes = date.getMinutes().toString()
  var timeSeconds = date.getSeconds().toString()
  if (month.length === 1) {
    month = '0' + month
  }
  if (day.length === 1) {
    day = '0' + day
  }
  if (timeHours.length === 1) {
    timeHours = '0' + timeHours
  }
  if (timeMinutes.length === 1) {
    timeMinutes = '0' + timeMinutes
  }
  if (timeSeconds.length === 1) {
    timeSeconds = '0' + timeSeconds
  }

  var dateTime = year + slipe + month + slipe + day + ' ' + timeHours + ':' + timeMinutes + ':' + timeSeconds
  return dateTime
}

/**
 * 获取本周第一天
 * @param date
 * @returns {*}
 */
dateUtils.getFirstDayOfWeek = (date) => {
  var weekday = date.getDay() || 7 //获取星期几,getDay()返回值是 0（周日） 到 6（周六） 之间的一个整数。0||7为7，即weekday的值为1-7
  date.setDate(date.getDate() - weekday + 1)//往前算（weekday-1）天，年份、月份会自动变化
  return date
}
/**
 * 获取指定日期所在月的第一天
 * @param date
 * @returns {*}
 */
dateUtils.getFirstDayOfMonth = (date) => {
  date.setDate(1)
  return date
}
/**
 * 获取指定日期所在月的最后一天
 * @param date
 * @returns {Date}
 */
dateUtils.getCurrentMonthLast = (date) => {
  var currentMonth = date.getMonth()
  var nextMonth = ++currentMonth
  var nextMonthFirstDay = new Date(date.getFullYear(), nextMonth, 1)
  var oneDay = 1000 * 60 * 60 * 24
  return new Date(nextMonthFirstDay - oneDay)
}

/**
 * 获得昨天的日期
 * @returns {Date}
 */
dateUtils.getYesterdayDate = () => {
  var date = new Date()
  date.setTime(date.getTime() - 24 * 60 * 60 * 1000)
  return date
}

export default dateUtils
