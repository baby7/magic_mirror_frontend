<template>
    <div id="scroll_div" class="fl">
        <div id="scroll_begin">
            {{news}}
        </div>
        <div id="scroll_end"></div>
    </div>
</template>

<script>
    import { fetchList } from '@/api/news_info'

    export default {
        name: "NewsInfo",
        data() {
            return {
                news: "test",
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
                        that.news = "";
                        for(let info in res.data.records){
                            that.newsList.push(res.data.records[info].tilte)
                            that.news += res.data.records[info].tilte + "　　　　　　　　"
                        }
                        that.scrollImgLeft()
                    }
                });
            },
            //文字横向滚动
            scrollImgLeft() {
                let speed = 20;
                setInterval(this.Marquee,speed);
            },
            Marquee(){
                let scroll_begin = document.getElementById("scroll_begin");
                let scroll_end = document.getElementById("scroll_end");
                let scroll_div = document.getElementById("scroll_div");
                scroll_end.innerHTML = scroll_begin.innerHTML;
                if(scroll_end.offsetWidth - scroll_div.scrollLeft <= 0)
                    scroll_div.scrollLeft -= scroll_begin.offsetWidth;
                else
                    scroll_div.scrollLeft++;
            }
        }
    }
</script>

<style scoped>
    #scroll_div {
        overflow: hidden;
        white-space: nowrap;
        margin-left:10px;
        position:fixed;
        bottom:0;
        left:0;
        height: 50px;
        line-height: 50px;
        width: 100%;
        color: #fff;
        font-size: 40px;
    }
    #scroll_begin,#scroll_end {
        display: inline;
    }
</style>
