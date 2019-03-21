<template>
  <div class="content">
    <p>文章标题：<input type="text" name="articleTitle"/></p>
    <p name="titleStyle">标题样式：
      <input type="checkbox" value="1" name="titleStyle"/>加粗
      <input type="checkbox" value="2" name="titleStyle"/>标红
      <input type="checkbox" value="3" name="titleStyle"/>倾斜
    </p>
    <p>所属分类：
      <select name="hasClass">
        <option value="1" >请选择分类</option>
        <option value="2" >网站公告</option>
        <option value="3" >行业动态</option>
        <option value="4">帮助中心</option>
        <option value="5">--新手指南</option>
        <option value="6">--配送服务</option>
        <option value="7" >--支付方式</option>
        <option value="8">--售后服务</option>
        <option value="9">--客服中心</option>
        <option value="10">--关于本站</option>
      </select>
    </p>
    <p>来源：<input type="text" placeholder="输入网址或网站名" name="fromAttr"/></p>
    <p>关键词：<input type="text" name="vip"/><span>输入1-100个字符，关键词用空格分开</span></p>
    <div class="wznr">
      文章内容：<br />
      <div id="editor" type="text/plain" style="width:100%;height:300px;line-height: 1;"></div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "addcontent",
      data () {
        return {
          ue: '',
          uedata: [],
          xierudata: []
        }
      },
      mounted() {
        this.ue = UE.getEditor('editor',{
          BaseUrl: '',
          UEDITOR_HOME_URL: 'static/utf8-jsp/',
        });
      },
      methods: {
        submits(){
          this.uedata.push(UE.getEditor('editor').getContent());
          console.log(this.uedata.join("\n"));
        },
        xieru(){
          UE.getEditor('editor').setContent('欢迎使用ueditor');
        }
      }
    }
</script>

<style scoped>
  @import "../../../assets/css/articleAdd.css";
  .articleAdd .top .content .wznr{
    text-align: left;
  }
</style>
