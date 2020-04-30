<template>
    <div class="box">
        <p class="news-info">
            {{news}}
        </p>
    </div>
</template>

<script>
    import { fetchList } from '@/api/news_info'

    export default {
        name: "NewsInfo",
        data() {
            return {
                news: "tssssssssssssssssssssssss",
                timer: '',
                newsList: [],
                query: {
                    current:1,
                    size:20
                }
            }
        },
        created() {
            this.getList()
        },
        methods: {
            getList() {
                var that = this;
                fetchList(this.query).then(res => {
                    if(res.code === 0){
                        for(let info in res.data.records){
                            that.newsList.push(res.data.records[info].tilte)
                        }
                        that.timer = setInterval(that.change, 10000);
                    }
                });
            },
            change() {
                this.news = this.newsList[Math.floor((Math.random()*this.newsList.length))]
            }
        },
        beforeDestroy() {
            clearInterval(this.timer);
        }
    }
</script>

<style scoped>
    .news-info {
        position:fixed;
        bottom:0;
        left:0;
        height: 50px;
        text-align: right;
        line-height: 50px;
        width: 100%;
        color: #fff;
        font-size: 40px;
        display: inline-block;
        white-space: nowrap;
        animation: 10s wordsLoop linear infinite normal;
    }
    * {
        margin: 0;
        padding: 0;
    }

    .box {
        width: 100%;
        margin: 0 auto;
        overflow: hidden;
    }

    @keyframes wordsLoop {
        0% {
            transform: translateX(200px);
            -webkit-transform: translateX(200px);
        }
        100% {
            transform: translateX(-100%);
            -webkit-transform: translateX(-100%);
        }
    }

    @-webkit-keyframes wordsLoop {
        0% {
            transform: translateX(200px);
            -webkit-transform: translateX(200px);
        }
        100% {
            transform: translateX(-100%);
            -webkit-transform: translateX(-100%);
        }
    }
</style>
