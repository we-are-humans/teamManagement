<template>
  <div class="MessageFooter">
  <table>
    <tr>
      <td width="5%">1</td>
      <td width="15%" ><a href="" class="mmo">ewqewq</a></td>
      <td width="5%"></td>
      <td width="5%">正常</td>
      <td width="10%">0.00</td>
      <td width="15%">0.00</td>
      <td width="15%">20</td>
      <td width="15%">20</td>
      <td width="15%">2019-3-15</td>
    </tr>
  </table>
    <div class="list-page">当前第1页 共一页</div>
  </div>

</template>

<script>
    export default {
        name: "WyqMessageFooter"
    }
</script>

<style scoped>
  .MessageFooter table{
    width: 100%;
  }
  .MessageFooter table tr{
    width: 100%;
    
  }
.list-page{
  text-align: right;
  background-color: #EFF3F8;
}
.mmo{
  color:#337ab7;
}
</style>
