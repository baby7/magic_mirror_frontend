<template>
    <div>
        <div style="border:1px solid #FFFFFF;width: 310px;margin-left: 0;margin-bottom: 5px"/>
        <ul v-for="(timor,index) in timorList" :key="timor" style="width: 35%;margin-left: 0;padding-left: 0px">
            <li v-if="index < 12" style="font-family:'BebasNeueRegular',Arial,Helvetica,sans-serif;text-shadow: 0 0 5px #00c6ff;color: #fff;font-size: 23px;">
                <span>{{timor.name}}</span>
                <span style="float: right">{{timor.date}}</span>
            </li>
            <div v-if="index <11" style="border:0.5px dashed #666666;width: 100%;"/>
        </ul>
    </div>
</template>

<script>
    import { getList } from '@/api/timor'

    export default {
        name: "Timor",
        data() {
            return {
                timorList: [],
                query: {
                    current:1,
                    size:20
                }
            }
        },
        methods:{
            getData(){
                getList(this.query).then(res => {
                    // this.timorList = res.holiday;
                    if(res.code === 0){
                        for(let holiday in res.data.records){
                            let timor = {
                                name:res.data.records[holiday].name,
                                date:res.data.records[holiday].date.substring(0, 10)
                            };
                            this.timorList.push(timor)
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
