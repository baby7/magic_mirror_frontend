<template>
    <div id="app">
        <Weather/>
        <DateTime/>
        <Timor/>
        <div class="main">
            <router-view/>
        </div>
        <title-msg/>
        <news-info/>
    </div>
</template>

<script>
    import Weather from "@/components/main/components/weather/weather";
    import DateTime from "@/components/main/components/date_time/date_time";
    import Timor from "@/components/main/components/timor/timor";
    import TitleMsg from "@/components/main/components/title_msg/title_msg"
    import NewsInfo from "@/components/main/components/news_info/news_info"

    export default {
        name: "Main",
        components: {
            DateTime,
            Weather,
            Timor,
            TitleMsg,
            NewsInfo
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
</style>
