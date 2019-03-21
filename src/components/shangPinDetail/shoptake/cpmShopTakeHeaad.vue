<template>
  <div class="search">
    <div class="row">
      商品标题：<input type="text" name="title" value="" class="width-100" datatype="*2-23" errormsg="标题请输入2-32个字符">
      评论状态：<select name="status">
      <option value="">全部</option>
      <option value="0">未审核</option><option value="1">已审核</option><option value="2">审核未通过</option>				</select>
    </div>
    <div class="row">
      评论日期：<input type="text" name="start_date" value="" datatype="date" errormsg="开始日期格式不正确" class="width-100 picktime" style="margin-right:0px;">
      - <input type="text" name="end_date" value="" datatype="date" errormsg="截止日期格式不正确" class="width-100 picktime">
      发布人：<input type="text" name="username" value="" class="width-60" datatype="*2-23" errormsg="用户名请输入5-32个字符">
      <input id="btn-search" type="button" value="搜索">
      <input id="btn-search-all" type="button" value="全部">
      <input type="button" class="opt-btn" onclick="add()" value="添加商品">
    </div>
  </div>
</template>

<script>
    export default {
        name: "cpm-shop-take-heaad"
    }
</script>

<style scoped>

 .search {
    margin: 8px 0px;
    padding: 4px 0px 8px 0px;
    border-bottom: 1px dotted #E2E2E2;
  }
  .search .row {
    margin-top: 5px;
    margin-bottom: 5px;
  }
  .row {
    padding: 0px;
    margin: 0px auto;
  }
  .width-100 {
    width: 120px;
  }
</style>
