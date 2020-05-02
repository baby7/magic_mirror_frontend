<template>
    <div class="sensor_line" style="margin-top: 50px;">
<!--        <div id="chart" class="sensor_line"></div>-->
        <div id="chart" class="sensor_meter"></div>
        <span id="hide_temp" style="display:none">0</span>
        <span id="hide_humidity" style="display:none">0</span>
    </div>
</template>

<script>
    // import { fetchList } from '@/api/sensor'

    export default {
        name: "Sensor",
        data() {
            return {
                // query: {
                //     userId:1,
                //     startTime:"1",
                //     endTime:"1886493997404"
                // },
                // sensorList: [],
                temp: 0,
                humidity: 0
            }
        },
        created() {
            // this.getList()
        },
        mounted() {
            this.init();
            setInterval(this.refresh_data, 3000);
        },
        methods:{
            init(){
                var chart = this.$echarts.init(document.getElementById("chart"));
                var option = {
                    title: {
                        text: '温度                            湿度',
                        x: 'center',
                        textStyle: {
                            color: '#fff',
                            fontSize: 24
                        }
                    },
                    grid: {
                        x: 20,
                        y: 30,
                        x2: 20,
                        y2: 10,
                    },
                    series: [{
                        name: '温度',
                        type: 'gauge',
                        center: ['25%', '50%'],
                        min: 0,
                        max: 60,
                        splitNumber: 8,
                        axisLine: {
                            lineStyle: {
                                color: [
                                    [12 / 400, '#668888'],
                                    [35.4 / 400, '#888888'],
                                    [55.4 / 400, '#aa8888'],
                                    [150.4 / 400, '#cc8888'],
                                    [250.4 / 400, '#dd8888'],
                                    [400 / 400, '#ff8888']
                                ],
                                width: 3,
                            }
                        },
                        axisLabel: {
                            show: false,
                        },
                        detail: {
                            formatter: '{value}℃',
                            offsetCenter: [0, '60%'],
                        },
                        data: [{
                            value: this.temp
                        }]
                    },{
                        name: '湿度',
                        type: 'gauge',
                        center: ['75%', '50%'],
                        min: 0,
                        max: 100,
                        splitNumber: 8,
                        axisLine: {
                            lineStyle: {
                                color: [
                                    [12 / 400, '#668888'],
                                    [35.4 / 400, '#888888'],
                                    [55.4 / 400, '#aa8888'],
                                    [150.4 / 400, '#cc8888'],
                                    [250.4 / 400, '#dd8888'],
                                    [400 / 400, '#ff8888']
                                ],
                                width: 3,
                            }
                        },
                        axisLabel: {
                            show: false,
                        },
                        detail: {
                            formatter: '{value}%',
                            offsetCenter: [0, '60%'],
                        },
                        data: [{
                            value: this.humidity
                        }]
                    }]
                };
                chart.setOption(option);
            },
            refresh_data(){
                this.temp = document.getElementById("hide_temp").innerText;
                this.humidity = document.getElementById("hide_humidity").innerText;
                this.init();
            }

            // getList() {
            //     var that = this;
            //     var timestamp = Date.parse(new Date());
            //     this.query.startTime = timestamp - 86400000;
            //     this.query.endTime = timestamp;
            //     fetchList(this.query).then(res => {
            //         if(res.code === 0){
            //             that.sensorList = res.data;
            //             this.init();
            //         }
            //     });
            // },
            // formatDate(datetime) {
            //     let date = new Date(datetime);
            //     return date.toLocaleDateString() + ' ' + date.getHours() + date.toLocaleTimeString().substr(-6,6)
            // },
            // init(){
            //     let tempLiuru = [];
            //     let humidityLiuru = [];
            //     for(let sensor in this.sensorList){
            //         tempLiuru.push({
            //             value: [
            //                 this.formatDate(this.sensorList[sensor].createTime),
            //                 this.sensorList[sensor].temp,
            //             ]
            //         });
            //         humidityLiuru.push({
            //             value: [
            //                 this.formatDate(this.sensorList[sensor].createTime),
            //                 this.sensorList[sensor].humidity,
            //             ]
            //         });
            //     }
            //
            //     var chart = this.$echarts.init(document.getElementById("chart"));
            //     var option = {
            //         legend: {
            //             data: ['温度(红)', '湿度(白)'],
            //             textStyle: {
            //                 color: '#fff',
            //                 fontSize: 16
            //             }
            //         },
            //         grid:{
            //             x:'6%',
            //             y:'10%',
            //             x2:'6%',
            //             y2:'16%'
            //         },
            //         xAxis:{
            //             type:'time',
            //             splitNumber:6,
            //             axisLabel:{
            //                 formatter:'{value}',
            //                 color: 'rgba(255, 255, 255)',
            //                 fontSize: 16
            //             },
            //             splitLine:{show: false}
            //         },
            //         yAxis:{
            //             type:'value',
            //             splitNumber:4,
            //             axisLabel:{
            //                 formatter:'{value}',
            //                 color: 'rgba(255, 255, 255)',
            //                 fontSize: 16
            //             }
            //         },
            //         series:[{
            //             name: '温度(红)',
            //             type: 'line',
            //             showSymbol: false,
            //             symbolSize:6,
            //             data: tempLiuru,
            //             itemStyle: {
            //                 nomal: {
            //
            //                 }
            //             },
            //             lineStyle: {
            //                 width: 5,
            //                 color: "#EA4335"
            //             }
            //         },{
            //             name: '湿度(白)',
            //             type: 'line',
            //             showSymbol: false,
            //             symbolSize:6,
            //             data: humidityLiuru,
            //             itemStyle: {
            //                 nomal: {
            //
            //                 }
            //             },
            //             lineStyle: {
            //                 width: 5,
            //                 color: "#FFF"
            //             }
            //         }]
            //     };
            //     chart.setOption(option);
            // }
        }
    }
</script>

<style scoped>
    .sensor_meter {
        width:500px;
        height:250px;
    }
    /*.sensor_line {*/
    /*    width:500px;*/
    /*    height:250px;*/
    /*}*/
</style>
