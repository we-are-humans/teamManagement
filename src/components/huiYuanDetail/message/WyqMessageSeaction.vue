<template>
  <div class="MessageSection">

    <table>
      <tr>
        <th width="5%">ID</th>
        <th width="15%">用户名</th>
        <th width="5%">姓名</th>
        <th width="5%">状态</th>
        <th width="10%">可用余额</th>
        <th width="15%">消费总额</th>
        <th width="15%">可用积分</th>
        <th width="15%">积分总额</th>
        <th width="15%">注册日期</th>
      </tr>
    </table>
  </div>

</template>

<script>
    export default {
        name: "WyqMessageSeaction"
    }
</script>

<style scoped>
.MessageSection table{
  width:100%;
  border-collapse: collapse;
}
  .MessageSection table th{
    text-align: left;
    background-image: -webkit-linear-gradient(top,#F8F8F8 0,#ECECEC 100%);
  }
  .MessageSection table th {
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

</style>
