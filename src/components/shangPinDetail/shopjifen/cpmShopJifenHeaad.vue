<template>
  <ul class="search">
    <li>
      <span>品名：</span>
      <input type="text">
    </li>
    <li>
      <span>分类：</span>
      <select name="" id="">
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
      <input type="button" value="添加积分商品">
    </li>
  </ul>

</template>

<script>
    export default {
        name: "cpm-shop-jifen-heaad"
    }
</script>

<style scoped>

  .search{
    height: 40px;
    width: 100%;
  }
  .search {
    height: 40px;
    width: 100%;
  }
  .search li{
    float: left;
  }



  .search  li:first-of-type  input{
    border: 1px solid #aaa;
    width: 120px;
  }
  .search .cont-butt{
    float: right;
    margin-right: 20px;
  }
</style>
