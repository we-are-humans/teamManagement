<template>
    <div>
      <div class="method" v-if="isshow">
        <div class="top">
          <p>配送方式：</p>
          <input type="text" :value="data.country">
          <span>*</span>
        </div>
        <div class="bot">
          <p>排序：</p>
          <input type="text" :value="data.up">
          <span>*</span>
          <span>0-9999999</span>
        </div>
        <div class="tai">
          <p>状态：</p>
          <input  type="radio" name="a">{{data.downs}}
          <input class="radio1" type="radio" name="a" checked>{{data.down}}
          <span>*</span>
        </div>
        <div class="txte">
          <p>描述：</p>
          <textarea style="resize: none">{{data.abstract}}</textarea>
        </div>
        <input type="button" @click="backs" class="btn" value="确定保存">
      </div>
    </div>
</template>

<script>
    export default {
        name: "cpmDeliveryMethod",
      props: ["data","isshow"],
      methods:{
        backs(){
          this.$emit("backs")
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
.top p{
  padding-left: 19px;
}
  .top input{
    width: 248px;
    height: 31px;
    border-radius: 4px;
    border:1px solid #aaaaaa ;
    color:#333333 ;
    font-size:14px ;
    line-height:14px ;
    outline: none;
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
  padding-left: 51px;
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
    padding-left: 51px;
  }
  .tai .radio1{
    margin-left: 26px;
  }
.txte{
  display: flex;
  border-bottom: 1px dashed #d4d4d4;
}
.txte p{
  padding-left:51px ;
}
.txte textarea{
  width: 498px;
  height:111px ;
  border: 1px solid #aaaaaa;
  border-radius: 4px;
  outline: none;
  margin-top: 10px;
  margin-bottom: 16px;
  color: #333333;
  font-size: 14px;
  line-height: 27px;
}
.txte span:nth-child(3){
  color: #ff0000;
  margin-top: 111px;
  margin-left: 5px;
}
.txte span:nth-child(4){
  color: #aaaaaa;
  margin-top: 110px;
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
