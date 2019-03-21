<template>
  <div class="content">
    <cpm-content-top :item="data[3]" :isview="isview"></cpm-content-top>
    <div class="frame-right">
      <div class="con">
        <div class="main-list">
          <div class="search">
            <form action="">
              <div class="row">
                订单编号：<input type="text" name="no" value="" class="width-100">
                配货状态：<select name="delivery_status">
                <option value="">全部</option>
                <option value="0" selected="selected">待配货</option>
                <option value="1">配货中</option>
                <option value="2">已配货</option>
              </select>
                用户名：<input type="text" id="username" name="username" value="" class="width-100">
                收货人：<input type="text" id="receiver" name="receiver" value="" class="width-100">
                <input id="btn-search" type="button" value="搜索">  <input id="btn-search-all" type="button" value="全部">
              </div>
            </form>
          </div>
          <table>
            <tr>
              <th>订单编号</th>
              <th>用户名</th>
              <th>收货人</th>
              <th>订单状态</th>
              <th>支付状态</th>
              <th>下单时间</th>
              <th>操作</th>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td colspan="7">
                <span class="foot">当前第1页 共1页 </span>
              </td>
            </tr>
          </table>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import CpmContentTop from "../../components/cmsPublic/cpmContentTop";
  export default {
    name: "cpmRight32",
    components: {CpmContentTop},
    props: ["data","isview"]
  }
</script>

<style scoped>
  @import "../../assets/css/order.css";
  .content{
    flex: 1;
  }
  .frame-right{
    margin-bottom: 90px;
  }
</style>
