<template>
    <div class="sensor_line" style="margin-top: 10px;">
        <div id="chart" class="sensor_line"></div>
        <div class="sensor_now_box">
            <span class="sensor_now_text">
                {{sensorText}}
            </span>
        </div>
    </div>
</template>

<script>
    import { fetchList } from '@/api/sensor'

    export default {
        name: "Sensor",
        data() {
            return {
                sensorText: "当前温度：37.7℃ 湿度：37.7℃",
                query: {
                    "userId":1,
                    "startTime":"1",
                    "endTime":"1886493997404"
                },
                tempLiuru: [],
                humidityLiuru: []
            }
        },
        created() {
            this.getList()
        },
        methods:{
            getList() {
                var that = this;
                fetchList(this.query).then(res => {
                    if(res.code === 0){
                        for(let sensor in res.data){
                            that.tempLiuru.push({
                                value: [
                                    that.formatDate(res.data[sensor].createTime),
                                    res.data[sensor].temp,
                                ]
                            });
                            that.humidityLiuru.push({
                                value: [
                                    that.formatDate(res.data[sensor].createTime),
                                    res.data[sensor].humidity,
                                ]
                            });
                        }
                    }
                });
            },
            formatDate(datetime) {
                let date = new Date(datetime);
                let year = date.getFullYear(),
                    month = ("0" + (date.getMonth() + 1)).slice(-2),
                    sdate = ("0" + date.getDate()).slice(-2),
                    hour = ("0" + date.getHours()).slice(-2),
                    minute = ("0" + date.getMinutes()).slice(-2),
                    second = ("0" + date.getSeconds()).slice(-2);
                return year + "/"+ month +"/"+ sdate +" "+ hour +":"+ minute +":" + second;
            }
        },
        mounted() {
            var chart = this.$echarts.init(document.getElementById("chart"));
            var option = {
                legend: {
                    data: ['温度', '湿度'],
                    textStyle: {
                        color: '#fff',
                        fontSize: 16
                    }
                },
                grid:{
                    x:'6%',
                    y:'10%',
                    x2:'6%',
                    y2:'16%'
                },
                xAxis:{
                    type:'time',
                    splitNumber:6,
                    axisLabel:{
                        formatter:'{value}',
                        color: 'rgba(255, 255, 255)',
                        fontSize: 16
                    },
                    splitLine:{show: false}
                },
                yAxis:{
                    type:'value',
                    splitNumber:4,
                    axisLabel:{
                        formatter:'{value}',
                        color: 'rgba(255, 255, 255)',
                        fontSize: 16
                    }
                },
                series:[{
                    name: '温度',
                    type: 'line',
                    showSymbol: false,
                    symbolSize:2,
                    data: this.tempLiuru,
                },{
                    name: '湿度',
                    type: 'line',
                    showSymbol: false,
                    symbolSize:2,
                    data: this.humidityLiuru,
                }]
            };
            chart.setOption(option);
        }
    }
</script>

<style scoped>
    .sensor_line {
        width:500px;
        height:250px;
    }
    .sensor_now_box {
        margin-top: 10px;
    }
    .sensor_now_text {
        font-size: 32px;
        color: #FFFFFF;
    }
</style>
