<template>
  <div class="table">
    <table border="1" cellspacing="0" cellpadding="0">
      <tr>
        <th>文章ID</th><th>文章标题</th><th>所属分类</th>
        <th>是否公开</th><th>审核</th><th>浏览</th>
        <th>排序</th><th>发布时间</th><th>操作</th>
      </tr>
      <tr v-for="item in data">
        <td><input type="checkbox" />{{item.articleId}} </td>
        <td><a href="javaScript:;">{{item.articleTitle}}</a></td>
        <td>{{item.isclassName}}</td>
        <td><mark>{{item.isOpen}}</mark></td>
        <td><mark>{{item.examine}}</mark></td>
        <td> {{item.lookNum}} </td>
        <td> {{item.sortNum}} </td>
        <td> {{item.openTime}} </td>
        <td class="lll"><a href="javaScript:;">{{item.operation.edit}}</a> <p>|</p> <a href="javaScript:;">{{item.operation.del}}</a></td>
      </tr>
    </table>
  </div>
</template>

<script>
    export default {
        name: "listTable",
        props:["data"]
    }
</script>

<style scoped>
  .lll{
    display: table-cell;
  }
  .lll>*{
    float: left;
  }
</style>
