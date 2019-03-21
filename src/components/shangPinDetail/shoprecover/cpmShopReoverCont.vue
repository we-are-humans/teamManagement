<template>
    <div>
      <table>
        <tbody>
        <tr>
          <th>
            <label>
              <input type="checkbox" id="select-all" value="">商品ID</label>
          </th>
          <th>商品标题</th>
          <th>删除时间</th>
          <th>操作</th>
        </tr>
        </tbody>
      </table>
      <div class="list-page">
        当前第1页 共1页
      </div>
    </div>
</template>

<script>
    export default {
        name: "cpm-shop-reover-cont"
    }
</script>

<style scoped>

  table {
    width: 100%;
    border-collapse: collapse;
  }
  table th {
    border: 1px solid #ddd;
    border-bottom: 2px solid #ddd;
    font-weight: 700;
    background: #F2F2F2;
    vertical-align: middle;
    height: 40px;
    color: #707070;
    padding-left: 5px;
    padding-right: 5px;
    background-image: -webkit-linear-gradient(top,#F8F8F8 0,#ECECEC 100%);
  }

 .list-page {
    text-align: right;
    border-bottom: 1px solid #e0e0e0;
    padding: 12px 6px;
    background-color: #EFF3F8;
  }
</style>
