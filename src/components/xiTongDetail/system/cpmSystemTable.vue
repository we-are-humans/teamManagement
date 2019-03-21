<template>
  <div class="bpp">
    <div v-if="bigshow">
      <div class="name">
        <p>配置名：</p>
        <input class="txt" type="text" v-model="search">
        <input class="btn btn1" type="button" value="搜索">
        <input class="btn" type="button" value="全部">
      </div>
      <div class="table">
      <table>
        <tr class="title">
          <td height="39">配置项</td>
          <td>别名</td>
          <td>内容</td>
          <td>描述</td>
          <td>排序</td>
          <td>操作</td>
        </tr>
        <tr v-for="(i,ids) in searchData">
          <td v-for="col in columns">{{i[col]}}</td>
          <td>
            <a href="javascript:;" @click="changeMian(ids)">编辑</a>
          </td>
        </tr>
      </table>
      <div class="page">
        <p>当前第1页 共1页 &nbsp;</p>
      </div>
    </div>
    </div>
    <cpm-system-modify :data="peishu" :isshow="isshow" @back="back"></cpm-system-modify>
  </div>
</template>

<script>
  // import '/assets/html.css'
    import CpmSystemModify from "./cpmSystemModify";
  export default {
        name: "cpmSystemTable",
    components: {CpmSystemModify},
    props:["data"],
    data(){
        return{
          columns:["pro","roleName","content","abs","order"],
          tables:[
            {
              pro:"热门搜索",
              roleName:"hot_keyword",
              content:"打印机,复印机,打印纸,文件袋,订书机",
              abs:"热门搜索",
              order:"2"
            },
            {
              pro:"商品库存警告",
              roleName:"product_warn",
              content:"10",
              abs:"设置库存警告数",
              order:"3"
            },
            {
              pro:"文章默认状态",
              roleName:"article_status",
              content:"启用",
              abs:"0表示未审核，1表示已审核",
              order:"4"
            },
            {
              pro:"商品积分",
              roleName:"product_point",
              content:"1",
              abs:"默认的商品积分比率，购买商品时可获得的积分=当前值*商品价格",
              order:"5"
            },
            {
              pro:"商品市场价",
              roleName:"product_price_market",
              content:"1.3",
              abs:"默认商品市场价=当前值*商品价格",
              order:"6"
            },
            {
              pro:"商品的原价",
              roleName:"product_price_old",
              content:"1.2",
              abs:"默认商品原价=当前值*商品价格",
              order:"7"
            },
            {
              pro:"ICP备案号",
              roleName:"icp_no",
              content:"沪ICP备000338823",
              abs:"如：沪ICP备0000338823",
              order:"8"
            },
            {
              pro:"商品默认评价状态",
              roleName:"product_review_status",
              content:"1",
              abs:"\t设置商品评论的默认审核状态。\n" +
                "可选值为：1、2、3；其中：0=未审核；1=审核通过；2=审核未通过",
              order:"9"
            },
            {
              pro:"商品多次评价",
              roleName:"product_review_multi",
              content:"1",
              abs:"设置是否允许对商品多次评价。0=不允许；1=允许",
              order:"10"
            },
            {
              pro:"文章默认评论状态",
              roleName:"article_review_status",
              content:"1",
              abs:"设置文章评论的默认审核状态。可选值为：0、1、2、3；其中：0=未审核；1=审核通过；2=审核未通过",
              order:"11"
            },
            {
              pro:"是否允许未登录用户发布评论",
              roleName:"article_review_guest",
              content:"1",
              abs:"可选值为：0=不允许；1=允许；",
              order:"12"
            }

          ],
          search:"",
          shu:"",
          peishu: {},
          isshow: false,
          bigshow: true
        }
    },
    computed:{
          searchData:function(){
            var search=this.search;
            if(search){
              return this.tables.filter(function(product){
                return Object.keys(product).some(function(key){
                  return String(product[key]).toLowerCase().indexOf(search) > -1
                })
              })
            }
            return this.tables
          }
        },
    methods: {
      changeMian(num){
          this.shu = num;
          this.peishu = this.tables[this.shu];
          this.isshow = true,
          this.bigshow = false
        },
      back(){
        this.isshow=false,
        this.bigshow=true
      }
    }
  }
</script>

<style scoped>
  .name{
    display: flex;
    align-items: center;
    height: 46px;
    margin:0 11px;
    border-bottom: 1px dashed #e2e2e2;
  }
  .name p{
    color: #333333;
    font-size:14px ;
    line-height: 14px;
  }
  .name input{
    outline: none;
  }
  .name .txt{
    width:118px ;
    height:24px ;
    border:1px solid #aaaaaa;
    border-radius: 3px;
  }
  .name .btn{
    width: 44px;
    height: 24px;
    background:#337ab7 ;
    border: 1px solid #2e6da4;
    color: white;
    font-size: 14px;
    line-height: 24px;
    justify-content: center;
    border-radius: 3px;
    cursor: pointer;
  }
  .name .btn1{
    margin: 0 7px;
  }
  .table {
    margin-left: 11px;
    margin-right: 11px;
    margin-top: 8px;
  }
  .table table{
    width: 100%;
    border-collapse: collapse;
  }
  table tr td{
    color:#333333 ;
    font-size: 13px;
    border: 1px solid #dddddd;
    height: 39px;
    padding-left: 5px;
    padding-right: 5px;
    min-width: 30px;
    max-width: 452px;
  }
  table tr:hover{
    background:#f5f9fa ;
  }
  table tr td:last-child a{
    color: #198cb7;
  }
  table tr td:last-child a:hover{
    text-decoration: underline;
  }
  .table table .title{
    color: #707070;
    background: #f3f3f3;
    font-weight: 700;
  }
  .page p{
    color:#333333 ;
    font-size: 13px;
    line-height:39px ;
    border: 1px solid #dddddd;
    border-top: 0;
    background: #eff3f8;
    text-align: right;
  }

</style>
