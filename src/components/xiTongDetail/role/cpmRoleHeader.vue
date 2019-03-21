<template>
  <div class="header">
    <img class="img1" :src="data.img1" alt="">
    <h6>{{data.tit1}}</h6>
    <img class="img2" :src="data.img2" alt="">
    <h5>{[data,tit2</h5>
  </div>
</template>

<script>
    export default {
        name: "cpmRoleHeader",
      props:["data"]
    }
</script>

<style scoped>
  .header{
    height: 39px;
    width: 100%;
    background:#f5f5f5;
    display: flex;
    align-items: center;
    border-bottom: 1px solid #e5e5e5;
  }
  .header .img1{
    width:20px ;
    height:20px ;
    margin-left: 5px;
    margin-right: 12px;
  }
  .header h6,.header h5{
    color: #646464;
    font-size: 14px;
    line-height:14px ;
    font-weight: 100;
  }
  .header .img2{
    width:5px ;
    height:9px ;
    margin-left:8px ;
    margin-right: 5px;
  }
</style>
