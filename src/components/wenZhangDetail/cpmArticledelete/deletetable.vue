<template>
  <div class="table">
    <table border="1" cellspacing="0" cellpadding="0">
      <tr>
        <th>文章ID</th><th>文章标题</th><th>删除时间</th><th>操作</th>
      </tr>
      <tr>
        <td><input type="checkbox" /> 1 </td>
        <td><a href="javaScript:;">七天无理由退货</a></td>
        <td> 2017-07-23 09:44:30 </td>
        <td class="lll"><a href="javaScript:;">恢复</a> <p>|</p> <a href="javaScript:;">清除</a></td>
      </tr>
    </table>
  </div>
</template>

<script>
    export default {
        name: "deletetable"
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
