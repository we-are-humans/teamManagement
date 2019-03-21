<template>
    <div class="content">
      <cpm-content-top :item="data[3]" :isview="isview"></cpm-content-top>
      <div class="frame-right">
        <div class="con">
          <div class="main-list">
            <div class="search">
              <form action="">
                <div class="row">
                  订单号：<input type="text" class="width-100"/>
                  状态：<select name="status">
                  <option value="">全部</option>
                  <option value="0">未确认</option>
                  <option value="1">已确认</option>
                  <option value="2">已完成</option>
                  <option value="3">已取消</option>
                  <option value="4">无效</option>
                  <option value="5">交易关闭</option>
                </select>
                  支付状态：<select name="pay_status">
                  <option value="">全部</option>
                  <option value="0">待支付</option>
                  <option value="1">已支付</option>
                  <option value="2">已退款</option>
                </select>
                  配送状态：<select name="delivery_status">
                  <option value="">全部</option>
                  <option value="0">未处理</option>
                  <option value="1">配货中</option>
                  <option value="2">已配货</option>
                  <option value="3">已发货</option>
                  <option value="4">已收货</option>
                  <option value="5">默认收货</option>
                </select>
                </div>
                <div class="row row-top">
                  用户名：<input type="text" class="width-100"/>
                  下单日期：<input type="text" class="width-100"/> - <input type="text" class="width-100"/>
                  <input type="button" value="搜索">
                  <input type="button" value="全部">
                </div>
              </form>
            </div>
            <table>
              <tr>
                <th>订单号</th>
                <th>商品</th>
                <th>用户名</th>
                <th>商品金额</th>
                <th>订单金额</th>
                <th>运费</th>
                <th>订单状态</th>
                <th>下单时间</th>
              </tr>
              <tr v-for="(item,i) in orderManage.orderInfo.orderList" :key="i">
                <td><a href="" v-text="item.orderId"></a></td>
                <td v-text="item.shop"></td>
                <td v-text="item.userName"></td>
                <td v-text="item.shopPice"></td>
                <td v-text="item.oderPice"></td>
                <td v-text="item.extra"></td>
                <td v-text="item.condition"></td>
                <td v-text="item.orderTime"></td>
              </tr>

            </table>
            <div class="list-page">
              当前第1页 共1页
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
    import CpmContentTop from "../../components/cmsPublic/cpmContentTop";
    export default {
      name: "cpmRight30",
      components: {CpmContentTop},
      props: ["data","isview"],
      data(){
        return{
          orderManage:{
            orderInfo:{
              title:"订单信息",
              orderList:[
                {orderId:2019010909434677446850,shop:"得力A4复印纸打印白纸70g整箱 a4打印用纸80g办公用纸整箱5包装2500张",userName:"test89",shopPice:0,oderPice:20,extra:20,condition:"未确认",orderTime:"2019-01-09 09:43:46"},
                {orderId:2019010909443521971802,shop:"得力A4复印纸打印白纸70g整箱 a4打印用纸80g办公用纸整箱5包装2500张",userName:"test89",shopPice:0,oderPice:20,extra:20,condition:"未确认",orderTime:"2019-01-09 09:44:35"},
                {orderId:2019010920340847389435,shop:"屏风办公桌简约现代桌椅组合职员电脑办工桌家具4四人位6卡位",userName:"test1",shopPice:200,oderPice:120,extra:0,condition:"未确认",orderTime:"2019-01-09 20:34:08"},
                {orderId:2019022117463739069115,shop:"屏风办公桌简约现代桌椅组合职员电脑办工桌家具4四人位6卡位...等2件物品",userName:"test001",shopPice:400,oderPice:320,extra:0,condition:"未确认",orderTime:"2019-02-21 17:46:37"},
                {orderId:2019022117514909257981,shop:"购买签约次数...等2件物品",userName:"test001",shopPice:600,oderPice:530,extra:20,condition:"未确认",orderTime:"2019-02-21 17:51:49"},
                {orderId:2019022209165759626739,shop:"得力考勤机",userName:"test001",shopPice:100,oderPice:50,extra:20,condition:"未确认",orderTime:"2019-02-22 09:16:57"},
                {orderId:2019022209165759626739,shop:"得力考勤机",userName:"test001",shopPice:100,oderPice:50,extra:20,condition:"未确认",orderTime:"2019-02-22 09:16:57"},
                {orderId:2019022209182070105537,shop:"得力考勤机...等5件物品",userName:"test001",shopPice:800,oderPice:680,extra:0,condition:"未确认",orderTime:"2019-02-22 09:18:20"},
                {orderId:2019010909434677446850,shop:"得力A4复印纸打印白纸70g整箱 a4打印用纸80g办公用纸整箱5包装2500张",userName:"test89",shopPice:0,oderPice:20,extra:20,condition:"未确认",orderTime:"2019-01-09 09:43:46"},
                {orderId:2019010909434677446850,shop:"得力A4复印纸打印白纸70g整箱 a4打印用纸80g办公用纸整箱5包装2500张",userName:"test89",shopPice:0,oderPice:20,extra:20,condition:"未确认",orderTime:"2019-01-09 09:43:46"},
                {orderId:2019010909434677446850,shop:"得力A4复印纸打印白纸70g整箱 a4打印用纸80g办公用纸整箱5包装2500张",userName:"test89",shopPice:0,oderPice:20,extra:20,condition:"未确认",orderTime:"2019-01-09 09:43:46"},
              ]
            }
          }


        }
      },
    }
</script>

<style>
  @import "../../assets/css/order.css";
  .content{
    flex: 1;
  }
  .frame-right{
    margin-bottom: 90px;
  }
</style>
