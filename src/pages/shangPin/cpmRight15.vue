<template>
  <div class="content">
    <cpm-content-top :item="data[1]" :isview="isview"></cpm-content-top>
    <div class="cont">
      <cpm-shop-brand-heard></cpm-shop-brand-heard>
      <cpm-shop-brand-cont></cpm-shop-brand-cont>
      <cpm-shop-brand-footen></cpm-shop-brand-footen>
    </div>
  </div>
</template>

<script>
  import CpmContentTop from "../../components/cmsPublic/cpmContentTop";
  import CpmShopBrandHeard from "../../components/shangPinDetail/shopbrand/cpmShopBrandHeard";
  import CpmShopBrandCont from "../../components/shangPinDetail/shopbrand/cpmShopBrandCont";
  import CpmShopBrandFooten from "../../components/shangPinDetail/shopbrand/cpmShopBrandFooten";
  export default {
    name: "cpmRight15",
    components: {CpmShopBrandFooten, CpmShopBrandCont, CpmShopBrandHeard, CpmContentTop},
    props: ["data","isview"]
  }
</script>

<style scoped>
  .content{
    flex: 1;
  }
</style>
