<template>
    <div class="MembersHeader">

      <table>
         <tr>
           <th width="20%">名称</th>
           <th width="20%">达标积分</th>
           <th width="20%">折扣</th>
           <th width="20%">操作</th>
         </tr>
      </table>
    </div>
</template>

<script>
    export default {
        name: "WyqMembersHeader"
    }
</script>

<style scoped>
  .MembersHeader table {
    width: 100%;
    border-collapse: collapse;
  }
  .MembersHeader table th {
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
    text-align: left;
  }
</style>
