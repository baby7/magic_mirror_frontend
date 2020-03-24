<template>
    <div class="clock">
        <div id="Date"></div>
        <ul>
            <li id="hours"> </li>
            <li id="point1">:</li>
            <li id="min"> </li>
            <li id="point2">:</li>
            <li id="sec"> </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "DateTime",
        methods: {
            start(){
                // 创建两个变量，一个数组中的月和日的名称
                var monthNames = [ "一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月" ];
                var dayNames= ["星期日","星期一","星期二","星期三","星期四","星期五","星期六"]
                // 创建一个对象newDate（）
                var newDate = new Date();
                // 提取当前的日期从日期对象
                newDate.setDate(newDate.getDate());
                //输出的日子，日期，月和年
                document.getElementById('Date').innerHTML =
                    newDate.getFullYear() + " "
                    + monthNames[newDate.getMonth()] + ' '
                    + newDate.getDate() + '日 '
                    + dayNames[newDate.getDay()];
                setInterval( function() {
                    // 创建一个对象，并提取newDate（）在访问者的当前时间的秒
                    var seconds = new Date().getSeconds();
                    //添加前导零秒值
                    document.getElementById('sec').innerHTML = ( seconds < 10 ? "0" : "" ) + seconds
                },1000);
                setInterval( function() {
                    // 创建一个对象，并提取newDate（）在访问者的当前时间的分钟
                    var minutes = new Date().getMinutes();
                    // 添加前导零的分钟值
                    document.getElementById('min').innerHTML = ( minutes < 10 ? "0" : "" ) + minutes
                },1000);
                setInterval( function() {
                    // 创建一个对象，并提取newDate（）在访问者的当前时间的小时
                    var hours = new Date().getHours();
                    // 添加前导零的小时值
                    document.getElementById('hours').innerHTML = ( hours < 10 ? "0" : "" ) + hours
                }, 1000);
            }
        },
        mounted(){
            this.start()
        }
    }
</script>

<style scoped>
    body{background:#202020;font:bold 12px Arial, Helvetica, sans-serif;margin:0;padding:0;color:#bbbbbb;}
    a{text-decoration:none;color:#00c6ff;}
    /* clock */
    .clock{width:250px;margin-left:0;padding: 30px;padding-top:5px;padding-bottom:5px;color:#fff;}
    .clock #Date{font-family:'BebasNeueRegular', Arial, Helvetica, sans-serif;font-size:26px;text-align:center;text-shadow:0 0 5px #00c6ff;}
    .clock ul{width:250px;margin:0 auto;padding:0px;list-style:none;text-align:center;}
    .clock ul li{display:inline;font-size:4em;text-align:center;font-family:'BebasNeueRegular', Arial, Helvetica, sans-serif;text-shadow:0 0 5px #00c6ff;}
    #point1{position:relative;-moz-animation:mymove 1s ease infinite;-webkit-animation:mymove 1s ease infinite;padding-left:10px;padding-right:10px;}
    #point2{position:relative;-moz-animation:mymove 1s ease infinite;-webkit-animation:mymove 1s ease infinite;padding-left:10px;padding-right:10px;}
    @-webkit-keyframes mymove{
        0%{opacity:1.0;text-shadow:0 0 20px #00c6ff;}
        50%{opacity:0;text-shadow:none;}
        100%{opacity:1.0;text-shadow:0 0 20px #00c6ff;}
    }
    @-moz-keyframes mymove{
        0%{opacity:1.0;text-shadow:0 0 20px #00c6ff;}
        50%{opacity:0;text-shadow:none;}
        100%{opacity:1.0;text-shadow:0 0 20px #00c6ff;}
    }
</style>
