<template>
    <div class="ManagementHeader">
      <img src="../../assets/icon-home.gif" alt="">
        {{data[0].title}}
    </div>
</template>

<script>
    export default {
        name: "WyqManagementHeader",
        props:["data"]
    }
</script>

<style scoped>
  .ManagementHeader{
    background-color: #f5f5f5;
    height: 40px;
    border-bottom: 1px solid #e5e5e5;
    line-height: 39px;
    padding-left: 4px;
    color: #646464;
  }
  .ManagementHeader img{
    width: 20px;
    height: 20px;
    vertical-align: middle;
    margin-right: 4px;
    margin-top: 8px;
    float: left;
  }
</style>
