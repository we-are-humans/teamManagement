<template>
    <div class="MembersSection">
        <table border="1">
           <tr>
             <td width="20%">普通用户</td>
             <td width="20%">0</td>
             <td width="20%">全价</td>
             <td width="20%" class="lll"><a href="">编辑</a><p>|</p><a href="">删除</a></td>
           </tr>
           <tr>
             <td width="20%">普通用户</td>
             <td width="20%">0</td>
             <td width="20%">全价</td>
             <td width="20%" class="lll"><a href="">编辑</a><p>|</p><a href="">删除</a></td>
           </tr>
           <tr>
             <td width="20%">普通用户</td>
             <td width="20%">0</td>
             <td width="20%">全价</td>
             <td width="20%" class="lll"><a href="">编辑</a><p>|</p><a href="">删除</a></td>
           </tr>
           <tr>
             <td width="20%">普通用户</td>
             <td width="20%">0</td>
             <td width="20%">全价</td>
             <td width="20%" class="lll"><a href="">编辑</a><p>|</p><a href="">删除</a></td>
           </tr>
        </table>
    </div>
</template>

<script>
    export default {
        name: "WyqMembersSection"
    }
</script>

<style scoped>
  .lll{
    display: table-cell;
  }
  .lll>*{
    float: left;
  }
  .MembersSection table {
    background-color: transparent;
    width: 100%;
    border-collapse: collapse;
    border-spacing: 0;
    
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    border:0;
}

table a{
  color: #198cb7;
}

 
  .MembersSection table tr{
  border:0;
  }
  .WyqMembersSection table td {
    border: 1px solid #ddd;
    height: 40px;
    font-size: 10px;
    padding-left: 5px;
    padding-right: 5px;
  }
</style>
