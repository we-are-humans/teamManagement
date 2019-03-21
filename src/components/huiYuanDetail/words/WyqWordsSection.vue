<template>
    <div class="WordsSection">
      <table>
        <tr>
          <th width="10%">标题</th>
          <th width="15%">用户名</th>
          <th width="10%">状态</th>
          <th width="10%">类型</th>
          <th width="20%">留言时间</th>
          <th width="15%">管理员</th>
          <th width="10%">操作时间</th>
          <th width="10%">操作</th>
        </tr>
      </table>
      <div class="second-page">当前第1页 共1页</div>
    </div>
</template>

<script>
    export default {
        name: "WyqWordsSection"
    }
</script>

<style scoped>
  .WordsSection table{
    width: 100%;
  }
  .WordsSection table th {
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

  .second-page{
    text-align: right;
  }
</style>
