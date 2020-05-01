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
                sensorList: []
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
                        that.sensorList = res.data;
                        this.init();
                    }
                });
            },
            formatDate(datetime) {
                let date = new Date(datetime);
                return date.toLocaleDateString() + ' ' + date.getHours() + date.toLocaleTimeString().substr(-6,6)
            },
            init(){
                let tempLiuru = [];
                let humidityLiuru = [];
                for(let sensor in this.sensorList){
                    tempLiuru.push({
                        value: [
                            this.formatDate(this.sensorList[sensor].createTime),
                            this.sensorList[sensor].temp,
                        ]
                    });
                    humidityLiuru.push({
                        value: [
                            this.formatDate(this.sensorList[sensor].createTime),
                            this.sensorList[sensor].humidity,
                        ]
                    });
                }

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
                        symbolSize:6,
                        data: tempLiuru,
                    },{
                        name: '湿度',
                        type: 'line',
                        showSymbol: false,
                        symbolSize:6,
                        data: humidityLiuru,
                    }]
                };
                console.log(tempLiuru)
                chart.setOption(option);
            }
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
