<template>
    <header>
        <div class="title">得力文具CMS后台管理系统</div>
        <div class="menue">
            <a href="" class="frash">刷新</a>
            欢迎您：
            <span class="user" @click.stop="flag=!flag">admin</span>
            <span class="mark" @click.stop="flag=!flag"></span>            
        </div>
        <header-submenue :xxx="headData" @changeDetail="changeDetail" v-if="flag"></header-submenue>
    </header>
</template>
<script>
import headerSubmenue from"./header-submenue";
export default {
    props:["headData"],
    data(){
        return{
            flag:false,
        }
    },
    components:{
        "header-submenue":headerSubmenue
    },
    
    methods:{
        handleOtherClick(){
            if(this.flag){
                this.flag= false;
            }
        },
        changeDetail(huan){
            this.$emit("changeDetail",huan)
        }
    },
    mounted(){
        document.addEventListener("click",this.handleOtherClick)
    },
    destroyed(){
        document.removeEventListener("click",this.handleOtherClick)
    },

}
</script>
<style scoped>
    @import "../../../assets/css/admin.css";
</style>
