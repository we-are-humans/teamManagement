<template>
  <div class="navigate">
    <div class="title">管理菜单</div>
    <cpm-menu-list :data="data" @appe="appe" @appear="appear" @rename="rename" ></cpm-menu-list>
    <div class="menu-last">
      <div class="menu-bottom">
        <div class="arrow"></div>
      </div>
    </div>
  </div>
</template>

<script>
    import CpmMenuList from "./cpmMenuList";
    export default {
      name: "cpmLeft",
      components: {CpmMenuList},
      props: ["data"],
      methods: {
        appear(name){
          this.$emit("appear",name)
        },
        appe(mingzi){
          this.$emit("appe",mingzi);
        },
        rename(view){
          this.$emit("rename",view)
        }
      }
    }
</script>

<style scoped>
  .navigate{
    min-width: 190px;
    border-right: 1px solid #cccccc;
    background: #f2f2f2;
    line-height: 39px;
    overflow: auto;
    padding-bottom: 10px;
  }
  .title{
    background: #62a8d1;
    border-bottom: 1px solid #ddd;
    text-align: center;
    color: #ffffff;
    font-size: 14px;
  }
  .menu-last{
    height: 40px;
    border-bottom: 1px solid #ccc;
  }
  .menu-bottom{
    height: 100%;
    width: 90%;
    margin: auto;
    background-image: url(/static/img/frame-icons.png);
    background-position: 0 -970px;
    background-repeat: no-repeat;
  }
  .arrow{
    height: 100%;
    width: 24px;
    margin: auto;
    background-image: url(/static/img/frame-icons.png);
    background-position: 0 -890px;
    background-repeat: no-repeat;
  }
</style>
