<template>
  <div class="content">
    <cpm-content-top :item="data[1]" :isview="isview"></cpm-content-top>
    <div class="cont">
      <cpm-shop-add-heaad @chan="chan"></cpm-shop-add-heaad>
      <div :is="compon" class="contt" id="addfrom"></div>
      <cpm-shop-add-footen></cpm-shop-add-footen>
    </div>
  </div>
</template>

<script>
  import CpmContentTop from "../../components/cmsPublic/cpmContentTop";
  import CpmShopAddHeaad from "../../components/shangPinDetail/shopadd/cpmShopAddHeaad";
  import CpmShopAddFooten from "../../components/shangPinDetail/shopadd/cpmShopAddFooten";
  import CpmShopAddLeft from "../../components/shangPinDetail/shopadd/cpmShopAddLeft";
  import CpmShopAddRight from "../../components/shangPinDetail/shopadd/cpmShopAddRight";

  export default {
    name: "cpmRight11",
    components: {CpmShopAddRight, CpmShopAddLeft, CpmShopAddFooten,CpmShopAddHeaad, CpmContentTop},
    props: ["data","isview"],
    data(){
      return{
        compon:"CpmShopAddLeft"
      }
    },
    methods:{
      chan(dat){
        this.compon=dat;
      }
    }
  }
</script>

<style scoped>
  .content{
    flex: 1;
    overflow-y: auto;
  }
  .contt{
    margin-top: 10px;
    display: inline-block;
    width: 1140px;

  }
  .bian{
    margin-bottom: -1px;
  }
</style>
