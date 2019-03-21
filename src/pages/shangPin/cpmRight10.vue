<template>
    <div class="content">
      <cpm-content-top :item="data[1]" :isview="isview"></cpm-content-top>
      <div class="cont">
        <cpm-shop-list-heaad></cpm-shop-list-heaad>
        <cpm-shop-list-cont></cpm-shop-list-cont>
        <cpm-shop-list-pages></cpm-shop-list-pages>
        <cpm-shop-list-footen></cpm-shop-list-footen>
      </div>
    </div>
</template>

<script>
    import CpmContentTop from "../../components/cmsPublic/cpmContentTop";
    import CpmShopListHeaad from "../../components/shangPinDetail/shoplist/cpmShopListHeaad";
    import CpmShopListCont from "../../components/shangPinDetail/shoplist/cpmShopListCont";
    import CpmShopListPages from "../../components/shangPinDetail/shoplist/cpmShopListPages";
    import CpmShopListFooten from "../../components/shangPinDetail/shoplist/cpmShopListFooten";
    export default {
      name: "cpmRight10",
      components: {CpmShopListFooten, CpmShopListPages, CpmShopListCont, CpmShopListHeaad, CpmContentTop},
      props: ["data","isview"]
    }
</script>

<style scoped>
  .content{
    flex: 1;
  }
</style>
