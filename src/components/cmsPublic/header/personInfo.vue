<template>
    <div class="rightCon">
            <div class="them">
                <!-- 系统首页 -->
                <!-- 这里放头部组件 -->
            </div>
            <div class="indexCon">
                <p class="userName"><span>用户名：</span>  <span>admin</span></p>
                <p class="trueName"><span>真实姓名：</span> <span>管理员</span></p>
                <p class="password"><span>密码：</span><span>******</span>[<a class="alterPass" @click.stop="changeView2"  >修改密码</a>]</p>
                <p class="status"><span>状态：</span><span>正常</span></p>
                <p class="role"><span>角色：</span><span>超级管理员</span></p>
                <p class="phon"><span>手机/电话：</span><span></span></p>
                <p class="email"><span>Email：</span><span></span></p>
            </div>
        </div>
</template>
<script>
export default {
    data(){
        return{           
              child1: "password",
              listData: "修改密码"           
        }
    },
    methods:{
        changeView2(){          
            this.$emit("changeView2",this.child1);
            // console.log(this.child1)
        }
        
    }
}
</script>
<style scoped>
    @import "../../../assets/css/systemIndex.css";
</style>
