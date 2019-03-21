<template>
  <div class="content">
    <cpm-content-top :item="data[5]" :isview="isview"></cpm-content-top>
    <div class="container">
      <form>
        <label>广告名称:</label><input type="text" ref="username" v-model="nameValue"  />
        <label>类型:</label>
        <select>
          <option value="全部">全部</option>
          <option value="图片">图片</option>
          <option value="文字">文字</option>
          <option value="Flash">Flash</option>
          <option value="图文">图文</option>
        </select>
        <label>状态:</label>
        <select>
          <option value="全部">全部</option>
          <option value="图片">图片</option>
          <option value="文字">文字</option>
          <option value="Flash">Flash</option>
          <option value="图文">图文</option>
        </select>
        <input type="button" class='btn-search' value="搜索" @click="onSubmit">
        <input type="button" class='btn-all' value="全部" >
        <input type="button" class='add-adv' @click="addAdv" value="添加广告位">
      </form>
      <table>
        <thead style="font-size: 12px;font-weight: 700;color:#707070;">
        <th width="30">ID</th>
        <th width="174">广告位名称</th>
        <th width="122">别名</th>
        <th width="99">所在页面</th>
        <th width="76">广告数量</th>
        <th width="76">广告类型</th>
        <th width="76">广告宽度</th>
        <th width="76">广告高度</th>
        <th width="44">排序</th>
        <th width="275" style="text-align: left;">操作</th>
        </thead>
        <tbody>
        <tr  v-for="p in filterData(adv)" >
          <td><a href="#">{{p.ID}}</a></td>
          <td><a href="#">{{p.name}}</a></td>
          <td>{{p.alias}}</td>
          <td>{{p.pages}}</td>
          <td>{{p.amount}}</td>
          <td>{{p.type}}</td>
          <td>{{p.width}}</td>
          <td>{{p.height}}</td>
          <td>{{p.order}}</td>
          <td>
            <router-link to="/adver/advList">{{p.operate.list}}</router-link>&nbsp;<p>|</p>
            <router-link to="/adver/addAdv">{{p.operate.addAdv}}</router-link>&nbsp;<p>|</p>
            <a href="#">{{p.operate.scan}}</a>&nbsp;<p>|</p>
            <router-link to="/adver/editAdvPos">{{p.operate.edit}}</router-link>&nbsp;<p>|</p>
            <a href="#" @click="deleteById(p.id)">{{p.operate.delete}}</a>
          </td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
  import CpmContentTop from "../../components/cmsPublic/cpmContentTop";
  export default {
    name: "cpmRight51",
    components: {CpmContentTop},
    props: ["data","isview"],
    data(){
      return{
        nameValue:'',
        aliasValue:'',
        advHeader:{
          height: "40px",
          lineHeight: "40px",
          color:" skyblue",
          backgroundColor: "#f5f5f5"
        },
        adv:[
          {
            "id": 0,
            "ID": "68",
            "name": "全站-页脚通栏广告",
            "alias": "site_footer_img",
            "page": "",
            "amount": 1,
            "type": "图片",
            "width": 960,
            "height": 68,
            "order": 101,
            "operate": {
              "list": "广告列表",
              "addAdv": "添加广告",
              "scan": "预览",
              "edit": "编辑",
              "delete": "删除"
            }
          },
          {
            "id": 1,
            "ID": "74",
            "name": "全站-页脚广告语",
            "alias": "site_footer_text",
            "page": "",
            "amount": 1,
            "type": "图片",
            "width": 500,
            "height": 20,
            "order": 102,
            "operate": {
              "list": "广告列表",
              "addAdv": "添加广告",
              "scan": "预览",
              "edit": "编辑",
              "delete": "删除"
            }
          },
          {
            "id": 2,
            "ID": "61",
            "name": "首页-焦点轮播",
            "alias": "index_sl",
            "page": "/index/main",
            "amount": 6,
            "type": "图片",
            "width": 725,
            "height": 310,
            "order": 201,
            "operate": {
              "list": "广告列表",
              "addAdv": "添加广告",
              "scan": "预览",
              "edit": "编辑",
              "delete": "删除"
            }
          },
          {
            "id": 3,
            "ID": "60",
            "name": "首页-顶部广告",
            "alias": "/index-top",
            "page": "/index/main",
            "amount": 1,
            "type": "图片",
            "width": 958,
            "height": 52,
            "order": 101,
            "operate": {
              "list": "广告列表",
              "addAdv": "添加广告",
              "scan": "预览",
              "edit": "编辑",
              "delete": "删除"
            }
          },
          {
            "id": 4,
            "ID": "70",
            "name": "首页-分类广告-办公用品",
            "alias": "index_cat_0",
            "page": "/index/main",
            "amount": 1,
            "type": "图片",
            "width": 373,
            "height": 282,
            "order": 211,
            "operate": {
              "list": "广告列表",
              "addAdv": "添加广告",
              "scan": "预览",
              "edit": "编辑",
              "delete": "删除"
            }
          },
          {
            "id": 5,
            "ID": "71",
            "name": "首页-分类广告-办公设备",
            "alias": "index_cat_1",
            "page": "/index/main",
            "amount": 1,
            "type": "图片",
            "width": 373,
            "height": 282,
            "order": 212,
            "operate": {
              "list": "广告列表",
              "addAdv": "添加广告",
              "scan": "预览",
              "edit": "编辑",
              "delete": "删除"
            }
          },
          {
            "id": 6,
            "ID": "72",
            "name": "首页-分类广告-办公耗材",
            "alias": "index_cat_1",
            "page": "/index/main",
            "amount": 1,
            "type": "图片",
            "width": 373,
            "height": 282,
            "order": 213,
            "operate": {
              "list": "广告列表",
              "addAdv": "添加广告",
              "scan": "预览",
              "edit": "编辑",
              "delete": "删除"
            }
          },
          {
            "id": 7,
            "ID": "73",
            "name": "首页-分类广告-办公生活",
            "alias": "index_cat_3",
            "page": "/index/main",
            "amount": 1,
            "type": "图片",
            "width": 373,
            "height": 282,
            "order": 214,
            "operate": {
              "list": "广告列表",
              "addAdv": "添加广告",
              "scan": "预览",
              "edit": "编辑",
              "delete": "删除"
            }
          }
        ]

      }
    },
    methods:{
      addAdv(){
        this.$router.push({path:"/adver/addAdv"})
      },
      onSubmit(){
        this.nameValue=this.$refs.username.value
        this.aliasValue=this.$refs.alias.value
      },
      filterData(adv){
        if(this.nameValue===''&&this.aliasValue===""){
          return adv;
        }
        else if(this.nameValue!==''&&this.aliasValue===''){
          return adv.filter((item)=>{
            return item.name.match(this.nameValue)
          })
        }
        else if(this.nameValue===''&&this.aliasValue!==''){
          return adv.filter((item)=>{
            return item.alias.match(this.aliasValue)
          })
        }
        else if(this.nameValue!==''&&this.aliasValue!==''){
          return adv.filter((item)=>{
            return item.name.match(this.nameValue)&&item.alias.match(this.aliasValue)
          })
        }

      }
    }
  }
