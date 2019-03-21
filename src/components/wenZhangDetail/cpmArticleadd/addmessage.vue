<template>
  <div class="message">
    <p>跳转网址：<input type="url" name="jumpUrl"/> <span>设置此项，文章内容将不在显示</span></p>
    <p>作者：<input type="text" name="author"/></p>
    <p name="isSpeak">允许评论：
      <input type="checkbox" value="1"/>禁止
      <input type="checkbox" value="2"/>允许
      <input type="checkbox" value="3"/>评论
    </p>
    <p name="isOpen">是否公开：
      <input type="checkbox" value="1"/>隐藏
      <input type="checkbox" value="2"/>公开
    </p>
    <p name="examine">审核：
      <input type="checkbox" value="1"/>已审核
      <input type="checkbox" value="2"/>未审核
      <input type="checkbox" value="3"/>审核未通过
    </p>
    <p>排序：<input type="text" name="isList"/> <span>输入整数，越大排名越靠前，默认文章ID作为排序</span></p>
    <p>浏览次数：<input type="text" name="lookNum"/></p>
    <p>支持次数：<input type="text" name="agreeNum"/></p>
    <p>反对次数：<input type="text" name="againstNum"/></p>
    <p>缩率图：<input type="text" /> <span>（默认最大2M，默认为文章内容的第一张图片）</span></p>
    <p>描述：<textarea name="message" id=""></textarea><br />
      <span>输入1-255个字符，默认为文章前200个字符</span>
    </p>
  </div>
</template>

<script>
    export default {
        name: "addmessage",
      data() {
        return {
        }
      }
    }
</script>

<style scoped>
  @import "../../../assets/css/articleAdd.css";
</style>
