<template>
  <div class="content">
    <cpm-content-top :item="data[3]" :isview="isview"></cpm-content-top>
    <div class="frame-right">
      <div class="con">
        <div class="main-list">
          <div class="search">
            <form action="">
              <div class="row">
                订单号：<input type="text" name="no" value="" class="width-100">
                用户名：<input type="text" name="username" value="" class="width-100">
                售后状态：<select name="service_status">
                <option value="">全部</option>
                <option value="1">售后中</option><option value="2">售后完成</option>				</select>
                下单日期：<input type="text" id="start_time" name="start_time" value="" class="width-100 picktime">
                -       <input type="text" id="end_time" name="end_time" value="" class="width-100 picktime">
                <input id="btn-search" type="button" value="搜索">  <input id="btn-search-all" type="button" value="全部">

              </div>
            </form>
          </div>
          <table>
            <tr>
              <th width="16%">订单</th>
              <th width="84%">售后信息</th>
            </tr>
            <tr>
              <th></th>
              <th></th>
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
    name: "cpmRight33",
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

