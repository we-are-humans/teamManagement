<template>
  <div class="content">
    <cpm-content-top :item="data[2]" :isview="isview"></cpm-content-top>
    <div class="articleClass" >
      <classtop></classtop>
      <classtable></classtable>
      <classfooter></classfooter>
    </div>
  </div>
</template>

<script>
  import CpmContentTop from "../../components/cmsPublic/cpmContentTop";
  import item from "../../../static/json/person-data"
  import Classtop from "../../components/wenZhangDetail/cpmArticleclass/classtop";
  import Classtable from "../../components/wenZhangDetail/cpmArticleclass/classtable";
  import Classfooter from "../../components/wenZhangDetail/cpmArticleclass/classfooter";

  export default {
    name: "cpmRight23",
    components: {CpmContentTop,Classfooter, Classtable, Classtop,},
    props: ["data","isview"],
    data() {
      return {
        item: {}
      }
    },
    mounted(){
      this._initData()
    },
    methods: {
      _initData() {
        this.item = item
      }
    }
  }
</script>

<style>
  @import "../../assets/css/articleClass.css";
  .content{
    flex: 1;
  }
</style>

