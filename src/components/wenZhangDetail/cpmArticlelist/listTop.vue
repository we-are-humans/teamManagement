<template>
  <div class="top">
    <p>标题：<input type="text" /></p>
    <p>分类：
      <select name="">
        <option value="">全部分类</option>
        <option value="">网站公告</option>
        <option value="">行业动态</option>
        <option value="">帮助中心</option>
        <option value="">--新手指南</option>
        <option value="">--配送服务</option>
        <option value="">--支付方式</option>
        <option value="">--售后服务</option>
        <option value="">--客服中心</option>
        <option value="">--关于本站</option>
      </select>
    </p>
    <p>发布人：<input type="text" /></p>
    <p>排序：
      <select name="" id="">
        <option value="">默认</option>
        <option value="">文章ID</option>
        <option value="">更新时间</option>
        <option value="">评论次数</option>
        <option value="">浏览次数</option>
      </select>
    </p>
    <p><button>搜索</button></p>
    <p><button>全部</button></p>
    <p><button>添加文章</button></p>
  </div>
</template>

<script>
    export default {
        name: "listTop"
    }
</script>

<style scoped>

</style>
