<template>
  <div class="content">
    <cpm-content-top :item="data[2]" :isview="isview"></cpm-content-top>
    <div class="articleDelete">
      <deletetop></deletetop>
      <deletetable></deletetable>
      <deletefooter></deletefooter>
    </div>
  </div>
</template>

<script>
  import CpmContentTop from "../../components/cmsPublic/cpmContentTop";
  import Deletetop from "../../components/wenZhangDetail/cpmArticledelete/deletetop";
  import Deletetable from "../../components/wenZhangDetail/cpmArticledelete/deletetable";
  import Deletefooter from "../../components/wenZhangDetail/cpmArticledelete/deletefooter";
  export default {
    name: "cpmRight22",
    components: {Deletefooter, Deletetable, Deletetop, CpmContentTop},
    props: ["data","isview"]
  }
</script>

<style>
  @import "../../assets/css/articleDelete.css";
  .content{
    flex: 1;
  }
</style>
