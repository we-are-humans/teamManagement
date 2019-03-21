<template>
  <div class="content">
    <cpm-content-top :item="data[1]" :isview="isview"></cpm-content-top>
    <div class="cont">
      <cpm-shop-take-heaad></cpm-shop-take-heaad>
      <cpm-shop-take-cont></cpm-shop-take-cont>
      <cpm-shop-take-pages></cpm-shop-take-pages>
      <cpm-shop-take-footen></cpm-shop-take-footen>
    </div>
  </div>
</template>

<script>
  import CpmContentTop from "../../components/cmsPublic/cpmContentTop";
  import CpmShopTakeFooten from "../../components/shangPinDetail/shoptake/cpmShopTakeFooten";
  import CpmShopTakePages from "../../components/shangPinDetail/shoptake/cpmShopTakePages";
  import CpmShopTakeCont from "../../components/shangPinDetail/shoptake/cpmShopTakeCont";
  import CpmShopTakeHeaad from "../../components/shangPinDetail/shoptake/cpmShopTakeHeaad";
  export default {
    name: "cpmRight14",
    components: {CpmShopTakeHeaad, CpmShopTakeCont, CpmShopTakePages, CpmShopTakeFooten, CpmContentTop},
    props: ["data","isview"]
  }
</script>

<style scoped>
  .content{
    flex: 1;
  }
</style>
