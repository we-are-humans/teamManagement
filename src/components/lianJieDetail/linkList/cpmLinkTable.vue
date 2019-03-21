<template>
  <div class="table">
    <table>
      <tr class="title">
        <td height="39">链接名称</td>
        <td>缩略图</td>
        <td>标签</td>
        <td>状态</td>
        <td>排序</td>
        <td>开始时间</td>
        <td>截止时间</td>
        <td>操作</td>
      </tr>
      <tr v-for="item in tables">
        <td>
          <a href="javascript:;">{{item.designation}}</a>
        </td>
        <td>{{item.imgs}}</td>
        <td >{{item.tag}}</td>
        <td class="tds">{{item.tai}}</td>
        <td>{{item.orders}}</td>
        <td>{{item.start}}</td>
        <td>{{item.end}}</td>
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
        name: "cpmLinkTable",
      data(){
          return{
            tables:[
              {
                designation:"SHOPCMS",
                imgs:"--",
                tag:"site_bottom_link",
                tai:"公开",
                orders:"1",
                start:"不限",
                end:"不限",
              },
              {
                designation:"品牌专区",
                imgs:"--",
                tag:"top",
                tai:"公开",
                orders:"100",
                start:"不限",
                end:"不限",
              },
              {
                designation:"360",
                imgs:"--",
                tag:"site_bottom_link",
                tai:"公开",
                orders:"100",
                start:"不限",
                end:"不限",
              },
              {
                designation:"腾讯",
                imgs:"--",
                tag:"site_bottom_link",
                tai:"公开",
                orders:"100",
                start:"不限",
                end:"不限",
              },
              {
                designation:"淘宝",
                imgs:"--",
                tag:"site_bottom_link",
                tai:"公开",
                orders:"100",
                start:"不限",
                end:"不限",
              },
              {
                designation:"新浪",
                imgs:"--",
                tag:"site_bottom_link",
                tai:"公开",
                orders:"100",
                start:"不限",
                end:"不限",
              },
              {
                designation:"百度",
                imgs:"--",
                tag:"site_bottom_link",
                tai:"公开",
                orders:"100",
                start:"不限",
                end:"不限",
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
