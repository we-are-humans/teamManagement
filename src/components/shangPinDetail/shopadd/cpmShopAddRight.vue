<template>
   <!--扩展信息： -->
  <div class="kuozhan">
    <div class="kuoONe">
      <span>货号：</span>
      <input type="text" name="shophao" id="">
    </div>
    <div class="kuoONe">
      <span>扩展分类： </span>
      <div class="chen">
        <span class="add"> [+添加分类]</span>
      </div>
    </div>
    <div class="kuoONe">
      <span>促销：</span>
      <div class="chen">
        <input type="checkbox" name="hots" value="">热销
        <input type="checkbox" name="hots" value="">打折
        <input type="checkbox" name="hots" value="">促销
      </div>
    </div>
    <div class="kuoONe">
      <span>赠送积分：</span>
      <input type="text" value="99" name="jifen">
      <span class="mo">购买该商品时赠送用户的积分，不填表示根据“价格”计算</span>
    </div>
    <div class="kuoONe">
      <span>市场价：</span>
      <input type="text" value="666" name="chpice">
      <span class="mo">最多保留两位小数，不填表示根据“价格”计算</span>
    </div>
    <div class="kuoONe">
      <span>原价：</span>
      <input type="text" value="444" name="yuanpice">
      <span class="mo">购买该商品时赠送用户的积分，不填表示根据“价格”计算</span>
    </div>
    <div class="kuoONe">
      <span>商品积分：</span>
      <input type="text" name="shopjifen">
      <span class="mo">用户购买此商品获得的积分，不填表示根据“价格”自动计算</span>
    </div>
    <div class="kuoONe">
      <span>重量：</span>
      <input type="text" name="zhong">
      <span class="mo">单位:KG，最多保留两位小数</span>
    </div>
    <div class="kuoONe">
      <span>排序：</span>
      <input type="text" name="peixu">
      <span class="mo">表示排序，越大排序越靠前，默认为产品ID</span>
    </div>
    <div class="kuoONe">
      <span>允许评论：</span>
      <div class="chen">
        <input type="radio" name="aa" value="1">禁止
        <input type="radio" name="aa" value="2">允许
        <input type="radio" checked name="aa" value="3">默认
      </div>
      <span class="xin">* </span>
      <span class="mo">默认表示根据分类设置确定</span>
    </div>
    <div class="kuoONe">
      <span>是否上架：</span>
      <div class="chen">
        <input type="radio" name="bb" value="1">下架
        <input type="radio" checked name="bb" value="2">上架
        <span class="xin">* </span>
      </div>
    </div>
    <div class="kuoONe">
      <span>浏览次数：</span>
    </div>
    <div class="kuoONe">
      <span>扩展分类： </span>
      <div class="chen">
        <span class="add"> [+添加分类]</span>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "cpm-shop-add-right"
    }
</script>

<style scoped>

  /* 扩展信息： */

  .kuozhan{
    width: 1140px;
    display: inline-block;
    margin-top: 10px;
  }

  .kuoONe{
    border-bottom: 1px dotted #d4d4d4;
    min-height: 40px;
    margin-top: 4px;
  }
  .kuoONe span:first-of-type{
    display: inline-block;
    text-align: right;
    padding: 0px;
    line-height: 32px;
    font-size: 13px;
    color: #333;
    width: 80px;
  }
  .kuoONe:first-of-type input{
    width: 120px;

  }
  .chen{
    display: inline-block;
  }
  .mo{
    color: #aaaaaa;
    margin-left: 10px;
    display: inline-block;
    padding-top: 4px;
  }

  .kuoONe .chen .add{
    margin-top: 2px;
    color: #536290;
    width: 100px;
    display: block;
    cursor: pointer;
  }

</style>
