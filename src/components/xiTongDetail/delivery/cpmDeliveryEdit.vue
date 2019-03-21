<template>
    <div>
      <div class="method" v-if="isshow">
        <div class="top">
          <p>配送方式：</p>
          <span>{{data.method1}}</span>
        </div>
        <div class="boot">
          <p>选择地区：</p>
          <span>*</span>
        </div>
        <div class="tai">
          <p>是否配送：</p>
          <input  type="radio" name="a">{{data.isDelivery1}}
          <input class="radio1" type="radio" name="a" checked>{{data.isDelivery}}
          <span>*</span>
        </div>
        <div class="bot">
          <p>配送费：</p>
          <input type="text" :value="data.fei">
          <span>*</span>
          <span>输入0-9999999之间的数字</span>
        </div>
        <div class="bot1">
          <p>免费额度：</p>
          <input type="text" :value="data.free">
          <span>*</span>
          <span>订单金额达到此值时免除运费。输入0-9999999之间的数字</span>
        </div>
        <div class="bot2">
          <p>匹配顺序：</p>
          <input type="text" :value="data.orders">
          <span>*</span>
          <span>越小规则越优先使用，输入0-9999999之间的整数</span>
        </div>
        <input type="button" @click="back1" class="btn" value="确定保存">
      </div>
    </div>
</template>

<script>
    export default {
        name: "cpmDeliveryEdit",
      props: ["data","isshow"],
      methods:{
        back1(){
          this.$emit("back1")
        }
      }
    }
</script>

<style scoped>
  .method{
    margin:17px  24px 0;
  }
  .method p{
    color:#333333 ;
    font-size: 14px;
    line-height:57px ;
  }
  .top{
    display: flex;
    align-items: center;
    border-bottom: 1px dashed #d4d4d4;
  }
  .top span{
    color:#333333 ;
    font-size: 14px;
    line-height: 14px;
  }
  .top p{
    padding-left: 19px;
  }
  .boot{
    display: flex;
    align-items: center;
    border-bottom: 1px dashed #d4d4d4;
    padding-left: 19px;
  }
  .boot span{
    color: #ff0000;
  }
  .bot{
    display: flex;
    border-bottom: 1px dashed #d4d4d4;
  }
  .bot input{
    width: 73px;
    height: 30px;
    border: 1px solid #aaaaaa;
    border-radius: 4px;
    margin-top: 10px;
    outline: none;
  }
  .bot p{
    padding-left: 35px;
    border-bottom: 0;
  }
  .bot span:nth-child(3){
    color: #ff0000;
    margin-top: 22px;
    margin-left: 5px;
  }
  .bot span:nth-child(4){
    color: #aaaaaa;
    margin-top: 22px;
    margin-left: 18px;
  }
  .tai{
    display: flex;
    align-items: center;
    color:#333333 ;
    font-size: 14px;
  }
  .tai span{
    color: #ff0000;
    margin-left:26px;
  }
  .tai p{
    padding-left: 19px;
  }
  .tai .radio1{
    margin-left: 26px;
  }
  .bot1{
     display: flex;
     align-items: center;
     border-bottom: 1px dashed #d4d4d4;
     padding-left: 19px;
   }
  .bot1 input{
    outline: none;
    border: 1px solid #aaaaaa;
    width:73px ;
    height:31px ;
    color:#333333 ;
    font-size: 14px;
    line-height:14px ;
    border-radius: 3px;
  }
  .bot1 span:nth-child(3){
    color: #ff0000;
    margin-left:5px;
    margin-top: 22px;
  }
  .bot1 span:nth-child(4){
    color: #aaaaaa;
    margin-top: 22px;
    margin-left: 18px;
  }
  .bot2{
    display: flex;
    align-items: center;
    border-bottom: 1px dashed #d4d4d4;
    padding-left: 19px;
  }
  .bot2 input{
    outline: none;
    border: 1px solid #aaaaaa;
    width:73px ;
    height:31px ;
    color:#333333 ;
    font-size: 14px;
    line-height:14px ;
    border-radius: 3px;
  }
  .bot2 span:nth-child(3){
    color: #ff0000;
    margin-left:5px;
    margin-top: 22px;
  }
  .bot2 span:nth-child(4){
    color: #aaaaaa;
    margin-top: 22px;
    margin-left: 18px;
  }
  .method .btn{
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
