<template>
  <div>
    <div class="modify" v-if="isshow">
      <p class="p1">配置项：<span>{{data.pro}}</span></p>
      <p class="p2">别名：<span>{{data.roleName}}</span></p>
      <p class="p3">描述：<span>{{data.abs}}</span></p>
      <div class="txte">
        <p>配置内容：</p>
        <textarea style="resize: none">{{data.content}}</textarea>
        <span>*</span>
        <span>输入1-1024个字符</span>
      </div>
      <div class="bot">
        <p>排序：</p>
        <input type="text" :value="data.order">
        <span>*</span>
        <span>列表中显示的排序</span>
      </div>
      <input type="button" @click="back" class="btn" value="确定保存">
    </div>
  </div>
</template>

<script>
    export default {
        name: "cpmSystemModify",
      props: ["data","isshow"],
      methods:{
          back(){
            this.$emit("back")
          }
      }
    }
</script>

<style scoped>
.modify{
  margin:17px  24px 0;
}
  .modify p{
    color:#333333 ;
    font-size: 14px;
    line-height:57px ;
    border-bottom: 1px dashed #d4d4d4;
  }
.modify .p1{
  padding-left: 35px;
}
.modify .p2{
  padding-left: 51px;
}
.modify .p3{
  padding-left: 51px;
}
.modify .btn{
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
  .txte{
    display: flex;
    border-bottom: 1px dashed #d4d4d4;
  }
  .txte p{
    padding-left:19px ;
  }
  .txte textarea{
    width: 373px;
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
</style>
