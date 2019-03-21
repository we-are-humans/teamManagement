<template>
  <form ref="forms">
    <div class="addAdv">
      <div class="call">
        <label>广告位名称:</label><input type="text" v-model="callName">
        <span class="no">*</span>
        <span class="form-tips">广告位标识，相同页面不允许重复。格式如：index_top</span>
      </div>
      <div class="alias">
        <label>别名:</label>
        <input type="text" v-model="aliasName" >
        <span class="no">*</span>
      </div>
      <div class="advType">
        <label>广告类型:</label>
        <select v-model="typeName" >
          <option :value='item.value' v-for="item in options">{{item.name}}</option>
        </select>
        <span class="no">*</span>
      </div>
      <div class="size">
        <label>广告尺寸:</label>
        <input type="text" v-model="sizeName">
        <span class="no" style="color: #000;">*</span>
        <input type="text" >
        <span class="no">*</span>
        <span class="form-tips">宽*高(单位:px)</span>
      </div>
      <div class="order">
        <label>排序:</label>
        <input type="text" v-model="orderName">
        <span class="no">*</span>
      </div>
      <div class="router">
        <label>页面路由:</label>
        <input type="text" v-model="routerName">
        <span class="form-tips">投放页面的路由，不输表示全站均可见。输入格式：/index/main</span>
      </div>
      <div class="scan">
        <label>预览网址:</label>
        <input type="text" v-model="scanName">
        <span class="form-tips">不输表示根据路由创建，输入格式：/index.html 或者http://ab.com</span>
      </div>
      <div class="describe">
        <label>描述:</label>
        <textarea v-model="desName"></textarea>
        <span class="form-tips" style="vertical-align: bottom">输入1-200个字符</span>

      </div>
       <btn @saveData="saveData"></btn>

    </div>
  </form>
</template>
<script>
  // import btn  from "../btn/btn"
  import btn  from "../../../components/common/btn/btn"
    export default {
        name: "addAdv",
      components:{
        btn
      },
      data(){
          return{
            callName:"",
            aliasName:"",
            sizeName:"",
            orderName:"",
            routerName:"",
            scanName:"",
            desName:"",
            typeName:0,
            options:[
              {
                name:"选择类型",
                value:0
              },
              {
                name:"图片",
                value:1
              },
              {
                name:"文字",
                value:2
              },
              {
                name:"Flash",
                value:3
              },
              {
                name:"图文",
                value:4
              },
              {
                name:"其他",
                value:5
              },
            ]
          }
      },
      methods:{
        saveData(){
          let formData=new FormData(this.$refs.forms);
            // let obj={
            //   // "callName":this.callName,
            //   "aliasName":this.aliasName,
            //   "typeName":this.typeName,
            //   "sizeName":this.sizeName,
            //   "order":this.order,
            //   "routerName":this.routerName,
            // }
            this.$http.post("http://localhost:3000/advPos",formData).then((res)=>{

            })
        }
      }
    }
</script>

<style lang="scss" scoped>
  form{
    margin-top: 20px;
  }
  .addAdv{
    padding-left: 20px;
    >div{
      padding-bottom: 8px;
      padding-top: 4px;
      border-bottom: 1px dotted #d4d4d4;
      .no{
        color: #FF0000;
        display: inline-block;
       }
    }
    input{
      height: 22px;
      vertical-align: middle;

    }
    span{
      vertical-align: middle;
    }
    .call{
       input{
         width: 300px;
       }
    }
    .alias{
      input{
        width: 200px;
      }
    }
    .size{
        input{
          width: 60px;
        }
    }
    .advType{
      select{
        width: 76px;
        height: 26px;
      }
    }
    .order{
      input{
        width: 60px;
      }
    }
    .router{
      input{
        width: 200px;
      }
    }
    .scan{
      input{
        width: 300px;
      }
    }
    .describe{
      textarea{
        width: 300px;
        height: 90px;
        vertical-align:top;
      }
    }
    .form-tips{
      color: #aaaaaa;
      margin-left: 10px;
      display: inline-block;
      padding-top: 4px;
      font-size: 14px;
    }
    .btn{
      border:none;
      width: 106px;
      height: 46px;
      line-height: 46px;
      text-align: center;
      background:rgb(40,96,144);
      font-size: 18px;
      color: white;
      border-radius:3px;
      margin-top: 30px;
      margin-left: 200px;
    }
  }
   label{
     display: inline-block;
     width: 80px;
     height: 32px;
     text-align: right;
     font-size: 14px;
     color:#000;
     margin-right: 10px;
   }
</style>
