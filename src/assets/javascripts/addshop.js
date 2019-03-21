
var btn = document.querySelector("#btn");
var addfrom = document.querySelector("#addfrom");

// var typeBth = document.querySelectorAll("#find input[type=button]");
var bookType=0;
// getBook();

// for(let i=0;i<typeBth.length;i++){
//     typeBth[i].onclick=function () {
//         bookType = i;
//         getBook();
//     }
// }
// typeBth[bookType].style.background = "green";

    btn.onclick=function () {
      var nameStyle=[];
      for(var i=0;i<addfrom.font.length;i++){
        if(addfrom.font[i].checked){
          tagArr.push(addfrom.font[i].value);
        }
      }
      var dazhe=[];
      for(var i=0;i<addfrom.hots.length;i++){
        if(addfrom.hots[i].checked){
          tagArr.push(addfrom.hots[i].value);
        }
      }
      var str = "shopname="+addfrom.shopname.value+
        "&font="+nameStyle+
        "&fenlei="+addfrom.fenlei.value+
        "&brand="+addfrom.brand.value+
        "&shoppice="+addfrom.shoppice.value+
        "&shopnum="+addfrom.shopnum.value+
        "&shophao="+addfrom.shophao.value+
        "&dazhe="+dazhe+
        "&jifen="+addfrom.jifen.value+
        "&chpice="+addfrom.chpice.value+
        "&yuanpice="+addfrom.yuanpice.value+
        "&shopjifen="+addfrom.shopjifen.value+
        "&zhong="+addfrom.zhong.value+
        "&peixu="+addfrom.peixu.value+
        "&aa="+addfrom.aa.value+
        "&bb="+addfrom.bb.value+
        "&peixu="+addfrom.peixu.value+
        "&dazhe="+dazhe;
      var xhr = new XMLHttpRequest();

      var url ="http://127.0.0.1/addBook";// 添加图书
      /*提交    修改
      * 1、地址    2、传递的参数多了一个ID   */
      if(btn.value === "修改"){
        url ="http://127.0.0.1/upBook";
        str+="&id="+addfrom.id.value;
      }

      xhr.open("post",url);
      xhr.send(str);
      xhr.onload=function () {
        if(xhr.status === 200){
          addfrom.reset();// 重置
          // document.addfrom.bookName.value= "";
          // document.addfrom.bookPrice.value= "";
          // document.addfrom.bookAuthor.value= "";
          // document.addfrom.bookType.value= "1";
          // document.addfrom.isTop.value= "1";
          // document.addfrom.id.value="";
          // // 多选
          // for(var i=0;i<document.addfrom.bookTag.length;i++){
          //     document.addfrom.bookTag[i].checked =false;
          // }
          btn.value ="提交";
          getBook();
        }
      }
    }
// 添加
function  getBook() {
  var xhr = new XMLHttpRequest();
  xhr.open("get","http://127.0.0.1/getBook?bookType="+bookType+"&keyword=");
  xhr.send();
  xhr.onload=function () {
    if(xhr.status === 200){
      var obj = JSON.parse(xhr.responseText);
      console.log(xhr.responseText)
      document.querySelector("#wrap").innerHTML = baidu.template("tp",obj);
    }
  }
}
