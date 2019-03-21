<template>
  <div class="menu-miss">
    <a href="#" @click="change(ids);appe(data.ming,ids)">
      <div class="menu-left">
        <img :src="data.img" class="menu-icon" alt="">
        <span class="menu-text">{{data.namee}}</span>
      </div>
      <span class="iconfont icon-Group-" v-if="data.children"></span>
    </a>
  </div>
</template>

<script>
    export default {
        name: "cpmMenuMiss",
      props: ["data","ids"],
      methods:{
        change(ids){
          this.$emit("change",ids)
        },
        appe(mingzi,ids){
          if(ids===0){
            this.$emit("appe",mingzi);
          }
        },
      }
    }
</script>

<style scoped>
  .menu-miss{
    background: #f9f9f9;
    overflow: hidden;
    white-space: nowrap;
    border-top: 1px solid #fcfcfc;
    border-left: 2px solid #f9f9f9;
    border-bottom: 1px solid #e5e5e5;
  }
  .menu-miss a{
    height: 39px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .menu-miss:hover{
    background-color: #ffffff;
  }
  .menu-miss:hover{
    border-left: 2px solid #438EB9;
  }
  .menu-miss:hover .menu-text{
    color: #1963aa;
  }
  .menu-left{
    display: flex;
    align-items: center;
  }
  .menu-icon{
    width: 20px;
    height: 18px;
    margin-left: 8px;
  }
  .menu-text{
    color: #585858;
    margin-left: 8px;
    font-size: 14px;
    line-height: 39px;
  }
  .menu-miss .iconfont{
    font-size: 16px;
    color: #000;
    margin-right: 5px;
  }
</style>
