<template>
  <div class="table">
    <table>
      <tr class="title">
        <td>菜单名</td>
        <td>状态</td>
        <td>排序</td>
        <td>描述</td>
        <td>操作</td>
      </tr>
      <tbody v-for="item in data">
        <tr>
          <td class="col">{{item.title1}}</td>
          <td class="tds">{{item.tai}}</td>
          <td>{{item.num1}}</td>
          <td>{{item.abs}}</td>
          <td class="lll">
            <a href="javascript:;">{{item.opera.edit}}</a>
            <a href="javascript:;">{{item.opera.del}}</a>
          </td>
        </tr>
        <tr v-for="i in item.list1" >
          <td>&nbsp;&nbsp;--&nbsp;{{i.title2}}</td>
          <td class="tds">{{i.tai}}</td>
          <td>{{i.num1}}</td>
          <td>{{i.abs}}</td>
          <td class="lll">
            <a href="javascript:;">{{i.opera.edit}}</a>
            <a href="javascript:;">{{i.opera.del}}</a>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
    export default {
        name: "cpmMenuTable",
      props:["data"]
    }
</script>

<style scoped>
  .table {
    margin-left: 11px;
    margin-right: 11px;
    margin-top: 8px;
  }
  .table table{
    width: 100%;
    border-collapse: collapse;
  }
  table tr td{
    color:#333333 ;
    font-size: 13px;
    border: 1px solid #dddddd;
    height: 39px;
    padding-left: 5px;
    padding-right: 5px;
  }
  table tr:hover{
    background:#f5f9fa ;
  }
  .lll{
    display: table-cell;
  }
  .lll>*{
    float: left;
  }
  table tr td:last-child a{
    color: #198cb7;
    line-height: 14px;
    border-right: 1px solid #336cb8;
    align-items: center;
    padding: 0 5px;
  }
  table tr td:last-child a:nth-child(1){
    padding-left: 0;
  }
  table tr td:last-child a:last-child{
    padding-right: 0;
    border-right: 0;
  }
  table tr td:last-child a:hover{
    text-decoration: underline;
  }
  table tr .tds{
    color: #4cb549;
  }
  .table table .title{
    color: #707070;
    background: #f3f3f3;
    font-weight: 700;
  }
  .table table tr .col{
    color: #333333;
    font-weight: 600;
  }
</style>
