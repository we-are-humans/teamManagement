<template>
    <div class="WordsHeader">
      标题：<input type="text" id="usename " name="usename " value class="width-100">
      标题：<input type="text" id="secendname " name="secendname " value class="width-100">
      状态：<select>
      <option value>全部</option>
      <option value="0">未处理</option>
      <option value="1">已阅读</option>
      <option value="2">已下架</option>
    </select>
      类型：<select>
      <option value>全部</option>
      <option value="0">留言</option>
      <option value="1">投诉</option>
      <option value="2">咨询</option>
      <option value="1">缺货</option>
      <option value="2">售后</option>
    </select>
      <div>
        日期：<input type="text" name="start_date" value="" datatype="date" errormsg="开始日期格式不正确" class="width-100 picktime" style="margin-right:0px;">
        -<input type="text" name="end_date" value="" datatype="date" errormsg="截止日期格式不正确" class="width-100 picktime">
        <input id="btn-search" type="button" value="搜索">
        <input id="btn-search-all" type="button" value="全部">
      </div>

    </div>
</template>

<script>
    export default {
        name: "WyqWordsHeader"
    }
</script>

<style scoped>
.WordsHeader input[type="button"] {
    height: 26px;
    border: 1px solid #2e6da4;
    background: #337ab7;
    color: #FFF;
    border-radius: 3px;
    margin-right: 4px;
}
</style>
