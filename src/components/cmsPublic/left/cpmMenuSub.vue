<template>
  <div>
    <div id="menu-sub" v-for="item in data" @click="appear(item.ming);rename(item.child)">
      <div class="sub-item">
        <a href="#" class="sub-a">{{item.child}}</a>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "cpmMenuSub",
      props:["data"],
      data(){
        return{
          one: ""
      // :class="{sanjiao:one===item.ming}"
        }
      },
      methods: {
          appear(name){
            this.$emit("appear",name);
            this.one = name;
          },
          rename(view){
            this.$emit("rename",view);
          }
      }
    }
</script>

<style scoped>
  /*.sanjiao{*/
    /*width: ;*/
  /*}*/
  #menu-sub{
    background: #fff;
    overflow: hidden;
  }
  .sub-item{
    overflow: hidden;
    white-space: nowrap;
    background-position: -8px -50px;
    background-image: url(/static/img/frame-icons.png);
    background-repeat: no-repeat;
    height: 40px;
    width: 100%;
  }
  .sub-item:hover{
    background-position: -8px -109px;
  }
  .sub-item a{
    padding-left: 32px;
    font-size: 14px;
    line-height: 39px;
    color: #333;
  }
  .sub-item:hover .sub-a{
    color: #1963aa;
  }
</style>
