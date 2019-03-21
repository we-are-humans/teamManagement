<template>
  <div class="batch">
    批量操作：
    <select id="batch-type">&gt;
      <option value="">请选择...</option>
      <option value="hide">批量下架</option>
      <option value="show">批量上架</option>
      <option value="cat">转移分类</option>
      <option value="del">批量删除</option>
    </select>
    <select id="batch-cat" style="display:none;">
      <option value="">请选择分类</option>
      <option value="16">办公用品</option>
      <option value="19">----办公用纸</option>
      <option value="23">--------电脑打印纸</option>
      <option value="26">--------喷墨打印纸</option>
      <option value="43">--------彩色复印纸</option>
      <option value="45">--------收银纸</option>
      <option value="46">--------相片打印纸</option>
    </select>
    <input id="batch-btn" type="button" value="确定" onclick="batch()" disabled="disabled">
  </div>
</template>

<script>
    export default {
        name: "cpm-shop-jifen-footen"
    }
</script>

<style scoped>
  .batch {
    border: 0px solid #B0E0E6;
    margin-top: 8px;
    height: 36px;
    background: #FFF;
  }
</style>
