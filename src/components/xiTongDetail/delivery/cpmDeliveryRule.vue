<template>
    <div >
      <div v-if="bigshow">
        <div class="rule" v-if="isshow">
          <div class="rules">
            <div class="left">
              <p>配送方式：</p>
              <span>{{data.count}}</span>
            </div>
            <input type="button" @click="back" value="添加规则">
          </div>
          <div class="tab">
            <table>
              <tr>
                <td>区域</td>
                <td>邮费</td>
                <td>免费额度</td>
                <td>是否配送</td>
                <td>匹配顺序</td>
                <td>操作</td>
              </tr>
              <tr  v-for="(i,index) in data">
                <td>{{i.area}}</td>
                <td>{{i.postage}}</td>
                <td>{{i.frees}}</td>
                <td>{{i.isDelivery}}</td>
                <td>{{i.match}}</td>
                <td>
                  <a href="javascript:;" @click="changeMian(index)">编辑</a>
                  <a href="javascript:;" @click="confirmShow">删除</a>
                </td>
              </tr>
            </table>
          </div>
        </div>
        <cpm-delivery-comfirm @delt="delt" :content="content" :showDialog="showDialog" @clickCancel="clickCancel" @clickConfirm="clickConfirm"></cpm-delivery-comfirm>
      </div>
      <cpm-delivery-edit :data="peishu" :isshow="isshow2" @back="back1"></cpm-delivery-edit>
    </div>
</template>

<script>
    import CpmDeliveryComfirm from "./cpmDeliveryComfirm";
    import CpmDeliveryEdit from "./cpmDeliveryEdit";
    export default {
        name: "cpmDeliveryRule",
      components: {CpmDeliveryEdit, CpmDeliveryComfirm},
      props: ["data","isshow"],
      data(){
        return{
          tables:[
            {
              method1:"韵达快递",
              isDelivery:"配送",
              isDelivery1:"不配送",
              fei:"10",
              free:"200000",
              orders:"1"
            },
            {
              method1:"韵达快递",
              isDelivery:"配送",
              isDelivery1:"不配送",
              fei:"15",
              free:"100000",
              orders:"2"
            },
            {
              method1:"韵达快递",
              isDelivery:"配送",
              isDelivery1:"不配送",
              fei:"--",
              free:"--",
              orders:"3"
            },
            {
              method1:"韵达快递",
              isDelivery:"配送",
              isDelivery1:"不配送",
              fei:"0",
              free:"0",
              orders:"10"
            }
          ],
          shu:"",
          peishu: {},
          isshow2: false,//编辑
          showDialog: false,
          bigshow:true,
          okText: "确定",
          cancelText: "取消",
          content: "您确定要删除吗",
          confirmFn: "",
          cancelFn: ""
        }


      },
      methods:{
          chuan(ruleShu){
            this.$emit("chuan",ruleShu)
          },
        back(){
          this.$emit("back")
        },
        clickCancel(){
          this.showDialog=false;
        },
        clickConfirm(){
          this.showDialog=false;
        },
        confirmShow(){
          this.showDialog=true;
        },
        delt(index){
          this.data.splice(index,1);
        },
        changeMian(num){
          this.shu = num;
          this.peishu = this.tables[this.shu],
          this.isshow2=true,
            this.bigshow=false

        },
        back1(){
          this.isshow2=true
          this.bigshow=false
        }

      }

    }
</script>
<style scoped>
.rule{
  margin:0 14px;
}
  .rules{
    display: flex;
    height: 58px;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px dashed #e2e2e2;
  }
  .left{
    display: flex;
    align-items: center;
  }
  /*.left span{*/
    /*color: #333333;*/
    /*font-size: 14px;*/
    /*line-height:14px ;*/
    /*font-weight: 700;*/
  /*}*/
  .rules p{
    color: #333333;
    font-size: 14px;
    line-height:14px ;
  }
  .rules span{
    color:#333333 ;
    font-size:16px ;
    line-height:16px;
    font-weight: 600;
  }
  .rules input{
    color: white;
    font-size: 16px;
    line-height: 16px;
    width: 86px;
    height: 31px;
    background: #337ab7;
    border-radius: 4px;
    outline: none;
    border: 1px solid #2e6da4;
    cursor: pointer;
  }
  .tab{
    margin-top:10px ;
  }
  .tab table{
    width:100%;
    border-collapse: collapse;
  }
.tab table tr{
  height: 49px;
}
  .tab table tr td{
    border: 1px solid #dddddd;
    text-indent: 7px;
  }
  .tab table tr td{
    color: #333333;
    font-size: 15px;
    line-height: 15px;
  }
.tab table tr td:nth-child(4){
  color: #4cb549;
}
.tab table tr:nth-child(4) td:nth-child(4){
  color: #ff1f1f;
}
.tab table tr td:last-child{
  display: flex;
  align-items: center;
  height: 49px;
}
.tab table tr:hover{
  background: #f5f9fa;
}
.tab table tr:nth-child(1) td{
  color: #707070;
  font-size:16px ;
  line-height: 16px;
  font-weight: 700;
  background: #f1f1f1;
}
.tab table tr td:last-child a{
  color: #199ad0;
  font-size: 15px;
  line-height:17px;
}
.tab table tr td:last-child a:nth-child(1){
  padding-right: 7px;
  border-right: 1px solid #336db0;
}
</style>
