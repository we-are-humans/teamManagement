<template>
  <div class="table">
    <table>
      <tr class="title">
        <td height="39">活动名称</td>
        <td>优惠方式</td>
        <td>优惠内容</td>
        <td>商品范围</td>
        <td>最低消费</td>
        <td>优惠封顶</td>
        <td>开始时间</td>
        <td>结束时间</td>
        <td>状态</td>
        <td>排序</td>
        <td>操作</td>
      </tr>
      <tr v-for="item in tables">
        <td>
          <a href="javascript:;">{{item.active}}</a>
        </td>
        <td>{{item.methods}}</td>
        <td >{{item.contents}}</td>
        <td>{{item.limits}}</td>
        <td>{{item.lowers}}</td>
        <td>{{item.upper}}</td>
        <td>{{item.start}}</td>
        <td>{{item.end}}</td>
        <td  class="tds">{{item.tai}}</td>
        <td>{{item.orders}}</td>
        <td class="lll">
          <a href="javascript:;">编辑</a>
          <a href="javascript:;">删除</a>
        </td>
      </tr>
    </table>
    <div class="page">
      <p>当前第1页 共1页&nbsp;</p>
    </div>
  </div>
</template>

<script>
    export default {
        name: "cpmActiveTable",
      data(){
        return{
          tables:[
            {
              active:"购物满100金额减免10元",
              methods:"金额减免",
              contents:"10 元",
              limits:"全部商品",
              lowers:"100",
              upper:"0元",
              start:"2017-09-15 11:00:00",
              end:"2039-09-21 14:00:00",
              tai:"显示",
              orders:"0"
            },
            {
              active:"购物满10元，送精美礼品一份",
              methods:"赠送礼品",
              contents:"赠：神秘礼品",
              limits:"按商品设置",
              lowers:"10",
              upper:"无",
              start:"2017-08-02 09:00:00",
              end:"2039-09-30 09:00:00",
              tai:"显示",
              orders:"0"
            },
            {
              active:"购买促销商品即送小礼品",
              methods:"赠送礼品",
              contents:"赠：精美礼品一份",
              limits:"全部商品",
              lowers:"0",
              upper:"无",
              start:"2017-09-07 16:00:00",
              end:"2039-12-23 16:00:00",
              tai:"显示",
              orders:"0"
            },
            {
              active:"开学季，购物满100元9折优惠",
              methods:"享受折扣",
              contents:"90 折",
              limits:"全部商品",
              lowers:"100",
              upper:"0元",
              start:"2017-09-21 13:00:00",
              end:"2050-11-26 18:00:00",
              tai:"显示",
              orders:"1"
            },
            {
              active:"网站1周年庆全场5折，50元封顶",
              methods:"享受折扣",
              contents:"50 折",
              limits:"全部商品",
              lowers:"100",
              upper:"50元",
              start:"2017-09-03 11:00:00",
              end:"2039-10-30 15:00:00",
              tai:"显示",
              orders:"8"
            },
            {
              active:"购物满100元赠送80元话费",
              methods:"赠送礼品",
              contents:"赠：80元网络电话话费",
              limits:"全部商品",
              lowers:"100",
              upper:"无",
              start:"2018-04-11 09:00:00",
              end:"2024-04-26 13:00:00",
              tai:"显示",
              orders:"100"
            }

          ]
        }
      }
    }
</script>

<style scoped>

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
  table tr td:nth-child(1) a{
    color: #198cb7;
  }
  table tr td:nth-child(1) a:hover{
    text-decoration: underline;
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
  table tr .tds{
    color: #4cb549;
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
