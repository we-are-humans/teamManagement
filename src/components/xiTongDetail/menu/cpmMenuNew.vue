<template>
  <div class="newMenu">
    <input type="button" value="新建菜单">
  </div>
</template>

<script>
    export default {
        name: "cpmMenuNew"
    }
</script>

<style scoped>
  .newMenu{
    display: flex;
    justify-content: flex-end;
    margin: 0 12px;
    height: 54px;
    align-items: center;
    border-bottom: 1px solid #e2e2e2;
  }
  .newMenu input{
    width:80px ;
    height:32px ;
    border:1px solid #cccccc ;
    outline: none;
    border-radius: 3px;
    color:#333333 ;
    font-size: 14px;
    line-height:32px ;
    background: white;
    cursor: pointer;
  }
</style>
