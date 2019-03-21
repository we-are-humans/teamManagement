<template>
  <div class="articleDelete">
    <deleteheader></deleteheader>
    <deletetop></deletetop>
    <deletetable></deletetable>
    <deletefooter></deletefooter>
  </div>
</template>

<script>
  import deleteheader from './deleteheader'
  import deletetop from './deletetop'
  import deletetable from './deletetable'
  import deletefooter from './deletefooter'
export default {
  name: "cpmArticledelete",
  components:{deleteheader,deletetop,deletetable,deletefooter},
  data() {
    return {
    }
  }
}
</script>

<style>
  @import "../../../static/css/common.css";
  @import "../../../static/css/articleDelete.css";
</style>
