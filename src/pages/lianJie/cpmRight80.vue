<template>
    <div class="content">
      <cpm-content-top :item="data[8]" :isview="isview"></cpm-content-top>
      <div class="link">
        <cpm-link-names></cpm-link-names>
        <cpm-link-table></cpm-link-table>
      </div>
    </div>
</template>

<script>
    import CpmContentTop from "../../components/cmsPublic/cpmContentTop";
    import CpmLinkNames from "../../components/lianJieDetail/linkList/cpmLinkNames";
    import CpmLinkTable from "../../components/lianJieDetail/linkList/cpmLinkTable";
    export default {
      name: "cpmRight80",
      components: {CpmLinkTable, CpmLinkNames, CpmContentTop},
      props: ["data","isview"]
    }
</script>

<style scoped>
  .content{
    flex: 1;
  }
</style>
