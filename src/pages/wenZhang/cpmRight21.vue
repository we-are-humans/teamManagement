<template>
  <div class="content ">
    <cpm-content-top :item="data[2]" :isview="isview"></cpm-content-top>
    <div class="articleAdd">
      <addtop></addtop>
    </div>
  </div>
</template>

<script>
  import CpmContentTop from "../../components/cmsPublic/cpmContentTop"
  import Addtop from "../../components/wenZhangDetail/cpmArticleadd/addtop";
  export default {
    name: "cpmRight21",
    components: {Addtop, CpmContentTop},
    props: ["data","isview"]
  }
</script>

<style>
  @import "../../assets/css/articleAdd.css";

  .content{
    flex: 1;
  }
</style>
