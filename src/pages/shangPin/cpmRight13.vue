<template>
  <div class="content">
    <cpm-content-top :item="data[1]" :isview="isview"></cpm-content-top>
    <div class="cont">
      <cpm-shop-short-heaad></cpm-shop-short-heaad>
      <cpm-shop-short-cont></cpm-shop-short-cont>
    </div>
  </div>
</template>

<script>
  import CpmContentTop from "../../components/cmsPublic/cpmContentTop";
  import CpmShopShortHeaad from "../../components/shangPinDetail/shopshort/cpmShopShortHeaad";
  import CpmShopShortCont from "../../components/shangPinDetail/shopshort/cpmShopShortCont";
  export default {
    name: "cpmRight13",
    components: {CpmShopShortCont, CpmShopShortHeaad, CpmContentTop},
    props: ["data","isview"]
  }
</script>

<style scoped>
  .content{
    flex: 1;
  }
</style>

