<template>
  <div class="cont-table">
    <table>
      <tbody>
        <tr>
          <th>
            <label>
              <input type="checkbox" id="select-all" onchange="selectAll(this)" value="">
                商品ID
            </label>
          </th>
          <th>商品名称</th>
          <th>分类</th>
          <th>单价</th>
          <th>上架</th>
          <th>精品</th>
          <th>折扣</th>
          <th>新品</th>
          <th>热销</th>
          <th>排序</th>
          <th>操作</th>
        </tr>
        <tr>
          <td>
            <label>
              <input class="list-box" type="checkbox" value="128" onchange="selectItem()"> 128
            </label>
          </td>
          <td>
            <a href="/">屏风办公桌简约现代桌椅组合职员电脑办工桌家具4四人位6卡位</a>
          </td>
          <td>办公用品</td>
          <td>200</td>
          <td><span class="yes">√</span></td>
          <td><span class="no">×</span></td>
          <td><span class="no">×</span></td>
          <td><span class="no">×</span></td>
          <td><span class="no">×</span></td>
          <td>128</td>
          <td class="lll">
            <a href="javascript:void(0)" onclick="edit(128)">编辑</a> <p>|</p>
            <a href="javascript:void(0)" onclick="review(128)">评论</a> <p>|</p>
            <a href="javascript:void(0)" onclick="del(128)">删除</a>
          </td>
        </tr>

      </tbody>
    </table>
  </div>
</template>

<script>
    export default {
        name: "cpm-shop-list-cont"
    }
</script>

<style scoped>

  label {
    font-weight: normal;
  }
  td, th {
    padding: 0;
  }
  th {
    text-align: left;
  }
  /* ---表格--正文 */
  table{
    width: 100%;
    border-collapse: collapse;
  }
  .cont-table table th {
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
  input[type=checkbox], input[type=radio] {
    margin: 4px 0 0;
    line-height: normal;
  }
  .cont-table table td {
    border: 1px solid #ddd;
    height: 40px;
    font-size: 13px;
    padding-left: 5px;
    padding-right: 5px;
  }
  .cont-list a {
    color: #198cb7;
  }
  .no {
    color: #FF0000;
  }
  .yes {
    color: #4cb549;
  }
  .lll{
    display: table-cell;
    text-indent: 2px;
  }
  .lll>*{
    float: left;
  }
</style>
