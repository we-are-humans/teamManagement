<template>
    <div class="new">
      <div class="huo">
        <p>活动名称：</p>
        <input type="text">
        <span>输入1-32位字符</span>
      </div>
      <div class="time">
        <p>活动时间：</p>
        <input type="text">
        <span>-</span>
        <input type="text">
      </div>
      <div class="hu">
        <p>用户等级：</p>
        <input type="checkbox"> 普通用户
        <input type="checkbox"> 铜牌会员
        <input type="checkbox"> 银牌会员
        <input type="checkbox"> 金牌会员
        <input type="checkbox"> 钻石会员
      </div>
      <div class="shi">
        <p>使用方式：</p>
        <select>
          <option value="">请选择</option>
          <option value="">无优惠</option>
          <option value="">赠送礼品</option>
          <option value="">金额减免</option>
          <option value="">享受折扣</option>
        </select>
      </div>
      <div class="gong">
        <p>是否公开：</p>
        <input type="radio" name="cc">隐藏
        <input type="radio" name="cc" checked>公开
      </div>
      <div class="pai">
        <p>排序：</p>
        <input type="text" value="100">
        <span>越小越优先匹配</span>
      </div>
      <div class="tu">
        <p>视图文件：</p>
        <input type="text">
        <span>用于展示活动的视图文件（以.php结尾），不填表示默认</span>
      </div>
      <div class="xiang">
        <div class="pp">
          <p>活动详情：</p>
        </div>
        <div id="editor" type="text/plain" style="width:100%;height:300px;"></div>
        <input type="button" value="添加">
      </div>
      <!--<div class="inp">-->
        <!--<input type="button" value="添加">-->
      <!--</div>-->
    </div>
</template>

<script>
    export default {
        name: "cpmNewActiveEdit",
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
  .new{
    margin: 18px 24px 70px;
  }
  .huo{
    display: flex;
    align-items: center;
    border-bottom: 1px dashed #d4d4d4;
  }
  .huo p{
    color: #333333;
    font-size: 14px;
    line-height: 57px;
    padding-left: 18px;
  }
  .huo input{
    width: 373px;
    height: 31px;
    outline: none;
    border: 1px solid #aaaaaa;
    color: #333333;
    line-height: 14px;
    font-size: 14px;
    border-radius: 3px;
  }
  .huo span{
    color: #aaaaaa;
    font-size: 14px;
    line-height: 14px;
    margin-left: 17px;
  }
  .time{
    display: flex;
    align-items: center;
    border-bottom: 1px dashed #d4d4d4;
  }
  .time p{
    color: #333333;
    font-size: 14px;
    line-height: 57px;
    padding-left: 18px;
  }
  .time input{
    width: 185px;
    height: 31px;
    outline: none;
    border: 1px solid #aaaaaa;
    color: #333333;
    line-height: 14px;
    font-size: 14px;
    border-radius: 3px;
  }
  .time span{
    color: #333333;
    margin: 0 6px;
  }
  .hu{
    display: flex;
    align-items: center;
    border-bottom: 1px dashed #d4d4d4;
  }
  .hu p{
    color: #333333;
    font-size: 14px;
    line-height: 57px;
    padding-left: 18px;
  }
  .hu input{
    color: #333333;
    line-height: 14px;
    font-size: 14px;
    margin-right: 7px;
  }
  .hu input:nth-child(3){
    margin-left: 26px;
  }
  .hu input:nth-child(4){
    margin-left: 26px;
  }
  .hu input:nth-child(5){
    margin-left: 26px;
  }
  .hu input:nth-child(6){
    margin-left: 26px;
  }
  .shi{
    display: flex;
    align-items: center;
    border-bottom: 1px dashed #d4d4d4;
  }
  .shi p{
    color: #333333;
    font-size: 14px;
    line-height: 57px;
    padding-left: 18px;
  }
  .shi select{
    width: 92px;
    height: 31px;
    outline: none;
    border: 1px solid #aaaaaa;
    color: #333333;
    line-height: 14px;
    font-size: 14px;
    border-radius: 3px;
  }
  .gong{
    display: flex;
    align-items: center;
    border-bottom: 1px dashed #d4d4d4;
  }
  .gong p{
    color: #333333;
    font-size: 14px;
    line-height: 57px;
    padding-left: 18px;
  }
  .gong input{
    color: #333333;
    line-height: 14px;
    font-size: 14px;
  }
  .gong input:nth-child(3){
    margin-left: 24px;
  }
  .pai{
    display: flex;
    align-items: center;
    border-bottom: 1px dashed #d4d4d4;
  }
  .pai p{
    color: #333333;
    font-size: 14px;
    line-height: 57px;
    padding-left: 51px;
  }
  .pai input{
    width: 148px;
    height: 31px;
    outline: none;
    border: 1px solid #aaaaaa;
    color: #333333;
    line-height: 14px;
    font-size: 14px;
    border-radius: 3px;
  }
  .pai span{
    color: #aaaaaa;
    font-size: 14px;
    line-height: 14px;
    margin-left: 17px;
  }
  .tu{
    display: flex;
    align-items: center;
    border-bottom: 1px dashed #d4d4d4;
  }
  .tu p{
    color: #333333;
    font-size: 14px;
    line-height: 57px;
    padding-left: 18px;
  }
  .tu input{
    width: 248px;
    height: 31px;
    outline: none;
    border: 1px solid #aaaaaa;
    color: #333333;
    line-height: 14px;
    font-size: 14px;
    border-radius: 3px;
  }
  .tu span{
    color: #aaaaaa;
    font-size: 14px;
    line-height: 14px;
    margin-left: 17px;
  }
  .pp p{
      color: #333333;
      font-size: 14px;
      line-height: 57px;
      padding-left: 18px;
    }
  .xiang{
    /*display: flex;*/
    /*align-items: center;*/
    /*position: relative;*/
  }

  .xiang input{
    width: 100px;
    height: 25px;
    outline: none;
    border: 1px solid #aaaaaa;
    color: #333333;
    line-height: 14px;
    font-size: 14px;
    margin-left: 200px;
    margin-top: 68px;
    background: #eaeaea;
  }
</style>
