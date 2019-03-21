<template>
  <div class="top ">
    <form action="" name="myAddform" style="box-sizing: border-box">
      <p class="ppTop">
        <a href="javascript:void(0)" @click="tabChange(addcontent)" :class="{active:addcontent===currentView}">主要内容</a>
        <a href="javascript:void(0)" @click="tabChange(addmessage)" :class="{active:addmessage===currentView}">扩展信息</a>
      </p>
      <div :is="currentView"></div>
      <p><button id="buttt" @click="submitSave">确认保存</button></p>
    </form>
  </div>
</template>

<script>
  import { addSave } from './addtops.js'
  import addmessage from './addmessage'
  import addcontent from './addcontent'
    export default {
        name: "addtop",
        components:{addmessage,addcontent},
        data () {
          return {
            addmessage: 'addmessage',
            addcontent: 'addcontent',
            currentView: 'addcontent'
          };
        },
        methods: {
          tabChange(tabItem) {
            this.currentView = tabItem;
          },
          submitSave(e){
            addSave()
          },
          addBook: function() {
            //计算书的id
            // this.book.id = this.books.length + 1;
            this.books.push(this.book);
            //将input中的数据重置
            this.book = {};
          },
          delBook: function(book) {
            var blength = this.books.length;
            this.books.splice(book.id-1, 1);
            for( var i = 0; i < blength ; i++) {
              if(book.id < this.books[i].id) {
                this.books[i].id -= 1;
              }
            }

          }
        },
/*    data: {
      book: {
        id: 0,
        author: '',
        name: '',
        price: ''
      },
      books: [{
        id: 1,
        author: '曹雪芹',
        name: '红楼梦',
        price: 32.0
      }, {
        id: 2,
        author: '施耐庵',
        name: '水浒传',
        price: 30.0
      }, {
        id: '3',
        author: '罗贯中',
        name: '三国演义',
        price: 24.0
      }, {
        id: 4,
        author: '吴承恩',
        name: '西游记',
        price: 20.0
      }]
    }*/
  }
</script>

<style>
  .articleAdd .top .ppTop{
    margin-top: 10px;
    display: inline-block;
    border-bottom: 1px solid #ddd;
  }
  .articleAdd .top .ppTop a{
    margin-bottom: -1px;
    background: transparent;
  }
  .articleAdd .top .ppTop .active{
    cursor: default;
    background-color: #fff;
    border: 1px solid #ddd;
    border-bottom-color: transparent;
  }
  .top{
    padding: 10px 20px;
  }
  .top a{
    float: left;
  }
</style>
