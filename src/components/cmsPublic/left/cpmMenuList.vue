<template>
  <div class="menu-list">
    <cpm-menu-every :data="data" @appe="appe" @appear="appear" @rename="rename"></cpm-menu-every>
  </div>
</template>

<script>
    import CpmMenuEvery from "./cpmMenuEvery";
    export default {
        name: "cpmMenuList",
      components: {CpmMenuEvery},
      props:["data"],
      methods: {
        appear(name){
          this.$emit("appear",name)
        },
        appe(mingzi){
            this.$emit("appe",mingzi)
        },
        rename(view){
          this.$emit("rename",view)
        }
      }
    }
</script>

<style scoped>

</style>
