<template>
    <div class="bigBox">
        <div class="contain">
        <h1 class="title">得力文具CMS后台管理系统</h1>
        <p class="address">© deli.cn</p>
        <div class="conBox">
            <h1 class="conTitle">管理员登录：</h1>
            <div class="formBox">
                <form action="">
                    <div class="inputCon">
                        <input type="text" placeholder="用户名" errormsg="用户名格式不正确" ref="username"/>
                    </div>
                    <div class="inputCon">
                        <input type="password" placeholder="密码" errormsg="密码格式不正确" ref="userpassword"/>
                    </div>
                    <div class="inputCon">
                        <input type="text" placeholder="验证码"  v-model="aaa" @blur="checkNum"/>
                        <input type="button" id="coo" class="checkCode" v-model="bbb" @click="createCode"/>
                    </div>
                    <div class="loginBox">
                        <label class="rember">
                            <input type="checkbox"/>
                            记住密码
                        </label>
                        <input type="button" value="登录" class="loginBtn" @click="denglu()">
                    </div>
                </form>
            </div>
        </div>
    </div>
    </div>

</template>

<script>
export default {
  name:"cpmLogin",
  data(){
    return{
      cpmName:"admin",
      cpmPassword:"123abc",
      aaa:"",
      bbb:"",
      ccc:""
    }
  },
  created(){
    this.createCode();
  },
  methods: {
    createCode(){
      var code = "";
      var codeLength = 4;
      var random = new Array(0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R',
        'S','T','U','V','W','X','Y','Z');
      for(var i = 0; i < codeLength; i++) {
        var index = Math.floor(Math.random()*36);
        code += random[index];
      }
      this.bbb = code;
    },
    checkNum(){
      var num = this.aaa.toUpperCase();
      if(num == this.bbb){
        this.ccc = num;
      }else{
        alert("验证码错误！")
      }
    },
    denglu(){
      let username = this.$refs.username.value;
      let userpassword = this.$refs.userpassword.value;
      if(username == this.cpmName && userpassword == this.cpmPassword && this.ccc!="null"){
        this.$router.push("cpmSport")
      }else{
        alert("账号或密码错误！")
      }
    },
  }
}
</script>

<style scoped>
    @import "../assets/css/login.css";
.bigBox{
width:100%;
height:100%;
font-family:"微软雅黑",Arial;
font-size:12px;
background:#438eb9;
}
  #coo{
    width: 120px;
    text-align: center;
    height: 34px;
    background: #e0e0e0;
    outline: 0;
    color: black;
    font-size: 26px;
    text-indent: 10px;
  }

</style>
