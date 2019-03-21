<template>
    <div>
        <div class="edit" v-if="isshow">
          <p class="p1">支付方式：<span>{{data.methods}}</span></p>
          <div class="logos">
            <p>LOGO：</p>
            <img :src="data.logo" alt="">
            <span>如需替换，可用FTP替换logo图片</span>
          </div>
          <div class="hand">
            <p>手续费：</p>
            <input type="text" :value="data.fei">%
            <span>*</span>
            <span>输入1-100之间的数字，如1表示1%</span>
          </div>
          <div class="tai">
            <p>状态：</p>
            <input  type="radio" name="a">{{data.tais}}
            <input class="radio1" type="radio" name="a" checked>{{data.tai}}
            <span>*</span>
          </div>
          <div class="bot">
            <p>排序：</p>
            <input type="text" :value="data.orders">
            <span>*</span>
          </div>
          <div class="txte">
            <p>描述：</p>
            <textarea style="resize: none">{{data.abs}}</textarea>
          </div>
          <input type="button" @click="back" class="btn" value="确定保存">
        </div>
    </div>
</template>

<script>
    export default {
        name: "cpmPayEdit",
      props: ["data","isshow"],
      methods:{
        back(){
          this.$emit("back")
        }
      }
    }
</script>

<style scoped>
.edit{
  margin:17px  24px 0;
}
  .edit p{
    color:#333333 ;
    font-size: 14px;
    line-height:57px ;
    border-bottom: 1px dashed #d4d4d4;
  }
.edit .p1{
  padding-left: 18px;
}
.edit .p1 span{
  color:#333333 ;
  font-size: 16px;
  line-height: 16px;
  font-weight: 600;
}
.logos{
  display: flex;
  align-items: center;
  border-bottom: 1px dashed #d4d4d4;
}
  .logos img{
    width: 93px;
    height: 28px;
    margin-right:17px ;
  }
  .logos p{
    border-bottom: 0;
    padding-left: 37px;
  }
  .logos span{
    color: #aaaaaa;
    font-size: 14px;
    line-height: 14px;
  }
  .hand{
    display: flex;
    align-items: center;
    border-bottom: 1px dashed #d4d4d4;
  }
  .hand p{
    border-bottom: 0;
    padding-left: 34px;
  }
  .hand input{
    width:73px ;
    height:31px ;
    color:#333333 ;
    font-size:14px ;
    line-height: 14px;
    border-radius: 4px;
    border:1px solid #aaaaaa;
    outline: none;
  }
  .hand span:nth-child(3){
    color: #ff0000;
    margin-left: 5px;
    margin-right: 18px;
  }
.hand span:nth-child(4){
  color: #aaaaaa;
  font-size: 14px;
  line-height: 14px;
}
.bot{
  display: flex;
  border-bottom: 1px dashed #d4d4d4;
  align-items: center;
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
.bot span{
  color: #ff0000;
  margin-left: 5px;
  margin-top: 22px;
}
.tai{
  display: flex;
  align-items: center;
  color:#333333 ;
  font-size: 14px;
  border-bottom: 1px dashed #d4d4d4;
}
.tai span{
  color: #ff0000;
  margin-left:26px;
}
.tai p{
  padding-left: 51px;
  border-bottom: 0;
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
  border-bottom: 0;
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
  font-size: 16px;
  line-height: 30px;
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
.edit .btn{
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
