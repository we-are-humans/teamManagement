<template>
  <footer>
    <div class="h4"><h4 class="lll">当前第<span>1</span>页  共<span>3</span>页  <a href="avaScript:;">下一页</a>  <a href="avaScript:;">末页</a> 跳转至第<input type="text" />页   <button>确定</button></h4></div>
    <p>批量操作:
      <select name="">
        <option value="">请选择...</option>
        <option value="">批量隐藏</option>
        <option value="">批量公开</option>
        <option value="">转移分类</option>
        <option value="">批量删除</option>
      </select>
      <button>确定</button>
    </p>
  </footer>
</template>

<script>
    export default {
        name: "commentfooter"
    }
</script>

<style scoped>
.lll{
  display: flex;
}
</style>
