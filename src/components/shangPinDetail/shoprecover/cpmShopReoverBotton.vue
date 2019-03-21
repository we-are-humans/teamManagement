<template>
  <div class="batch">
    批量操作：
    <select id="batch-type">
      <option value="">请选择...</option>
      <option value="restore">批量还原</option>
      <option value="recycle_del">批量删除</option>
    </select>
    <input id="batch-btn" type="button" value="确定" onclick="batch()" disabled="disabled">
  </div>
</template>

<script>
    export default {
        name: "cpm-shop-reover-botton"
    }
</script>

<style scoped>

 .batch {
    border: 0px solid #B0E0E6;
    margin-top: 8px;
    height: 36px;
    background: #FFF;
  }
 .batch input[disabled="disabled"] {
    opacity: 0.65;
    cursor: not-allowed;
  }
  .batch input {
    margin-left: 4px;
  }

</style>
