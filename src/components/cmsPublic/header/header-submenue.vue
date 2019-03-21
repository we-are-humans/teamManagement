<template>
    <div class="menueSub">
        <div class="subList">
            <a href="#" v-for="(val,index) in xxx"  :key="index" @click="changeDetail(val.child1)">{{val.listData}}</a>
          <router-link to="/" class="exit">退出</router-link>
        </div>
    </div>

</template>
<script>
export default {
    props:["xxx"],
    methods:{
        changeDetail(huan){
            this.$emit("changeDetail",huan);
        }
    }
}
</script>
<style scoped>
    @import "../../../assets/css/admin.css";
    .menueSub{
        background:white;
    }
    .exit{
        color:black;
    }
</style>
