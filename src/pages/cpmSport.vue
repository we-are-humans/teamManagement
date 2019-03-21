<template>
  <div class="over">
    <cpm-header @changeDetail="changeDetail" :headData="area"></cpm-header>
    <cpmBox :father="yeMian"></cpmBox>
    <!--<div class="alone"></div>-->
  </div>
</template>

<script>
  import cpmBox from "./cpmBox"
  import CpmHeader from "../components/cmsPublic/header/cpmHeader";
    export default {
        name: "cpmSport",
      components: {
        CpmHeader,
        cpmBox
      },
      data(){
        return{
          area:[
            {
              child1: "personInfo",
              listData: "个人信息"
            },
            {
              child1: "password",
              listData: "修改密码"
            },
            {
              child1: "dairy",
              listData: "操作日志"
            }
          ],
          yeMian:""
        }
      },
      methods:{
        changeDetail(huan){
            this.yeMian = huan;
        }
      }
    }
</script>

<style scoped>
.over{
  min-height: 100%;
  display: flex;
  flex-direction: column;
}
</style>
