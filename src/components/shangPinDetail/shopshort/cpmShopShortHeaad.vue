<template>
  <div class="search">
    <input type="button" value="添加分类" onclick="add()" class="opt-btn">
  </div>
</template>

<script>
    export default {
        name: "cpm-shop-short-heaad"
    }
</script>

<style scoped>
  .search .opt-btn {
    float: right;
  }
  .search {
    margin: 8px 0px;
    padding: 4px 0px 8px 0px;
    border-bottom: 1px dotted #E2E2E2;
    height: 40px;
  }

</style>
