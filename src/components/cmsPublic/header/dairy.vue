<template>
<div class="rightCon">
            <div class="them">
                系统首页

            </div>
            <div class="indexCon">
               <div class="date">
                   日期：<input type="text" class="textCon"/> - <input type="text" class="textCon"/>
                   <input type="button" value="搜索" class="txtBtn"/>
                   <input type="button" value="全部" class="txtBtn"/>
                </div>
               <table>
                   <tr>
                       <th>日志ID</th>
                       <th>请求路由</th>
                       <th>详情</th>
                       <th>客户端ID</th>
                       <th>时间</th>
                   </tr>
                   <tr>
                       <td>1012</td>
                       <td>/passport/login</td>
                       <td>登录成功</td>
                       <td>125.82.188.213</td>
                       <td>	2019-03-13 10:17:55</td>
                   </tr>
                   <tr>
                        <td>1012</td>
                        <td>/passport/login</td>
                        <td>登录成功</td>
                        <td>125.82.188.213</td>
                        <td>	2019-03-13 10:17:55</td>
                    </tr>
                
               </table>
               <footer>
                   当前第<span class="nowPage">1</span>页，共<span class="totalPage">2</span>页
                   <a href="" class="next">下一页</a>
                   <a href="" class="end">末页</a>
                   跳转到第<input type="text" class="jumpPage">页
                   <input type="button" value="确定" class="pageBtn"/>
               </footer>
            </div>
        </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
    @import "../../../assets/css/dairy.css";
</style>
