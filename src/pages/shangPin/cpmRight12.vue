<template>
  <div class="content">
    <cpm-content-top :item="data[1]" :isview="isview"></cpm-content-top>
    <div class="cont">
      <cpm-shop-reover-heaad></cpm-shop-reover-heaad>
      <cpm-shop-reover-cont></cpm-shop-reover-cont>
      <cpm-shop-reover-botton></cpm-shop-reover-botton>
    </div>
  </div>
</template>

<script>
  import CpmContentTop from "../../components/cmsPublic/cpmContentTop";
  import CpmShopReoverHeaad from "../../components/shangPinDetail/shoprecover/cpmShopReoverHeaad";
  import CpmShopReoverCont from "../../components/shangPinDetail/shoprecover/cpmShopReoverCont";
  import CpmShopReoverBotton from "../../components/shangPinDetail/shoprecover/cpmShopReoverBotton";
  export default {
    name: "cpmRight12",
    components: {CpmShopReoverBotton, CpmShopReoverCont, CpmShopReoverHeaad, CpmContentTop},
    props: ["data","isview"]
  }
</script>

<style scoped>
  .content{
    flex: 1;
  }
</style>
