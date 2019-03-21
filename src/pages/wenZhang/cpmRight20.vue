<template>
    <div class="content">
      <cpm-content-top :item="data[2]" :isview="isview"></cpm-content-top>
      <div class="articleList">
        <list-top></list-top>
        <list-table></list-table>
        <list-footer></list-footer>
      </div>
    </div>
</template>

<script>
    import CpmContentTop from "../../components/cmsPublic/cpmContentTop";
    import ListTop from "../../components/wenZhangDetail/cpmArticlelist/listTop";
    import ListTable from "../../components/wenZhangDetail/cpmArticlelist/listTable";
    import ListFooter from "../../components/wenZhangDetail/cpmArticlelist/listFooter";
    export default {
      name: "cpmRight20",
      components: {ListFooter, ListTable, ListTop, CpmContentTop},
      props: ["data","isview"]
    }
</script>

<style>
  @import "../../assets/css/articleList.css";
  .content{
    flex: 1;
  }
</style>
