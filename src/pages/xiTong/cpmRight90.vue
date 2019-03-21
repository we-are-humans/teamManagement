<template>
    <div class="content">
      <cpm-content-top :item="data[9]" :isview="isview"></cpm-content-top>
      <cpm-system-table></cpm-system-table>
    </div>
</template>

<script>
    import CpmContentTop from "../../components/cmsPublic/cpmContentTop";
    import CpmSystemTable from "../../components/xiTongDetail/system/cpmSystemTable";
    export default {
      name: "cpmRight90",
      components: {CpmSystemTable, CpmContentTop},
      props: ["data","isview"]
    }
</script>

<style scoped>
  .content{
    flex: 1;
  }
</style>