</script>

<style scoped>
  .content{
    flex: 1;
  }
  .container{
    margin:0 10px;
  }
  .advHeader{
    height: 40px;
    line-height: 40px;
    color: #646464;
    background-color: #f5f5f5;
  }
  form{
    margin-top: 10px;
    padding-bottom: 6px;
    margin-bottom: 6px;
    border-bottom: 1px solid #ddd;
    width: 100%;
    font-size: 14px;}
  input{
    border: 1px solid gray;
    vertical-align: middle;
  }
  input[type=text]{
    width: 120px;
    height: 23px;
    border-radius: 3px;
  }
  thead th{
    font-size: 14px;
  }
  tr td:last-child{
    display: table-cell;
    text-indent: 2px;
    height: 40px;
  }
  tr td:last-child>*{
    float: left;
  }
  .btn-search,.btn-all{
    width: 42px;
    height: 26px;
  }
  input[type=button]{
    background:rgb(51,122,183);
    color:white;
  }
  label{
    margin-right: 5px;
    font-weight: 300;
  }
  select{
    width: 59px;
    height: 23px;
  }
  .add-adv{
    float: right;
    width: 84px;
    height: 26px;
  }
  table{
    padding-top: 10px;
    font-size: 12px;
    padding-left: 4px;
    line-height: 40px;
    border-collapse: collapse;}
  thead{
    text-align: left;
    background:rgb(241,241,241);
    font-weight: 700;
    line-height: 42px!important;
    color: #707070;}
  th{
    text-indent: 6px;
  }
  tbody{
    font-size: 14px;
    color: #6e6d6e;}

  td{
    text-indent: 6px;
  }
  a{
    color: #198cb7;
  }
  .list-page{
    height: 45px;
    background:rgba(239,243,248,.5) ;
    text-align: right;
    font-size: 12px;
    width: 1059px;
  }
  .page{
    float: right;
  }
</style>
