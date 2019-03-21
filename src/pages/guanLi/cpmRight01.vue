<template>
  <div class="content">
    <cpm-content-top :item="data[0]" :isview="isview"></cpm-content-top>
    <index-table></index-table>
  </div>
</template>

<script>
  import CpmContentTop from "../../components/cmsPublic/cpmContentTop";
  import IndexTable from "../../components/guanLiDetail/indexTable";
    export default {
      name: "cpmRight",
      components: {IndexTable, CpmContentTop},
      props: ["data","isview"]
    }
</script>

<style>
  .content{
    flex: 1;
  }
</style>
