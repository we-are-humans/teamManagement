<template>
  <div class="ManagementSection" >
    <table  v-for="i in data">
      <tr>
        <th colspan="4">
          <a href="">{{i.smtitle}}</a>
        </th>
      </tr>
      <tr v-for="p in i.info">
        <td width="15%">{{p.pa}}</td>
        <td width="35%">{{p.pa1}}</td>
        <td width="15%">{{p.pa2}}</td>
        <td width="35%">{{p.pa3}}</td>
      </tr>
    </table>
  </div>
</template>

<script>
    export default {
        name: "WyqManagementSection",
        props:["data"]
    }
</script>

<style scoped>

  .ManagementSection table{
    width: 100%;
    border-collapse: collapse;
    margin-bottom: 20px;
  }
  .ManagementSection th{
    border: 1px solid #ddd;
    border-bottom: 2px solid #ddd;
    font-weight: 700;
    background: #F2F2F2;
    vertical-align: middle;
    height: 40px;
    color: #707070;
    padding-left: 5px;
    padding-right: 5px;
    background-image: -webkit-linear-gradient(top,#F8F8F8 0,#ECECEC 100%);
  }
  .ManagementSection th a{
    float: left;
    color: #198cb7;
    text-decoration: none;
  }
  .ManagementSection td{
    border: 1px solid #ddd;
    height: 40px;
    font-size: 13px;
    padding-left: 5px;
    padding-right: 5px;
  }
</style>
