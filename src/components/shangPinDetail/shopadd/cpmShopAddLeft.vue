<template>
  <div class="jiben" >
    <div class="jibenone">
      <span>商品标题：</span>
      <input type="text" name="shopname">
      <span class="xin">*</span>
    </div>
    <div class="jibenone">
      <span>标题样式： </span>
      <div class="check3">
        <input type="checkbox" name="font" id="">加粗
        <input type="checkbox" name="font" id="">标红
        <input type="checkbox" name="font" id="">斜体
      </div>
    </div>
    <div class="jibenone">
      <span>所属分类：</span>
      <select name="fenlei" id="">
        <option value="12" selected>全部</option>
        <option value="13" >办公用品</option>
        <option value="14" >-----办公用纸</option>
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
      </select>
    </div>
    <div class="jibenone">
      <span>品牌：</span>
      <select name="brand" id="">
        <option value="0" selected>全部</option>
        <option value="1">尖兵</option>
        <option value="2">尖兵</option>
        <option value="3">尖兵</option>
        <option value="4">尖兵</option>
        <option value="5">尖兵</option>
        <option value="6">尖兵</option>
      </select>
    </div>
    <div class="jibenone">
      <span>价格：</span>
      <input type="text" name="shoppice" id="">
      <span class="xin">*</span>
      <span>最多保留两位小数</span>
    </div>
    <div class="jibenone">
      <span>件数：</span>
      <input type="text" value="999" name="shopnum" id="">
    </div>
    <div class="jibenone">
      <span>简介：</span>
      <textarea id="description"  class="width-300 height-90"></textarea>

    </div>
    <div class="jibenone">
      <span>商品图片：</span>
      <div class="filen">
        <input type="file" name="shopimg"  id="">
      </div>
      <span class="xin">*</span>
      <span class="form-tips">(最大2M，最多5张，默认第一个图片作为主图)</span>
    </div>
    <div class="jibenone">
      <span>商品详情：</span>
    </div>
  </div>
</template>

<script>
    export default {
        name: "cpm-shop-add-left"
    }
</script>

<style scoped>

  .jibenone{
    border-bottom: 1px dotted #d4d4d4;
    min-height: 40px;
    margin-top: 4px;
    /*display: none;*/
  }
  .jibenone span:first-of-type{
    display: inline-block;
    text-align: right;
    padding: 0px;
    line-height: 32px;
    font-size: 13px;
    color: #333;
    width: 80px;
  }
  .jibenone:first-of-type input{
    width: 500px;

  }

  input[type=text] {
    height: 26px;
    border-radius: 3px;
    border: 1px solid #aaaaaa;
    line-height: 100%;
    padding: 4px 4px;
    vertical-align: top;
    width: 80px;
  }
  .check3{
    display: inline-block;
  }
  .xin{
    color: rgb(219, 3, 3);
  }
  .filen{
    width: 30px;
    height: 30px;
    margin-left: 10px;
    margin-right: 5px;
    background: url(/static/img/upload_icon.png);
    background-size: 100% 100%;
    cursor: pointer;
    overflow: hidden;
    display: inline-block;
    position: relative;
  }

  .filen input{
    width: 30px;
    height: 30px;
    line-height: 30;
    cursor: pointer;
    outline: medium none;
    position: absolute;
    left: 0px;
    top: 0px;
    z-index: 10;
    filter: alpha(opacity=0);
    -moz-opacity: 0;
    opacity: 0;
  }

  .height-90 {
    height: 90px;
  }

  .width-300 {
    width: 300px;
  }
  .form-tips {
    color: #aaaaaa;
    margin-left: 10px;
    display: inline-block;
    padding-top: 4px;
  }
</style>
