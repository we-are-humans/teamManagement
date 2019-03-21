function addSave(){
  var titleStyle=0;
  var tagArr=[];
  var hasclassArr=[];
  for(var i=0;i<document.myAddform.titleStyle.length;i++){
    if(document.myAddform.titleStyle[i].checked){
      tagArr.push(document.myAddform.titleStyle[i].value);
    }
  }
  for(var i=0;i<document.myAddform.hasClass.length;i++){
    if(document.myAddform.hasClass[i].checked){
      tagArr.push(document.myAddform.hasClass[i].value);
    }
  }
  // var formData = new FormData(myAddform)
  var str = "articleTitle="+document.myAddform.articleTitle.value+
    "&titleStyle="+tagArr+
    "&hasClass="+hasclassArr+
    "&fromAttr="+document.myAddform.fromAttr.value+
    "&vip="+document.myAddform.vip.value+
    "&message="+document.myAddform.message.value;
  alert(str)

/*  var xhr = new XMLHttpRequest();
  var url ="http://localhost:3000/users";// 添加图书
  /!*提交    修改
  * 1、地址    2、传递的参数多了一个ID   *!/
  // if(btn.value === "修改"){
  //   url ="http://127.0.0.1/updata";
  //   str+="&id="+document.myAddform.id.value;
  // }
  xhr.open("get",url+str);
  xhr.send();
  xhr.onload=function () {
    if(xhr.status === 200){
      document.myAddform.reset();// 重置
      // document.myForm.bookName.value= "";
      // document.myForm.bookPrice.value= "";
      // document.myForm.bookAuthor.value= "";
      // document.myForm.bookType.value= "1";
      // document.myForm.isTop.value= "1";
      // document.myForm.id.value="";
      //
      // // 多选
      // for(var i=0;i<document.myForm.bookTag.length;i++){
      //     document.myForm.bookTag[i].checked =false;
      // }
      // btn.value ="提交";
      // console.log(str)
    }
  }
*/
}

export {
  addSave
}
