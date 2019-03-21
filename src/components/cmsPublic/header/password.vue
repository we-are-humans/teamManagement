<template>
    <div class="rightCon">
            <div class="them">
                <!-- 系统首页 -->


            </div>
            <div class="indexCon">
               <form action="">
                   <div class="prePass">
                       <span>原密码：</span>
                       <input type="text"  ><span>输入原密码</span>
                   </div>
                   <div class="newPass">
                        <span>新密码：</span>
                        <input type="text"><span>输入新密码：6-32位任意字符</span>
                    </div>
                    <div class="rePass">
                        <span>密码重输：</span>
                        <input type="text">
                    </div>
                    <input type="button" value="确定保存" class="sureBtn">
               </form>
            </div>
        </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
    @import "../../../assets/css/password.css";
</style>
