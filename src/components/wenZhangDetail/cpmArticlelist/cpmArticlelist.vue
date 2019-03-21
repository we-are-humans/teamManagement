<template>
  <div class="articleList" >
    <article-listheader></article-listheader>
    <article-listtop></article-listtop>
    <article-listtable :data="data.article"></article-listtable>
    <article-listfooter></article-listfooter>
  </div>
</template>

<script>
  import articleListheader from './listHeader'
  import articleListtop from './listTop'
  import articleListtable from './listTable'
  import articleListfooter from './listFooter'
  import data from"../../assets/person-data"
    export default {
      name: "cpmArticlelist",
      components: {articleListheader, articleListtop, articleListtable, articleListfooter},
      data() {
        return {
          data: {}
        }
      },
      mounted(){
        this._initData()
      },
      methods: {
        _initData() {
          this.data = data
        }
      }
    }
</script>

<style>
  @import "../../../static/css/common.css";
  @import "../../../static/css/articleList.css";
</style>
