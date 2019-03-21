<template>
    <div class="content">
      <cpm-content-top :item="data[9]" :isview="isview"></cpm-content-top>
      <cpm-role-name :dataa="names"></cpm-role-name>
      <cpm-role-table :dataa="tables"></cpm-role-table>
    </div>
</template>

<script>
    import CpmContentTop from "../../components/cmsPublic/cpmContentTop";
    import CpmRoleName from "../../components/xiTongDetail/role/cpmRoleName";
    import CpmRoleTable from "../../components/xiTongDetail/role/cpmRoleTable";
    export default {
      name: "cpmRight95",
      components: {CpmRoleTable, CpmRoleName, CpmContentTop},
      props: ["data","isview"],
      data(){
        return{
          names:{
            user:"用户名",
            ords:"排序" ,
            val1:"默认",
            val2:"创建时间",
          },
          tables:[
            {
              ids:"11",
              roleName:"角色测试",
              tai:"启用",
              orders:"1",
              owner:"admin_test",
              manner:"活动列表,广告位管理,链接列表,商品列表,商品管理,文章列表,订单统计,会员信息管理,会员等级管理,广告内容管理,添加商品,添加文章,文章管理,用户统计,商品回收站,文章回收站,\n" +
                "          订单管理,留言管理,商品分类,文章分类,会员管理,广告管理,系统配置,商品评论管理,文章评论,配送方式,专题活动,品牌管理,积分商品,统计报表,链接管理,系统管理,地区管理,新建活动,添加链接,导航管理,操作员管理,角色管理,菜单管理,订单信息,配货管理,发货管理,售后管理,支付方式",
              opera:{
                edit:"编辑",
                del:"删除"
              }
            },
            {
              ids:"8",
              roleName:"系统管理员",
              tai:"启用",
              orders:"100",
              owner:"admin2,admin1,admin",
              manner:"文章列表,会员信息管理,添加文章,文章管理,文章回收站,订单管理,留言管理,文章分类,会员管理,\n" +
                "          系统管理,操作员管理,角色管理,菜单管理,订单信息,配货管理,发货管理,售后管理",
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
