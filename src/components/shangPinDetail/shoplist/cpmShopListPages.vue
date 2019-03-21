<template>
  <div class="list-page">
    当前第1页 共2页
    <a href="">下一页</a>
    <a href="">末页</a>

    <span class="H_page">
                跳转到第
                <input id="page_pageBox" class="H-pagebox" value="">页
                <input type="button" value="确定" >
                </span>
  </div>
</template>

<script>
    export default {
        name: "cpm-shop-list-pages"
    }
</script>

<style scoped>
   .list-page {
    text-align: right;
    border-bottom: 1px solid #e0e0e0;
    padding: 12px 6px;
    background-color: #EFF3F8;
  }
  .H-pagebox {
    width: 26px;
  }
</style>
