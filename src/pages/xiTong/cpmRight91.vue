<template>
  <div class="content">
    <cpm-content-top :item="data[9]" :isview="isview"></cpm-content-top>
    <cpm-delivery-table></cpm-delivery-table>
  </div>
</template>

<script>
  import CpmContentTop from "../../components/cmsPublic/cpmContentTop";
  import CpmDeliveryTable from "../../components/xiTongDetail/delivery/cpmDeliveryTable";
  export default {
    name: "cpmRight91",
    components: {CpmDeliveryTable, CpmContentTop},
    props: ["data","isview"]
  }
</script>

<style scoped>
  .content{
    flex: 1;
  }
</style>
