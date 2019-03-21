<template>
  <div class="name">
    <div class="nc">
      <p>链接名称：</p>
      <input class="txt" type="text">
      <p>标签：</p>
      <select>
        <option>全部</option>
        <option>site_bottom_link</option>
        <option>top</option>
      </select>
      <input class="btn btn1" type="button" value="搜索">
      <input class="btn" type="button" value="全部">
    </div>
    <input class="btn btn2" type="button" value="添加">
  </div>
</template>

<script>
    export default {
        name: "cpmLinkNames"
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
  .nc{
    display: flex;
    align-items: center;
  }
  .nc select{
    outline: none;
    border:1px solid #aaaaaa;
    width:166px ;
    height: 27px;

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
    margin-right: 5px;
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
</style>
