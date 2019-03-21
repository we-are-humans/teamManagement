<template>
  <div class="content">
    <cpm-content-top :item="data[9]" :isview="isview"></cpm-content-top>
    <cpm-navigation-name></cpm-navigation-name>
    <cpm-navigation-table :data="tables"></cpm-navigation-table>
  </div>
</template>

<script>
  import CpmContentTop from "../../components/cmsPublic/cpmContentTop";
  import CpmNavigationTable from "../../components/xiTongDetail/navigation/cpmNavigationTable";
  import CpmNavigationName from "../../components/xiTongDetail/navigation/cpmNavigationName";
  export default {
    name: "cpmRight93",
    components: {CpmNavigationName, CpmNavigationTable, CpmContentTop},
    props: ["data","isview"],
    data(){
      return{
        tables:[
          {
            ming:"品牌专区",
            hrefs:"./index.php?_=brand/main...",
            tai:"显示",
            windows:"当前窗口",
            order:"1",
            site:"顶部",
            opera:{
              edit:"编辑",
              del:"删除"
            }
          },
          {
            ming:"专题活动",
            hrefs:"./index.php?_=/topic/main...",
            tai:"显示",
            windows:"当前窗口",
            order:"2",
            site:"顶部",
            opera:{
              edit:"编辑",
              del:"删除"
            }
          },
          {
            ming:"自提点查询",
            hrefs:"./index.php?_=/help/detail&id=36...",
            tai:"显示",
            windows:"当前窗口",
            order:"3",
            site:"顶部",
            opera:{
              edit:"编辑",
              del:"删除"
            }
          },
          {
            ming:"办公用品",
            hrefs:"/index.php?_=/product/main&cat_id=16...",
            tai:"显示",
            windows:"当前窗口",
            order:"100",
            site:"顶部",
            opera:{
              edit:"编辑",
              del:"删除"
            }
          },
          {
            ming:"办公设备",
            hrefs:"/index.php?_=/product/main&cat_id=17...",
            tai:"显示",
            windows:"当前窗口",
            order:"100",
            site:"顶部",
            opera:{
              edit:"编辑",
              del:"删除"
            }
          },
          {
            ming:"办公耗材",
            hrefs:"/index.php?_=/product/main&cat_id=18...",
            tai:"显示",
            windows:"当前窗口",
            order:"100",
            site:"顶部",
            opera:{
              edit:"编辑",
              del:"删除"
            }
          },
          {
            ming:"办公生活",
            hrefs:"/index.php?_=/product/main&cat_id=33...",
            tai:"显示",
            windows:"当前窗口",
            order:"100",
            site:"顶部",
            opera:{
              edit:"编辑",
              del:"删除"
            }
          },
          {
            ming:"办公家具",
            hrefs:"/index.php?_=/product/main&cat_id=34...",
            tai:"显示",
            windows:"当前窗口",
            order:"100",
            site:"顶部",
            opera:{
              edit:"编辑",
              del:"删除"
            }
          },
          {
            ming:"学生用品",
            hrefs:"/index.php?_=/product/main&cat_id=41...",
            tai:"显示",
            windows:"当前窗口",
            order:"100",
            site:"顶部",
            opera:{
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

