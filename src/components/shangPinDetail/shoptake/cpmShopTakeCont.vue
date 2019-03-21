<template>
  <table>
    <tbody>
    <tr>
      <th width="5%">
        <label><input type="checkbox" id="select-all" onchange="selectAll(this)" value="">ID</label>
      </th>
      <th width="20%">商品</th>
      <th width="25%">评论</th>
      <th width="10%">状态</th>
      <th width="10%">用户名</th>
      <th width="10%">订单号</th>
      <th width="10%">时间</th>
      <th width="10%">操作</th>
    </tr>
    <tr>
      <td><label><input class="list-box" type="checkbox" value="86" onchange="selectItem()"> 86</label></td>
      <td>
        <img src="/static/img/huanqiu.jpg" class="list-img">
        得力A4复印纸打印白纸70g整箱...			</td>
      <td>
        sadfasdfasf			</td>
      <td id="status_86"><span class="yes">已审核</span></td>
      <td>test001</td>
      <td></td>
      <td>2018-07-17 11:10:15</td>
      <td id="btns_86">    <a href="javascript:void(0)" onclick="checkClick(86, 2)">审核不通过</a>
      </td>
    </tr>
    </tbody>
  </table>
</template>

<script>
    export default {
        name: "cpm-shop-take-cont"
    }
</script>

<style scoped>

  table {
    background-color: transparent;
  }
  table {
    border-spacing: 0;
    border-collapse: collapse;
  }
  .list table {
    width: 100%;
    border-collapse: collapse;
  }
  .list table th {
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
  label {
    display: inline-block;
    max-width: 100%;
    margin-bottom: 5px;
    font-weight: 700;
  }
  input[type=checkbox], input[type=radio] {
    margin: 4px 0 0;
    margin-top: 1px\9;
    line-height: normal;
  }

  .list table td {
    border: 1px solid #ddd;
    height: 40px;
    font-size: 13px;
    padding-left: 5px;
    padding-right: 5px;
  }
  .list-img {
    width: 40px;
    height: 40px;
    margin-right: 10px;
    float: left;
  }
  .yes {
    color: #4cb549;
  }

  .list a {
    color: #198cb7;
  }
  .lll{
    display: table-cell;
    text-indent: 2px;
  }
  .lll>*{
    float: left;
  }
</style>
