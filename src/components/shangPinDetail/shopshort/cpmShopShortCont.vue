<template>
  <table>
    <tbody>
    <tr>
      <th>分类ID</th>
      <th>分类名称</th>
      <th>上级ID</th>
      <th>公开</th>
      <th>允许评论</th>
      <th>排序</th>
      <th>操作</th>
    </tr>
    <tr>
      <td>16</td>
      <td> 办公用品</td>
      <td>0</td>
      <td><span class="yes">√</span></td>
      <td><span class="yes">√</span></td>
      <td>100</td>
      <td class="lll">
        <a href="" onclick="edit(16)">编辑</a> <p>|</p>
        <a href="">属性</a> |
        <a href="" onclick="del(16)">删除</a>
      </td>
    </tr>
    <tr>
      <td>19</td>
      <td> ------	办公用纸</td>
      <td>16</td>
      <td><span class="yes">√</span></td>
      <td><span class="yes">√</span></td>
      <td>100</td>
      <td class="lll">
        <a href="" onclick="edit(19)">编辑 </a> <p>|</p>
        <a href="">属性 </a> |
        <a href="" onclick="del(19)">删除 </a>
      </td>
    </tr>
    </tbody>
  </table>
</template>

<script>
    export default {
        name: "cpm-shop-short-cont"
    }
</script>

<style scoped>

  table {
    width: 100%;
    border-collapse: collapse;
  }
  table th {
    border: 1px solid #ddd;
    border-bottom: 2px solid #ddd;
    font-weight: 700;
    background: #F2F2F2;
    vertical-align: middle;
    height: 40px;
    color: #707070;
    padding-left: 5px;
    padding-right: 5px;
    background-image: -webkit-linear-gradient(top,#F8F8F8 0,#ECECEC 100%);
  }

  input[disabled="disabled"] {
    opacity: 0.65;
    cursor: not-allowed;
  }
   .batch input {
    margin-left: 4px;
  }
  select{
    height: 23px;
  }
 table td {
    border: 1px solid #ddd;
    height: 40px;
    font-size: 13px;
    padding-left: 5px;
    padding-right: 5px;
  }
  .lll{
    display: table-cell;
    text-indent: 2px;
  }
  .lll>*{
    float: left;
  }
</style>
