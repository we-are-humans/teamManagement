<template>
  <div class="container">
    <div class="search">
      <form method="get">
        <div class="row">
          <p>&nbsp;年份：</p>
          <select name="year">
            <option value="2019" selected="selected">2019</option>
            <option value="2018">2018</option>
            <option value="2017">2017</option>
            <option value="2016">2016</option>
            <option value="2015">2015</option>
            <option value="2014">2014</option>
            <option value="2013">2013</option>
            <option value="2012">2012</option>
            <option value="2011">2011</option>
            <option value="2010">2010</option>
          </select>
          <input type="button" value="开始统计" onclick="requestData()">
        </div>
      </form>
    </div>
  </div>
</template>

<script>
    export default {
        name: "cpmContentInput"
    }
</script>

<style scoped>
  .container{
    background: #FFF;
  }
  .search{
    margin: 8px 0px;
    padding: 9px 0px 13px 0px;
    border-bottom: 1px dotted #E2E2E2;
  }
  .row{
    display: flex;
    align-items: center;
    font-size: 14px;
    color: #333;
    line-height: 20px;
  }
  .row select{
    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
  }
  .row input{
    height: 26px;
    padding: 0 7px;
    margin-left: 4px;
    border: 1px solid #2e6da4;
    background: #337ab7;
    color: #FFF;
    border-radius: 3px;
  }
</style>
