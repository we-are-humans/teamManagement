<template>
  <div class="content">
    <cpm-content-top :item="data[9]" :isview="isview"></cpm-content-top>
    <cpm-area-name :data="tables"></cpm-area-name>
    <cpm-area-table :data="tables"></cpm-area-table>
  </div>
</template>

<script>
  import CpmContentTop from "../../components/cmsPublic/cpmContentTop";
  import CpmAreaTable from "../../components/xiTongDetail/area/cpmAreaTable";
  import CpmAreaName from "../../components/xiTongDetail/area/cpmAreaName";
  export default {
    name: "cpmRight92",
    components: {CpmAreaName, CpmAreaTable, CpmContentTop},
    props: ["data","isview"],
    data(){
      return{
        tables:[
          {
            country:"中国",
            abstract:"1",
            up:"1",
            down:"有",
            opera:{
              look1:"查看下级",
              add:"添加下级",
              edit:"编辑",
              del:"删除"
            }
          },
          {
            country:"国外",
            abstract:"2",
            up:"1",
            down:"有",
            opera:{
              look1:"查看下级",
              add:"添加下级",
              edit:"编辑",
              del:"删除"
            }
          }
        ]
      }
    }
  }
</script>

<style scoped>
  .content{
    flex: 1;
  }
</style>
