<template>
      <div class="name">
        <div class="nc">
          <p>活动名称：</p>
          <input class="txt" type="text">
          <p>优惠方式：</p>
          <select>
            <option>全部</option>
            <option>无优惠</option>
            <option>赠送礼品</option>
            <option>金额减免</option>
            <option>享受折扣</option>
          </select>
          <input class="btn btn1" type="button" value="搜索">
          <input class="btn" type="button" value="全部">
        </div>
        <input class="btn btn2" type="button" value="添加活动">
      </div>
</template>

<script>
    export default {
        name: "cpmActiveListName"
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
    width:98px ;
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
    width:148px ;
    height:31px ;
    border:1px solid #aaaaaa;
    border-radius: 3px;
    margin-right: 5px;
  }
  .name .btn{
    width: 51px;
    height: 30px;
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
    margin-left:7px;
    margin-right:10px;
  }
  .name .btn2{
    width: 86px;
    height: 31px;
  }
</style>
