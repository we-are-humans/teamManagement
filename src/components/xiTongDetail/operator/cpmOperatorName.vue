<template>
  <div class="name">
    <div class="namechild">
      <p>{{data.user}}：</p>
      <input class="txt txt1" type="text">
      <p>{{data.name}}：</p>
      <input class="txt" type="text">
      <p class="ps">{{data.tai}}</p>
      <select name="" class="set1">
        <option value="">{{data.option1}}</option>
        <option value="">{{data.option2}}</option>
        <option value="">{{data.option3}}</option>
      </select>
      <p>{{data.ords}}：</p>
      <select name="" class="set2">
        <option value="">{{data.val1}}</option>
        <option value="">{{data.val2}}</option>
        <option value="">{{data.val3}}</option>
        <option value="">{{data.val4}}</option>
      </select>
      <input class="btn btn1" type="button" value="搜索">
      <input class="btn" type="button" value="全部">
    </div>
    <input class="btn2" type="button" value="添加管理员">
  </div>
</template>

<script>
    export default {
        name: "cpmOperatorName",
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
  .namechild{
    display: flex;
    align-items: center;
  }
  .name p{
    color: #333333;
    font-size:14px ;
    line-height: 14px;
  }
  .name .ps{
    margin-left: 7px;
  }
  .name select{
    color: #333333;
    font-size:14px ;
    line-height: 14px;
    outline: none;
  }
  .name .set1{
    width: 54px;
    height:21px ;
    margin-right: 5px;
  }
  .name .set2{
    width: 109px;
    height:21px ;
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
  .name .txt1{
    margin-right: 7px;
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
  .name .btn2{
    width:86px ;
    height:24px ;
    background:#337ab7 ;
    border: 1px solid #2e6da4;
    color: white;
    font-size: 14px;
    line-height: 24px;
    justify-content: center;
    border-radius: 3px;
    cursor: pointer;
  }
</style>
