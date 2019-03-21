<template>
  <div class="batch">
    批量操作：
    <select id="batch-type">
      <option value="">请选择...</option>
      <option value="check_1">批量通过</option>
      <option value="check_0">批量不通过</option>
    </select>
    <input id="batch-btn" type="button" value="确定" onclick="batch()" disabled="disabled">
  </div>
</template>

<script>
    export default {
        name: "cpm-shop-take-footen"
    }
</script>

<style scoped>

</style>
