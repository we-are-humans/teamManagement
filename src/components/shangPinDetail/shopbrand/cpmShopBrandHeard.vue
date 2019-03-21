<template>
  <div class=" search">
    品牌名称：<input type="text" id="name" name="name" value="" class="width-100">
    排序：<select id="orderby" name="orderby">
    <option value="sort asc">默认</option>
    <option value="name asc">名称</option>
    <option value="id">添加时间</option>
  </select>
    <input id="btn-search" type="button" value="搜索">
    <input id="btn-search-all" type="button" value="全部">
    <input type="button" class="opt-btn" onclick="add()" value="添加品牌">
  </div>
</template>

<script>
    export default {
        name: "cpm-shop-brand-heard"
    }
</script>

<style scoped>



</style>
