<template>
    <div class="content">
      <cpm-content-top :item="data[6]" :isview="isview"></cpm-content-top>
      <div class="active">
        <cpm-active-list-name></cpm-active-list-name>
        <cpm-active-table></cpm-active-table>
      </div>
    </div>
</template>

<script>
    import CpmContentTop from "../../components/cmsPublic/cpmContentTop";
    import CpmActiveListName from "../../components/zhaunTiDetail/cpmActiveListName";
    import CpmActiveTable from "../../components/zhaunTiDetail/cpmActiveTable";
    export default {
      name: "cpmRight60",
      components: {CpmActiveTable, CpmActiveListName, CpmContentTop},
      props: ["data","isview"]
    }
</script>

<style scoped>
  .content{
    flex: 1;
  }
</style>
