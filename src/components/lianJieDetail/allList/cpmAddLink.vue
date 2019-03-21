<template>
    <div class="adds">
      <div class="ps">
        <p>链接名称：</p>
        <input type="text">
        <span>*</span>
      </div>
      <div class="ods">
        <p>排序：</p>
        <input type="text">
        <span>*</span>
      </div>
      <div class="tas">
        <p>状态：</p>
        <input type="radio" name="b">隐藏
        <input type="radio" name="b" checked class="btn">公开
        <span>*</span>
      </div>
      <div class="tou">
        <p>投放时间：</p>
        <input type="text">
        <span>-</span>
        <input type="text">
        <span>*</span>
        <p>不填表示不限</p>
      </div>
      <div class="biao">
        <p>标签：</p>
        <input type="text">
        <span>*</span>
        <p>标签用于链接分类</p>
      </div>
      <div class="shang">
        <p>上传图片：</p>
        <div class="int">
          <input type="file" multiple="multiple" style="opacity: 0;" >
          <span>+</span>
        </div>
        <span>(最大2.00M)</span>
      </div>
      <div class="lian">
        <p>链接网址：</p>
        <input type="text">
        <span>需要http或者https开头</span>
      </div>
      <div class="bei">
        <p>备注信息：</p>
        <textarea></textarea>
      </div>
      <input type="button"  class="btns" value="确定保存">
    </div>
</template>

<script>
    export default {
        name: "cpmAddLink"
    }
</script>

<style scoped>
  .ps{
    display: flex;
    align-items: center;
    border-bottom: 1px dashed #d4d4d4;
  }
.ps p{
  color:#333333 ;
  font-size: 14px;
  line-height:58px ;
  padding-left: 18px;
}
  .ps input{
    width:248px ;
    height: 31px;
    border:1px solid #aaaaaa ;
    color: #333333;
    font-size: 14px;
    line-height:14px;
    outline: none;
    border-radius: 3px;
  }
  .ps span{
    color: #ff1f1f;
    margin-left: 5px;
  }
  .ods{
    display: flex;
    align-items: center;
    border-bottom: 1px dashed #d4d4d4;
  }
  .ods p{
    color:#333333 ;
    font-size: 14px;
    line-height:58px ;
    padding-left: 51px;
  }
  .ods input{
    width:73px ;
    height: 31px;
    border:1px solid #aaaaaa ;
    color: #333333;
    font-size: 14px;
    line-height:14px;
    outline: none;
    border-radius: 3px;
  }
  .ods span{
    color: #ff1f1f;
    margin-left: 5px;
  }
  .tas{
    display: flex;
    align-items: center;
    border-bottom: 1px dashed #d4d4d4;
  }
  .tas p{
    color:#333333 ;
    font-size: 14px;
    line-height:58px ;
    padding-left: 51px;
  }
  .tas input{
    color: #333333;
    font-size: 14px;
    line-height:14px;
  }
  .tas input:nth-child(2){
    margin-right: 6px;
  }
  .tas input:nth-child(3){
    margin-right: 6px;
    margin-left: 20px;
  }
  .tas .btn{
    color: #4cb549;
  }
  .tas span{
    color: #ff1f1f;
    margin-left: 5px;
  }
  .tou{
    display: flex;
    align-items: center;
    border-bottom: 1px dashed #d4d4d4;
  }
  .tou p{
    color:#333333 ;
    font-size: 14px;
    line-height:58px ;
    padding-left: 18px;
  }
  .tou input{
    width:185px ;
    height: 31px;
    border:1px solid #aaaaaa ;
    color: #333333;
    font-size: 14px;
    line-height:14px;
    outline: none;
    border-radius: 3px;
  }
  .tou span:nth-child(5){
    color: #ff1f1f;
    margin-left: 5px;
  }
  .tou span:nth-child(3){
    color: #333333;
  }
  .tou p:last-child{
    color: #aaaaaa;
    margin-left: 18px;
  }
  .biao{
    display: flex;
    align-items: center;
    border-bottom: 1px dashed #d4d4d4;
  }
  .biao p{
    color:#333333 ;
    font-size: 14px;
    line-height:58px ;
    padding-left: 51px;
  }
  .biao input{
    width:248px ;
    height: 31px;
    border:1px solid #aaaaaa ;
    color: #333333;
    font-size: 14px;
    line-height:14px;
    outline: none;
    border-radius: 3px;
  }
  .biao span{
    color: #ff1f1f;
    margin-left: 5px;
  }
  .biao p:last-child{
    color: #aaaaaa;
    margin-left: 18px;
  }
  .shang{
    display: flex;
    align-items: center;
    border-bottom: 1px dashed #d4d4d4;
  }
  .shang .int{
    width:36px ;
    height: 36px;
    border:1px solid #c2ebff ;
    display: flex;
    align-items: center;
    justify-content: center;
    /*cursor: pointer;*/

  }
  .shang .int span{
    color:#c2ebff  ;
    font-size:26px ;
    line-height:26px ;
    margin-top: -2px;
    margin-left: -37px;
    /*cursor: pointer;*/
  }
  .shang p{
    color:#333333 ;
    font-size: 14px;
    line-height:58px ;
    padding-left: 18px;
  }
  .shang input{
    width:36px ;
    height: 36px;
    border:1px solid #c2ebff ;
    outline: none;
  }
  .shang span{
    color: #aaaaaa;
    margin-left: 19px;
    font-size: 14px;
    line-height: 14px;
  }
  .lian{
    display: flex;
    align-items: center;
    border-bottom: 1px dashed #d4d4d4;
  }
  .lian p{
    color:#333333 ;
    font-size: 14px;
    line-height:58px ;
    padding-left: 18px;
  }
  .lian input{
    width:373px ;
    height: 31px;
    border:1px solid #aaaaaa ;
    color: #333333;
    font-size: 14px;
    line-height:14px;
    outline: none;
    border-radius: 3px;
  }
  .lian span{
    color: #aaaaaa;
    margin-left: 19px;
    font-size: 14px;
    line-height: 14px;
  }
  .bei{
    display: flex;
    align-items: center;
  }
  .bei p{
    color:#333333 ;
    font-size: 14px;
    line-height:58px ;
    padding-left: 18px;
  }
  .bei textarea{
    width:623px ;
    height: 111px;
    border:1px solid #aaaaaa ;
    color: #333333;
    font-size: 14px;
    line-height:27px;
    outline: none;
    border-radius: 3px;
    margin-top: 10px;
  }
  .adds .btns{
    display: flex;
    align-items: center;
    justify-content: center;
    width:132px ;
    height: 58px;
    color: white;
    font-size: 20px;
    line-height:20px ;
    background: #337ab7;
    outline: none;
    border: 0;
    border-radius: 7px;
    margin-top:67px ;
    margin-left: 225px;
    cursor: pointer;
  }
</style>
