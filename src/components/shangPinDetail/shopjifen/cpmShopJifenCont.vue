<template>
  <div class="cont-table">
    <table>
      <tbody><tr>
        <th><label><input type="checkbox" id="selectAll" onclick="selectAll(this)" value=""> ID</label></th>
        <th>商品名称</th>
        <th>分类</th>
        <th>售价</th>
        <th>兑换积分</th>
        <th>库存</th>
        <th>状态</th>
        <th>排序</th>
        <th>操作</th>
      </tr>
      <tr>
        <td><label><input type="checkbox" value="12" onchange="selectItem()"> 12</label></td>
        <td><a  href="/admin/index.php?_=pointProduct/edit&amp;id=12">得力A4复印纸打印白纸70g整箱 a4打印用纸80g办公用纸整箱5包装2500张</a></td>
        <td>电脑打印纸</td>
        <td>￥56</td>
        <td>5</td>
        <td>999</td>
        <td id="td_open_12"><span class="yes">上架</span></td>
        <td>133</td>
        <td class="lll">
          <a href="javascript:void(0)" onclick="setOpen(12, 0)">下架</a> <p>|</p>

          <a href="javascript:void(0)" onclick="edit(12)">编辑</a> <p>|</p>
          <a href="javascript:void(0)" onclick="del(12)">删除</a>
        </td>
      </tr>
      <tr>
        <td><label><input type="checkbox" value="3" onchange="selectItem()"> 3</label></td>
        <td><a  href="/admin/index.php?_=pointProduct/edit&amp;id=3">得力考勤机</a></td>
        <td>考勤卡</td>
        <td>￥100</td>
        <td>10</td>
        <td>100</td>
        <td id="td_open_3"><span class="no">下架</span></td>
        <td>100</td>
        <td class="lll">
          <a href="javascript:void(0)" onclick="setOpen(3, 1)">上架</a> <p>|</p>

          <a href="javascript:void(0)" onclick="edit(3)">编辑</a> <p>|</p>
          <a href="javascript:void(0)" onclick="del(3)">删除</a>
        </td>
      </tr>
      <tr>
        <td><label><input type="checkbox" value="14" onchange="selectItem()"> 14</label></td>
        <td><a  href="/admin/index.php?_=pointProduct/edit&amp;id=14">美菱饮水机家用立式冷热迷你小型办公室节能冰温热双门制冷开水机</a></td>
        <td>装订胶片</td>
        <td>￥333</td>
        <td>10</td>
        <td>999</td>
        <td id="td_open_14"><span class="yes">上架</span></td>
        <td>100</td>
        <td class="lll">
          <a href="javascript:void(0)" onclick="setOpen(14, 0)">下架</a> <p>|</p>

          <a href="javascript:void(0)" onclick="edit(14)">编辑</a> <p>|</p>
          <a href="javascript:void(0)" onclick="del(14)">删除</a>
        </td>
      </tr>
      <tr>
        <td><label><input type="checkbox" value="13" onchange="selectItem()"> 13</label></td>
        <td><a  href="/admin/index.php?_=pointProduct/edit&amp;id=13">办公用品办公设备办公耗材</a></td>
        <td>过塑机</td>
        <td>￥0.1</td>
        <td>5</td>
        <td>999</td>
        <td id="td_open_13"><span class="yes">上架</span></td>
        <td>100</td>
        <td class="lll">
          <a href="javascript:void(0)" onclick="setOpen(13, 0)">下架</a> <p>|</p>

          <a href="javascript:void(0)" onclick="edit(13)">编辑</a> <p>|</p>
          <a href="javascript:void(0)" onclick="del(13)">删除</a>
        </td>
      </tr>
      <tr>
        <td><label><input type="checkbox" value="11" onchange="selectItem()"> 11</label></td>
        <td><a  href="/admin/index.php?_=pointProduct/edit&amp;id=11">办公用品办公设备办公耗材</a></td>
        <td>切纸机</td>
        <td>￥1</td>
        <td>5</td>
        <td>999</td>
        <td id="td_open_11"><span class="yes">上架</span></td>
        <td>100</td>
        <td class="lll">
          <a href="javascript:void(0)" onclick="setOpen(11, 0)">下架</a> <p>|</p>

          <a href="javascript:void(0)" onclick="edit(11)">编辑</a> <p>|</p>
          <a href="javascript:void(0)" onclick="del(11)">删除</a>
        </td>
      </tr>
      <tr>
        <td><label><input type="checkbox" value="10" onchange="selectItem()"> 10</label></td>
        <td><a  href="/admin/index.php?_=pointProduct/edit&amp;id=10">装订机订书机</a></td>
        <td>切纸机</td>
        <td>￥1</td>
        <td>5</td>
        <td>999</td>
        <td id="td_open_10"><span class="yes">上架</span></td>
        <td>100</td>
        <td class="lll">
          <a href="javascript:void(0)" onclick="setOpen(10, 0)">下架</a> <p>|</p>

          <a href="javascript:void(0)" onclick="edit(10)">编辑</a> <p>|</p>
          <a href="javascript:void(0)" onclick="del(10)">删除</a>
        </td>
      </tr>
      <tr>
        <td><label><input type="checkbox" value="9" onchange="selectItem()"> 9</label></td>
        <td><a  href="/admin/index.php?_=pointProduct/edit&amp;id=9">固腾货架仓储家用自由组合置物架仓库货架展示架多层多功能铁架子</a></td>
        <td>拆装柜</td>
        <td>￥445</td>
        <td>5</td>
        <td>999</td>
        <td id="td_open_9"><span class="yes">上架</span></td>
        <td>100</td>
        <td class="lll">
          <a href="javascript:void(0)" onclick="setOpen(9, 0)">下架</a> <p>|</p>

          <a href="javascript:void(0)" onclick="edit(9)">编辑</a> <p>|</p>
          <a href="javascript:void(0)" onclick="del(9)">删除</a>
        </td>
      </tr>
      <tr>
        <td><label><input type="checkbox" value="8" onchange="selectItem()"> 8</label></td>
        <td><a  href="/admin/index.php?_=pointProduct/edit&amp;id=8">办公用品测试，全国售后联保</a></td>
        <td>彩色复印纸</td>
        <td>￥55</td>
        <td>3</td>
        <td>999</td>
        <td id="td_open_8"><span class="yes">上架</span></td>
        <td>100</td>
        <td class="lll">
          <a href="javascript:void(0)" onclick="setOpen(8, 0)">下架</a> <p>|</p>

          <a href="javascript:void(0)" onclick="edit(8)">编辑</a> <p>|</p>
          <a href="javascript:void(0)" onclick="del(8)">删除</a>
        </td>
      </tr>
      <tr>
        <td><label><input type="checkbox" value="7" onchange="selectItem()"> 7</label></td>
        <td><a  href="/admin/index.php?_=pointProduct/edit&amp;id=7">荣事达饮水机立式冷热家用办公小型全自动冰温热迷你双门玻璃新款</a></td>
        <td>生活礼品</td>
        <td>￥445</td>
        <td>5</td>
        <td>999</td>
        <td id="td_open_7"><span class="yes">上架</span></td>
        <td>100</td>
        <td class="lll">
          <a href="javascript:void(0)" onclick="setOpen(7, 0)">下架</a> <p>|</p>

          <a href="javascript:void(0)" onclick="edit(7)">编辑</a> <p>|</p>
          <a href="javascript:void(0)" onclick="del(7)">删除</a>
        </td>
      </tr>
      <tr>
        <td><label><input type="checkbox" value="19" onchange="selectItem()"> 19</label></td>
        <td><a  href="/admin/index.php?_=pointProduct/edit&amp;id=19">屏风办公桌简约现代桌椅组合职员电脑办工桌家具4四人位6卡位</a></td>
        <td>办公用品</td>
        <td>￥200</td>
        <td>128</td>
        <td>999</td>
        <td id="td_open_19"><span class="yes">上架</span></td>
        <td>1</td>
        <td class="lll">
          <a href="javascript:void(0)" onclick="setOpen(19, 0)">下架</a> <p>|</p>

          <a href="javascript:void(0)" onclick="edit(19)">编辑</a> <p>|</p>
          <a href="javascript:void(0)" onclick="del(19)">删除</a>
        </td>
      </tr>
      </tbody></table>
  </div>
</template>

<script>
    export default {
        name: "cpm-shop-jifen-cont"
    }
</script>

<style scoped>
  .lll{
    display: table-cell;
    text-indent: 2px;
  }
  .lll>*{
    float: left;
  }
</style>
