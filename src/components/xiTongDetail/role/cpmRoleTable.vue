<template>
  <div class="table">
    <table>
      <tr class="title">
        <td height="39">ID</td>
        <td width="80">角色名</td>
        <td width="40">状态</td>
        <td width="40">排序</td>
        <td>拥有者</td>
        <td>管理菜单</td>
        <td width="80">操作</td>
      </tr>
      <tr v-for="i in dataa">
        <td>{{i.ids}}</td>
        <td>{{i.roleName}}</td>
        <td class="tds">{{i.tai}}</td>
        <td>{{i.orders}}</td>
        <td>{{i.owner}}</td>
        <td>{{i.manner}}</td>
        <td class="lll">
          <a href="javascript:;">{{i.opera.edit}}</a>
          <a href="javascript:;">{{i.opera.del}}</a>
        </td>
      </tr>
    </table>
    <div class="page">
      <p>当前第1页 共1页&nbsp;</p>
    </div>
  </div>
</template>

<script>
    export default {
        name: "cpmRoleTable",
      props:["dataa"]
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
  table tr:nth-child(2) td:last-child{
    height: 68px;
  }
  table tr td:last-child a{
    color: #198cb7;
    line-height: 14px;
    border-right: 1px solid #336cb8;
    align-items: center;
    padding: 0 5px;
  }
  table tr td .spans{
    color: #ff1f1f;
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
  .page p{
    color:#333333 ;
    font-size: 13px;
    line-height:39px ;
    border: 1px solid #dddddd;
    border-top: 0;
    background: #eff3f8;
    text-align: right;
  }
</style>
