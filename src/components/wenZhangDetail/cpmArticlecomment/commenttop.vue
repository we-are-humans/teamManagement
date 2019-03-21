<template>
  <div class="top">
    <p>文章标题：<input type="text" /></p>
    <p>状态：
      <select name="">
        <option value="">全部</option>
        <option value="">待审核</option>
        <option value="">上架</option>
        <option value="">下架</option>
      </select>
    </p><br />
    <p>评论日期：<input type="date" /> - <input type="time" /></p>
    <p>发布人：<input type="text" /></p>
    <p><button>搜素</button></p>
    <p><button>全部</button></p>
  </div>
</template>

<script>
    export default {
        name: "commenttop"
    }
</script>

<style scoped>

</style>
