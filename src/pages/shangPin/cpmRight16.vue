<template>
  <div class="content">
    <cpm-content-top :item="data[1]" :isview="isview"></cpm-content-top>
    <div class="cont">
      <cpm-shop-jifen-cont></cpm-shop-jifen-cont>
      <cpm-shop-jifen-pages></cpm-shop-jifen-pages>
      <cpm-shop-jifen-footen></cpm-shop-jifen-footen>
    </div>
  </div>
</template>

<script>
  import CpmContentTop from "../../components/cmsPublic/cpmContentTop";
  import CpmShopJifenCont from "../../components/shangPinDetail/shopjifen/cpmShopJifenCont";
  import CpmShopJifenPages from "../../components/shangPinDetail/shopjifen/cpmShopJifenPages";
  import CpmShopJifenFooten from "../../components/shangPinDetail/shopjifen/cpmShopJifenFooten";
  export default {
    name: "cpmRight16",
    components: {CpmShopJifenFooten, CpmShopJifenPages, CpmShopJifenCont, CpmContentTop},
    props: ["data","isview"]
  }
</script>

<style scoped>
  .content{
    flex: 1;
  }
</style>
