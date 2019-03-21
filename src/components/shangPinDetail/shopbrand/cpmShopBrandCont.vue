<template>
  <table>
    <tbody><tr>
      <th>品牌名称</th>
      <th>LOGO</th>
      <th>排序</th>
      <th>是否显示</th>
      <th>操作</th>
    </tr>
    <tr>
      <td>尖兵</td>
      <td></td>
      <td>2</td>
      <td><span class="yes">显示</span></td>
      <td class="lll">
        <a href="javascript:void(0)" onclick="edit(27)">编辑</a> <p>|</p>
        <a href="javascript:void(0)" onclick="del(27)">删除</a>
      </td>
    </tr>
    <tr>
      <td>乐凯</td>
      <td><img src="/static/img/jianbing.jpg" ></td>
      <td>3</td>
      <td><span class="yes">显示</span></td>
      <td class="lll">
        <a href="javascript:void(0)" onclick="edit(26)">编辑</a> <p>|</p>
        <a href="javascript:void(0)" onclick="del(26)">删除</a>
      </td>
    </tr>
    <tr>
      <td>梦丽</td>
      <td><img src="/static/img/huanqiu.jpg" ></td>
      <td>4</td>
      <td><span class="yes">显示</span></td>
      <td class="lll">
        <a href="javascript:void(0)" onclick="edit(25)">编辑</a> <p>|</p>
        <a href="javascript:void(0)" onclick="del(25)">删除</a>
      </td>
    </tr>
    <tr>
      <td>齐心</td>
      <td><img src="/static/img/huanqiu.jpg" ></td>
      <td>5</td>
      <td><span class="yes">显示</span></td>
      <td class="lll">
        <a href="javascript:void(0)" onclick="edit(24)">编辑</a> <p>|</p>
        <a href="javascript:void(0)" onclick="del(24)">删除</a>
      </td>
    </tr>
    <tr>
      <td>得力</td>
      <td><img src="/static/img/dili.jpg" ></td>
      <td>12</td>
      <td><span class="yes">显示</span></td>
      <td class="lll">
        <a href="javascript:void(0)" onclick="edit(23)">编辑</a> <p>|</p>
        <a href="javascript:void(0)" onclick="del(23)">删除</a>
      </td>
    </tr>

    </tbody>
  </table>
</template>

<script>
    export default {
        name: "cpm-shop-brand-cont"
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
