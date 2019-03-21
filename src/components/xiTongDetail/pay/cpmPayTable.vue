<template>
  <div>
    <div class="table" v-if="bigshow">
      <table>
        <tr class="title">
          <td>PAY ID</td>
          <td>支付方式</td>
          <td>LOGO</td>
          <td>手续费</td>
          <td>状态</td>
          <td>排序</td>
          <td>描述</td>
          <td>操作</td>
        </tr>
        <tr v-for="(item,ids) in tables">
          <td>{{item.payId}}</td>
          <td>{{item.methods}}</td>
          <td>
            <img class="img1" :src="item.logo" alt="">
          </td>
          <td>{{item.fei}}</td>
          <td class="tds">{{item.tai}}</td>
          <td>{{item.orders}}</td>
          <td>{{item.abs}}</td>
          <td class="lll">
            <a href="javascript:;" @click="changeMian(ids)">{{item.set}}</a>
          </td>
        </tr>
      </table>
    </div>
    <cpm-pay-edit :data="peishu" :isshow="isshow" @back="back"></cpm-pay-edit>
  </div>

</template>

<script>
    import CpmPayEdit from "./cpmPayEdit";
    export default {
        name: "cpmPayTable",
      components: {CpmPayEdit},
      props:["data"],
      data(){

          return{
            tables:[
              {
                payId:"1",
                methods:"支付宝",
                logo:"/static/img/icon1.jpg",
                fei:"0",
                tai:"启用",
                tais:"禁用",
                orders:"1",
                abs:"支付宝支付，实时到账，免手续费",
                set:"配置"
              },
              {
                payId:"2",
                methods:"微信",
                logo:"/static/img/icon2.jpg",
                fei:"0",
                tai:"启用",
                tais:"禁用",
                orders:"2",
                abs:"微信支付，实时到账，免手续费",
                set:"配置"
              },
              {
                payId:"3",
                methods:"中国银联",
                logo:"/static/img/icon3.jpg",
                fei:"0",
                tai:"启用",
                tais:"禁用",
                orders:"3",
                abs:"中国银联支付，有银行卡即可支付，实时到账，免手续费",
                set:"配置"
              },
              {
                payId:"4",
                methods:"银行转账",
                logo:"",
                fei:"0",
                tai:"启用",
                tais:"禁用",
                orders:"4",
                abs:"支持网银、银行柜台或者ATM机转账，非实时到账，需用户主动联系客服核实，1%手续费",
                set:"配置"
              },
              {
                payId:"5",
                methods:"余额支付",
                logo:"",
                fei:"0",
                tai:"禁用",
                tais:"启用",
                orders:"5",
                abs:"使用本站的预存款支付，方便快捷，免手续费",
                set:"配置"
              }
            ],
            shu:"",
            peishu: {},
            isshow: false,
            bigshow: true
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
  .table {
    margin-left: 11px;
    margin-right: 11px;
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
  /*table tr td .spans{*/
    /*color: #ff1f1f;*/
  /*}*/
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
  table tr .tds{
    color: #4cb549;
  }
  table tr:last-child td:nth-child(5){
    color: #ff1f1f;
  }
  .table table .title{
    color: #707070;
    background: #f3f3f3;
    font-weight: 700;
  }
  .table table tr td .img1{
    width: 93px;
    height: 28px;
  }
  .table table tr td .img2{
    width: 112px;
    height: 28px;
  }
  .table table tr td .img3{
    width: 140px;
    height: 28px;
  }
</style>
