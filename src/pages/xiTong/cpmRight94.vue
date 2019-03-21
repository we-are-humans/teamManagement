<template>
  <div class="content">
    <cpm-content-top :item="data[9]" :isview="isview"></cpm-content-top>
    <cpm-operator-name :data="names"></cpm-operator-name>
    <cpm-operator-table :data="tables"></cpm-operator-table>
  </div>
</template>

<script>
  import CpmContentTop from "../../components/cmsPublic/cpmContentTop";
  import CpmOperatorName from "../../components/xiTongDetail/operator/cpmOperatorName";
  import CpmOperatorTable from "../../components/xiTongDetail/operator/cpmOperatorTable";
  export default {
    name: "cpmRight94",
    components: {CpmOperatorTable, CpmOperatorName, CpmContentTop},
    props: ["data","isview"],
    data(){
      return{
        names:{
          user:"用户名",
          name:"姓名",
          tai:"状态",
          option1:"全部",
          option2:"冻结",
          option3:"正常",
          ords:"排序" ,
          val1:"默认",
          val2:"登陆次数",
          val3:"最后登录时间",
          val4:"创建时间",
        },
        tables:[
          {
            ids:"26",
            userName:"admin_set",
            names:"功能测试",
            tai:"正常",
            role:"角色测试",
            counts:"1",
            last:"2018-11-27 14:42:18",
            creats:"2018-11-27 14:40:54",
            opera:{
              edit:"编辑",
              del:"删除"
            }
          },
          {
            ids:"19",
            userName:"admin",
            names:"管理员",
            tai:"正常",
            role1:"超级管理员,",
            role:"系统管理员",
            counts:"1008",
            last:"2019-03-13 09:20:12",
            creats:"2016-03-05 10:46:55",
            opera:""
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
