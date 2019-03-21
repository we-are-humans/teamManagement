<template>
    <div class="MessageHeader">
        用户名：<input type="text" id="username " name="username " value class="width-100">
        姓名：<input type="text"  id="realname"  name="realname" value class="width-60">
      注册日期
      状态：<select>
              <option value>全部</option>
              <option value="0">冻结</option>
              <option value="1">正常</option>
           </select>
      排序：<select>
      <option value="0">默认</option>
      <option value="1">登录次数</option>
      <option value="2">最后登录</option>
      <option value="4">可用金额</option>
      <option value="5">消费金额</option>
    </select>
      <input  id="search" type="button" value="搜索" >
      <input  id="search" type="button" value="全部">
      <input type="button" value="添加会员" onclick="add()" class="btn">
    </div>
</template>

<script>
    export default {
        name: "WyqMessageHeader"
    }
</script>

<style scoped>
.MessageHeader input[type="button"] {
    height: 26px;
    border: 1px solid #2e6da4;
    background: #337ab7;
    color: #FFF;
    border-radius: 3px;
    margin-right: 4px;
}

</style>
