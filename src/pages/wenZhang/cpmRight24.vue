<template>
  <div class="content">
    <cpm-content-top :item="data[2]" :isview="isview"></cpm-content-top>
    <div class="articleComment">
      <commenttop></commenttop>
      <commenttable></commenttable>
      <commentfooter></commentfooter>
    </div>
  </div>
</template>

<script>
  import CpmContentTop from "../../components/cmsPublic/cpmContentTop";
  import Commenttop from "../../components/wenZhangDetail/cpmArticlecomment/commenttop";
  import Commenttable from "../../components/wenZhangDetail/cpmArticlecomment/commenttable";
  import Commentfooter from "../../components/wenZhangDetail/cpmArticlecomment/commentfooter";
  export default {
    name: "cpmRight24",
    components: {Commentfooter, Commenttable, Commenttop, CpmContentTop},
    props: ["data","isview"]
  }
</script>

<style>
  @import "../../assets/css/articleComment.css";
  .content{
    flex: 1;
  }
</style>
