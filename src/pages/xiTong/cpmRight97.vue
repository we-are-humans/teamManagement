<template>
  <div class="content">
    <cpm-content-top :item="data[9]" :isview="isview"></cpm-content-top>
    <cpm-pay-table></cpm-pay-table>
  </div>
</template>

<script>
  import CpmContentTop from "../../components/cmsPublic/cpmContentTop";
  import CpmPayTable from "../../components/xiTongDetail/pay/cpmPayTable";
  export default {
    name: "cpmRight97",
    components: {CpmPayTable, CpmContentTop},
    props: ["data","isview"]
  }
</script>

<style scoped>
  .content{
    flex: 1;
  }
</style>
