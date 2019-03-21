<template>
  <div class="content-top" v-if="item">
    <img :src="item.img" alt="">
    <a href="#">{{item.namee}}</a>
    <span class="iconfont icon-Group-" v-if="item.children"></span>
    <p v-if="item.children">{{isview}}</p>
  </div>
</template>

<script>
    export default {
        name: "cpmContentTop",
      props: ["item","isview"]
    }
</script>

<style scoped>
  .content-top{
    height: 40px;
    border-bottom: 1px solid #e5e5e5;
    background-color: #f5f5f5;
    padding-left: 4px;
    display: flex;
    align-items: center;
  }
  .content-top img{
    width: 20px;
    height: 20px;
    margin-right: 4px;
  }
  .content-top a,.content-top p{
    font-size: 14px;
    color: #646464;
  }
  .content-top a{
    margin-left: 8px;
  }
  .content-top .iconfont{
    margin: 4px 1px 0 4px;
    font-size: 9px;
    color: #bab9b5;
    transform: rotateZ(-90deg);
  }
</style>
