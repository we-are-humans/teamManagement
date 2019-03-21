<template>
  <ul class="contless">
    <li @click="chan(child1)" :class="{actives:child1===faceValue}"> <a href="javascript:;" >基本信息</a></li>
    <li @click="chan(child2)" :class="{actives:child2===faceValue}"> <a href="javascript:;" >扩展信息</a></li>
  </ul>
</template>

<script>
    export default {
        name: "cpm-shop-add-heaad",
      data(){
        return{
          child1:"CpmShopAddLeft",
          child2:"CpmShopAddRight",
          faceValue: "CpmShopAddLeft"
        }
      },
      props:["name"],
      methods:{
          chan(dat){
            this.faceValue = dat
            console.log(dat)
          }
      }
    }
</script>

<style scoped>
  .actives{
    color: #ccc;
    background-color: #fff;
    border: 1px solid #ddd;
    border-bottom-color: transparent;
  }
  .contless {
    width: 1149px;
    float: left;
    border-bottom: 1px solid #ddd;
    display: inline-block;
    padding: 15px 0 0 0;
  }
  .contless  li{
    float: left;
    margin-bottom: -1px;
    text-decoration: none;
    font-size: 16px;
    margin-right: 2px;
    border-radius: 4px 4px 0 0;
    cursor: default;
    display: block;
    padding: 10px 15px;
  }
.contless  li a{

  color: #555;

}
</style>
