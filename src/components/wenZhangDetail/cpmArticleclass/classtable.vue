<template>
  <div class="table">
    <table border="1" cellspacing="0" cellpadding="0">
      <tr>
        <th>分类名称[编号]</th><th>上级分类</th><th>允许评论</th>
        <th>是否显示</th><th>分类排序</th><th>操作</th>
      </tr>
      <tr>
        <td><button>-</button> 网站公告[分类ID:1][系统分类]</td>
        <td>帮助中心</td>
        <td> <mark>x</mark> </td>
        <td> <mark>√</mark> </td>
        <td> 1 </td>
        <td class="lll"><a href="javaScript:;">编辑</a> <p>|</p> <a href="javaScript:;">添加子类</a> <p>|</p> <a href="javaScript:;">删除</a></td>
      </tr>
      <tr>
        <td><button>-</button> --新手指南[分类ID:4]</td>
        <td>帮助中心</td>
        <td> <mark>x</mark> </td>
        <td> <mark>√</mark> </td>
        <td> 1 </td>
        <td class="lll"><a href="javaScript:;">编辑</a> <p>|</p> <a href="javaScript:;">添加子类</a> <p>|</p> <a href="javaScript:;">删除</a></td>
      </tr>
    </table>
  </div>
</template>

<script>
    export default {
        name: "classtable"
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
