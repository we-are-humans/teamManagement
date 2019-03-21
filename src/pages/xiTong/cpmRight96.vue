<template>
  <div class="content">
    <cpm-content-top :item="data[9]" :isview="isview"></cpm-content-top>
    <cpm-menu-new></cpm-menu-new>
    <cpm-menu-table :data="tables"></cpm-menu-table>
  </div>
</template>

<script>
  import CpmContentTop from "../../components/cmsPublic/cpmContentTop";
  import CpmMenuNew from "../../components/xiTongDetail/menu/cpmMenuNew";
  import CpmMenuTable from "../../components/xiTongDetail/menu/cpmMenuTable";
  export default {
    name: "cpmRight96",
    components: {CpmMenuTable, CpmMenuNew, CpmContentTop},
    props: ["data","isview"],
    data(){
      return{
        heads:{
          img1:"/static/img/icon-global.gif",
          tit1:"系统管理",
          img2:"/static/img/icon-right.jpg",
          tit2:"菜单管理"
        },
        tables:[
          {
            id:"01",
            title1:"商品管理",
            tai:"启用",
            num1:"1",
            abs:"商品管理一级菜单",
            opera:{
              edit:"编辑",
              del:"删除"
            },
            list1:[
              {
                id:"01",
                title2: "商品列表",
                tai: "启用",
                num1: "1",
                abs: "商品列表",
                opera: {
                  edit: "编辑",
                  del: "删除"
                }
              },
              {
                id:"01",
                title2: "添加商品",
                tai: "启用",
                num1: "2",
                abs: "添加新商品",
                opera: {
                  edit: "编辑",
                  del: "删除"
                }
              },
              {
                id:"01",
                title2: "商品回收站",
                tai: "启用",
                num1: "3",
                abs: "商品回收站",
                opera: {
                  edit: "编辑",
                  del: "删除"
                }
              },
              {
                id:"01",
                title2: "商品分类",
                tai: "启用",
                num1: "4",
                abs: "商品分类增删改查",
                opera: {
                  edit: "编辑",
                  del: "删除"
                }
              },
              {
                id:"01",
                title2: "商品评论管理",
                tai: "启用",
                num1: "5",
                abs: "商品评论查看、审核",
                opera: {
                  edit: "编辑",
                  del: "删除"
                }
              },
              {
                id:"01",
                title2: "品牌管理",
                tai: "启用",
                num1: "6",
                abs: "品牌增删改查",
                opera: {
                  edit: "编辑",
                  del: "删除"
                }
              },
              {
                id:"01",
                title2: "积分商品",
                tai: "启用",
                num1: "7",
                abs: "",
                opera: {
                  edit: "编辑",
                  del: "删除"
                }
              },
            ]
          },
          {
            id:"02",
            title1:"文章管理",
            tai:"启用",
            num1:"2",
            abs:"文章管理一级菜单",
            opera:{
              edit:"编辑",
              del:"删除"
            },
            list1:[
              {
                id:"02",
                title2: "文章列表",
                tai: "启用",
                num1: "1",
                abs: "查看文章列表",
                opera: {
                  edit: "编辑",
                  del: "删除"
                }
              },
              {
                id:"02",
                title2: "添加文章",
                tai: "启用",
                num1: "2",
                abs: "添加新文章",
                opera: {
                  edit: "编辑",
                  del: "删除"
                }
              },
              {
                id:"02",
                title2: "文章回收站",
                tai: "启用",
                num1: "3",
                abs: "文章回收站",
                opera: {
                  edit: "编辑",
                  del: "删除"
                }
              },
              {
                id:"02",
                title2: "文章分类",
                tai: "启用",
                num1: "4",
                abs: "文章分类增删改查",
                opera: {
                  edit: "编辑",
                  del: "删除"
                }
              },
              {
                id:"02",
                title2: "文章评论",
                tai: "启用",
                num1: "5",
                abs: "文章评论查看和审核",
                opera: {
                  edit: "编辑",
                  del: "删除"
                }
              },
            ]
          },
          {
            id:"03",
            title1:"订单管理",
            tai:"启用",
            num1:"3",
            abs:"",
            opera:{
              edit:"编辑",
              del:"删除"
            },
            list1:[
              {
                id:"03",
                title2: "订单信息",
                tai: "启用",
                num1: "301",
                abs: "查看订列表、订单详情",
                opera: {
                  edit: "编辑",
                  del: "删除"
                }
              },
              {
                id:"03",
                title2: "配货管理",
                tai: "启用",
                num1: "302",
                abs: "配货管理，配货中或者配货完成的订单，订单不能编辑",
                opera: {
                  edit: "编辑",
                  del: "删除"
                }
              },
              {
                id:"03",
                title2: "发货管理",
                tai: "启用",
                num1: "303",
                abs: "发货列表、发货操作",
                opera: {
                  edit: "编辑",
                  del: "删除"
                }
              },
              {
                id:"03",
                title2: "售后管理",
                tai: "启用",
                num1: "304",
                abs: "售后服务管理",
                opera: {
                  edit: "编辑",
                  del: "删除"
                }
              },

            ]
          },
          {
            id:"04",
            title1:"会员管理",
            tai:"启用",
            num1:"4",
            abs:"",
            opera:{
              edit:"编辑",
              del:"删除"
            },
            list1:[
              {
                id:"04",
                title2: "会员信息管理",
                tai: "启用",
                num1: "1",
                abs: "用户增删改查、余额管理、收货地址管理",
                opera: {
                  edit: "编辑",
                  del: "删除"
                }
              },
              {
                id:"04",
                title2: "会员等级管理",
                tai: "启用",
                num1: "2",
                abs: "会员等级管理",
                opera: {
                  edit: "编辑",
                  del: "删除"
                }
              },
              {
                id:"04",
                title2: "留言管理",
                tai: "启用",
                num1: "3",
                abs: "留言列表、阅读、回复",
                opera: {
                  edit: "编辑",
                  del: "删除"
                }
              },
            ]
          },
          {
            id:"05",
            title1:"广告管理",
            tai:"启用",
            num1:"5",
            abs:"管理广告、广告位",
            opera:{
              edit:"编辑",
              del:"删除"
            },
            list1:[
              {
                id:"05",
                title2: "广告位管理",
                tai: "启用",
                num1: "1",
                abs: "添加/编辑/删除广告位",
                opera: {
                  edit: "编辑",
                  del: "删除"
                }
              },
              {
                id:"05",
                title2: "广告内容管理",
                tai: "启用",
                num1: "2",
                abs: "广告位列表/广告列表/添加广告/编辑广告/删除广告",
                opera: {
                  edit: "编辑",
                  del: "删除"
                }
              },
            ]
          },
          {
            id:"06",
            title1:"专题活动",
            tai:"启用",
            num1:"6",
            abs:"优惠或者专题活动",
            opera:{
              edit:"编辑",
              del:"删除"
            },
            list1:[
              {
                id:"06",
                title2: "活动列表",
                tai: "启用",
                num1: "1",
                abs: "",
                opera: {
                  edit: "编辑",
                  del: "删除"
                }
              },
              {
                id:"06",
                title2: "新建活动",
                tai: "启用",
                num1: "100",
                abs: "",
                opera: {
                  edit: "编辑",
                  del: "删除"
                }
              },
            ]
          },
          {

            id:"07",
            title1:"统计报表",
            tai:"启用",
            num1:"7",
            abs:"",
            opera:{
              edit:"编辑",
              del:"删除"
            },
            list1:[
              {
                id:"07",
                title2: "订单统计",
                tai: "启用",
                num1: "1",
                abs: "",
                opera: {
                  edit: "编辑",
                  del: "删除"
                }
              },
              {
                id:"07",
                title2: "用户统计",
                tai: "启用",
                num1: "2",
                abs: "",
                opera: {
                  edit: "编辑",
                  del: "删除"
                }
              },
            ]
          },
          {
            id:"08",
            title1:"链接管理",
            tai:"启用",
            num1:"8",
            abs:"管理友情链接，图片链接，文字链接",
            opera:{
              edit:"编辑",
              del:"删除"
            },
            list1:[
              {
                id:"08",
                title2: "链接列表",
                tai: "启用",
                num1: "1",
                abs: "管理友情链接-图片链接-文字链接",
                opera: {
                  edit: "编辑",
                  del: "删除"
                }
              },
              {
                id:"08",
                title2: "添加链接",
                tai: "启用",
                num1: "100",
                abs: "添加友情链接",
                opera: {
                  edit: "编辑",
                  del: "删除"
                }
              },
            ]
          },
          {
            id:"09",
            title1:"系统管理",
            tai:"启用",
            num1:"9",
            abs:"管理用户、用户的角色、角色、角色的菜单、菜单",
            opera:{
              edit:"编辑",
              del:"删除"
            },
            list1:[
              {
                id:"09",
                title2: "系统配置",
                tai: "启用",
                num1: "5",
                abs: "查看、修改系统配置",
                opera: {
                  edit: "编辑",
                  del: "删除"
                }
              },
              {
                id:"09",
                title2: "配送方式",
                tai: "启用",
                num1: "6",
                abs: "管理配送方式，可自定义配送规则，如：设置可送达区域和不可送达区域，设置不同区域的配送价格。",
                opera: {
                  edit: "编辑",
                  del: "删除"
                }
              },
              {
                id:"09",
                title2: "地区管理",
                tai: "启用",
                num1: "100",
                abs: "",
                opera: {
                  edit: "编辑",
                  del: "删除"
                }
              },
              {
                id:"09",
                title2: "导航管理",
                tai: "启用",
                num1: "101",
                abs: "管理网站前端的导航链接",
                opera: {
                  edit: "编辑",
                  del: "删除"
                }
              },
              {
                id:"09",
                title2: "操作员管理",
                tai: "启用",
                num1: "201",
                abs: "增删改查、冻结、用户",
                opera: {
                  edit: "编辑",
                  del: "删除"
                }
              },
              {
                id:"09",
                title2: "角色管理",
                tai: "启用",
                num1: "202",
                abs: "",
                opera: {
                  edit: "编辑",
                  del: "删除"
                }
              },
              {
                id:"09",
                title2: "菜单管理",
                tai: "启用",
                num1: "203",
                abs: "设置菜单的管理地址和完成菜单功能所需要的路由授权",
                opera: {
                  edit: "编辑",
                  del: "删除"
                }
              },
              {
                id:"09",
                title2: "支付方式",
                tai: "启用",
                num1: "500",
                abs: "配置支付方式",
                opera: {
                  edit: "编辑",
                  del: "删除"
                }
              }
            ]
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
