<template>
    <div>
        <div style="border:1px solid #FFFFFF;width: 310px;margin-left: 0;margin-bottom: 5px"/>
        <ul v-for="(timor,index) in timorList" :key="timor" style="width: 310px;margin-left: 0;padding-left: 0px">
            <li v-if="index < 14" style="font-family:'BebasNeueRegular',Arial,Helvetica,sans-serif;text-shadow: 0 0 5px #00c6ff;color: #fff;font-size: 23px;">
                <span>{{timor.name}}</span>
                <span style="float: right">{{timor.date}}</span>
            </li>
            <div v-if="index <13" style="border:0.5px dashed #666666;width: 310px;"/>
        </ul>
    </div>
</template>

<script>
    import { getTimor } from '@/api/timor'

    export default {
        name: "Timor",
        data() {
            return {
                timorList: []
            }
        },
        methods:{
            getData(){
                getTimor("2020").then(res => {
                    // this.timorList = res.holiday;
                    if(res.code === 0){
                        for (let holiday in res.holiday) {
                            let timor = {name:res.holiday[holiday].name,date:res.holiday[holiday].date}
                            if(JSON.stringify(this.timorList).indexOf(JSON.stringify(timor.name))===-1){
                                this.timorList.push(timor)
                            }
                        }
                    }
                });
            }
        },
        mounted() {
            this.getData();
        }
    }
</script>

<style scoped>
    li {
        list-style-position: inside;
        list-style-image: url('/icon.png');
    }
</style>
