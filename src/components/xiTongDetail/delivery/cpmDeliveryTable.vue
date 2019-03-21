<template>
  <div>
    <div v-if="bigshow">
      <div class="name">
				<div class="namechild">
					<p>配送方式：</p>
					<input class="txt" type="text" v-model="search">
					<input class="btn btn1" type="button" value="搜索">
					<input class="btn" type="button" value="全部">
				</div>
        <input class="btn2" type="button" value="添加配送方式">
      </div>
      <div class="table">
        <table>
          <tr class="title">
            <td height="39">配送方式</td>
            <td>描述</td>
            <td>排序</td>
            <td>状态</td>
            <td>操作</td>
          </tr>
          <tr v-for="(item,ids) in searchData">
            <td v-for="col in columns">{{item[col]}}</td>
            <td class="lll">
              <a href="#" @click="changeMian(ids)">编辑</a>
              <a href="#" @click="changeRule()">配送规则</a>
              <a href="#" >删除</a>
            </td>
          </tr>
        </table>
        <div class="page">
          <p>当前第1页 共1页&nbsp;</p>
        </div>
      </div>
    </div>
    <cpm-delivery-method :data="peishu" :isshow="isshow" @backs="backs"></cpm-delivery-method>
    <cpm-delivery-rule :data="deliveries" :isshow="isshow1" @chuan="chuan(ruleShu)" @back="back"></cpm-delivery-rule>
  </div>

</template>

<script>
    import CpmDeliveryMethod from "./cpmDeliveryMethod";
    import CpmDeliveryRule from "./cpmDeliveryRule";
    export default {
        name: "cpmDeliveryTable",
      components: {CpmDeliveryRule, CpmDeliveryMethod},
      props:["data"],
      data(){
          return {
            columns: ["country", "abstract", "up", "down"],
            tables: [
              {
                country: "韵达快递",
                abstract: "全国包邮，新疆10元，西藏15元，江苏省南京市不配送（注：此条目仅为系统测试用，不代表实际情况，也非地域歧视）",
                up: "1",
                down: "启用",
                downs: "禁用"
              },
              {
                country: "顺丰快递",
                abstract: "\t全国满2000元包邮，不满则运费20元",
                up: "2",
                down: "启用",
                downs: "禁用"
              },
              {
                country: "自提",
                abstract: "仅限上海",
                up: "3",
                down: "启用",
                downs: "禁用"
              },
              {
                country: "圆通快递",
                abstract: "全国包邮",
                up: "4",
                down: "启用",
                downs: "禁用"
              }
            ],
            deliveries:[
                {
                  count: "韵达快递",
                  area: "中国->新 疆",
                  postage: "10",
                  frees: "200000",
                  isDelivery: "配送",
                  match: "1"
                },
                {
                  count:"顺丰快递",
                  area:"中国->西 藏",
                  postage:"10",
                  frees:"100000",
                  isDelivery:"配送",
                  match: "2"
                },
                {
                  count:"自提",
                  area: "中国->江苏省->南京市->全部市",
                  postage: "--",
                  frees:"--",
                  isDelivery:"不配送",
                  match:"3"
                },
                {
                  count:"圆通快递",
                  area:"中国->全部省份",
                  postage:"0",
                  frees:"0",
                  isDelivery:"配送",
                  match:"10"
                }
            ],
            search:'',
            shu:"",
            ruleShu:"",
            delShu:{},
            peishu: {},
            isshow: false,//方法
            isshow1: false,//规则
            bigshow: true,//table本页面整个

            //弹出框
            isShowConfirm: false,
            titleText: '操作提示',
            content: '您确定要删除吗',
            cancelText: '取消',
            confirmText: '确认',
            type: 'confirm',
            outerData: null
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
        changeRule(){
          this.isshow1 = true,
            this.bigshow = false
        },
        back(){
          this.isshow1=false,
            this.bigshow=true
        },
        backs(){
          this.isshow=false,
            this.bigshow=true
        },

      }
      }


</script>

<style scoped>
	
  .name{
    display: flex;
    align-items: center;
		justify-content: space-between;
    height: 46px;
    margin:0 11px;
    border-bottom: 1px dashed #e2e2e2;
  }
	.namechild{
		display: flex;
		align-items: center;
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
  .name .btn2{
    width:122px ;
    height: 32px;
    outline: none;
    background:#337ab7 ;
    border: 1px solid #2e6da4;
    color: white;
    font-size: 14px;
    line-height: 24px;
    justify-content: center;
    border-radius: 3px;
    cursor: pointer;
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
  }
  table tr:hover{
    background:#f5f9fa ;
  }
  .lll{
    display: table-cell;
  }
  .lll>*{
    float: left;
  }
  table tr td:last-child a{
    color: #198cb7;
    line-height: 14px;
    border-right: 1px solid #336cb8;
    align-items: center;
    padding: 0 5px;
  }
  table tr td:last-child a:nth-child(1){
    padding-left: 0;
  }
  table tr td:last-child a:last-child{
    padding-right: 0;
    border-right: 0;
  }
  table tr td:last-child a:hover{
    text-decoration: underline;
  }
  table tr td:nth-child(4){
    color: #4cb549;
  }
  table tr:nth-child(1) td:nth-child(4){
    color:#333333 ;
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
