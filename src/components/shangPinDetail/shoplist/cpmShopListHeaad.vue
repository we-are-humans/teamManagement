<template>
  <div class="cont-list">
    <ul>
      <li>
        <span>品名：</span>
        <input type="text">
      </li>
      <li>
        <span>分类：</span>
        <select name="">
          <option value="" selected>全部</option>
          <option value="" >办公用品</option>
          <option value="" >-----办公用纸</option>
          <option value="23">--------电脑打印纸</option>
          <option value="26">--------喷墨打印纸</option>
          <option value="43">--------彩色复印纸</option>
          <option value="45">--------收银纸</option>
          <option value="46">--------相片打印纸</option>
          <option value="23">--------电脑打印纸</option>
          <option value="26">--------喷墨打印纸</option>
          <option value="43">--------彩色复印纸</option>
          <option value="45">--------收银纸</option>
          <option value="46">--------相片打印纸</option>
          <option value="" >--------电脑打印纸</option>
          <option value="" >--------电脑打印纸</option>
          <option value="" >--------电脑打印纸fsfs </option>
          <option value="" >--------电脑打印纸</option>
          <option value="" >--------电脑打印纸</option>
          <option value="" >--------电脑打印纸</option>
          <option value="" >--------电脑打印纸</option>
          <option value="" >--------电脑打印纸</option>
          <option value="" >--------电脑打印纸</option>
          <option value="" >--------电脑打印纸</option>
        </select>
      </li>
      <li>
        <span>品牌：</span>
        <select name="" id="">
          <option value="" selected>全部</option>
          <option value="">尖兵</option>
          <option value="">尖兵</option>
          <option value="">尖兵</option>
          <option value="">尖兵</option>
          <option value="">尖兵</option>
          <option value="">尖兵</option>
        </select>
      </li>
      <li>
        <span>促销：</span>
        <select name="" id="">
          <option value="" selected>全部</option>
          <option value="">促销</option>
          <option value="">新品</option>
          <option value="">热销</option>
          <option value="">打折</option>
        </select>
      </li>
      <li>
        <span>  状态：</span>
        <select name="" id="">
          <option value="" selected>全部</option>
          <option value="">上架</option>
          <option value="">下架</option>
        </select>
      </li>
      <li>
        <span> 排序：</span>
        <select name="" id="">
          <option value="" selected>默认</option>
          <option value="">商品ID</option>
          <option value="">更新时间</option>
        </select>
      </li>
      <li>
        <input type="button" value="搜索">
      </li>
      <li>
        <input type="button" value="全部">
      </li>
      <li class="cont-butt">
        <input type="button" value="添加商品">
      </li>
    </ul>
  </div>
</template>

<script>
    export default {
        name: "cpm-shop-list-heaad"
    }
</script>

<style scoped>
  .cont-list{
    height: 40px;
    width: 1159px;
    margin: 8px 0px;
    padding: 4px 0px 8px 0px;
    border-bottom: 1px dotted #E2E2E2;
    float: left;
    display: inline-block;
  }
  .cont-list  input{
    height: 26px;
    border: 1px solid #aaa;
    border-radius: 3px;
    padding-left: 2px;
    margin-right: 3px;
  }
  .cont-list ul{
    height: 40px;
    width: 100%;
  }
  .cont-list ul li{
    float: left;
  }
  .cont-list ul li select{
    margin-right: 10px;
    height: 23px;
  }


  .cont-list ul li:first-of-type  input{
    border: 1px solid #aaa;
    width: 120px;
  }
  .cont-list ul .cont-butt{
    float: right;
    margin-right: 20px;
  }
</style>
