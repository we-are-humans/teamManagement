<template>
  <div>
    <div class="menu-every" v-for="(item,ids) in data">
      <cpm-menu-miss :data="item" :ids="ids" @change="change" @appe="appe"></cpm-menu-miss>
      <cpm-menu-sub @appear="appear" @rename="rename" :data="item.children" :index="index"
                    :ids="ids" v-if="ids===index && flag==true"></cpm-menu-sub>
    </div>
  </div>
</template>

<script>
    import CpmMenuMiss from "./cpmMenuMiss";
    import CpmMenuSub from "./cpmMenuSub";
    export default {
        name: "cpmMenuEvery",
      components: {CpmMenuSub, CpmMenuMiss},
      props: ['data'],
      data(){
          return{
            index: "",
            flag: "false"
          }
      },
      methods: {
        change(ids){
          this.index = ids;
          this.flag=!this.flag;
        },
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
