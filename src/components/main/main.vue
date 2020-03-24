<template>
    <div id="app">
        <Weather/>
        <DateTime/>
        <Timor/>
        <div class="main">
            <router-view/>
        </div>
        <span class="title-msg">主人，你好啊！</span>
        <h1 class="news-info">北京22日12时到24时新增8例境外输入，全天10例</h1>
    </div>
</template>

<script>
    import Weather from "@/components/main/components/weather/weather";
    import DateTime from "@/components/main/components/date_time/date_time";
    import Timor from "@/components/main/components/timor/timor";

    export default {
        name: "Main",
        components: {
            DateTime,
            Weather,
            Timor
        },
        data() {
            return {
            }
        },
        computed:{
        },
        watch: {
        },
        methods: {
        },
        mounted(){
        }
    }
</script>

<style scoped>
    .main{
        width: 1340px;
        padding: 0px 20px 20px 20px;
        overflow:hidden;
        margin-top: 40px;
    }
    .title-msg {
        position:absolute;
        height: 50px;
        text-align: center;
        line-height: 50px;
        width: 100%;
        color: #fff;
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        font-size: 60px;
    }
    .news-info {
        position:fixed; bottom:0px; left:0px;
        height: 50px;
        text-align: center;
        line-height: 50px;
        width: 100%;
        color: #fff;
    }
</style>
