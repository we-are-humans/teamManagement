<template>
  <div class="articleClass">
    <classheader></classheader>
    <classtop></classtop>
    <classtable></classtable>
    <classfooter></classfooter>
  </div>
</template>

<script>
  import classheader from './classheader'
  import classtop from './classtop'
  import classtable from './classtable'
  import classfooter from './classfooter'
export default {
  name: "cpmArticleclass",
  components:{
    classheader,
    classtop,
    classtable,
    classfooter
  },
  data() {
    return {
    }
  }
}
</script>

<style>
  @import "../../../static/css/common.css";
  @import "../../../static/css/articleClass.css";
</style>
