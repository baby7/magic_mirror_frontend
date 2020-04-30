<template>
    <div id="weather-view-he"></div>
</template>

<script>
    export default {
        name: "Weather",
        created() {
            const WIDGET = document.createElement('script');
            WIDGET.text = "WIDGET = {ID: 'EzULeHNCgJ'}";
            document.body.appendChild(WIDGET);
            const s = document.createElement('script');
            s.type = 'text/javascript';
            s.src = 'https://apip.weatherdt.com/view/static/js/r.js?v=1111';
            document.body.appendChild(s);
        },
        mounted() {
            var id = setInterval(() => {
                if(document.getElementById("weather-view-he").style.cssText
                    === "background-color:#000;width:500px;height:250px;font-size: 16px;"){
                    clearInterval(id)
                }
                document.getElementById("weather-view-he").style.cssText
                    = "background-color:#000;width:500px;height:250px;font-size: 16px;"
            },500)
        }
    }
</script>

<style scoped>

</style>
