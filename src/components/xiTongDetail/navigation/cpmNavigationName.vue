<template>
  <div class="name">
    <div class="namechild">
      <p>地区名称：</p>
      <input class="txt" type="text">
      <input class="btn btn1" type="button" value="搜索">
      <input class="btn" type="button" value="全部">
    </div>
    <input class="btn btn2" type="button" value="添加">
  </div>
</template>

<script>
    export default {
        name: "cpmNavigationName",
      props:["data"]
    }
</script>

<style scoped>
  .name{
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 46px;
    margin:0 11px;
    border-bottom: 1px dashed #e2e2e2;
  }
  .name p{
    color: #333333;
    font-size:14px ;
    line-height: 14px;
  }
  .name input{
    outline: none;
  }
  .name .txt{
    width:118px ;
    height:24px ;
    border:1px solid #aaaaaa;
    border-radius: 3px;
  }
  .name .btn{
    width: 44px;
    height: 24px;
    background:#337ab7 ;
    border: 1px solid #2e6da4;
    color: white;
    font-size: 14px;
    line-height: 24px;
    justify-content: center;
    border-radius: 3px;
    cursor: pointer;
  }
  .name .btn1{
    margin: 0 7px;
  }
  .namechild{
    display: flex;
    align-items: center;
  }
</style>
