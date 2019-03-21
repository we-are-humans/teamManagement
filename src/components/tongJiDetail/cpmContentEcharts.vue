<template>
  <div class="echartses">
    <ul id="myTab" class="nav nav-tabs">
      <li @click="isshow(child1)" :class="{active:child1===echa}">
        <a href="#">
          柱形图
        </a>
      </li>
      <li @click="isshow(child2)" :class="{active:child2===echa}">
        <a href="#">
          折线图
        </a>
      </li>
      <li @click="isshow(child3)" :class="{active:child3===echa}">
        <a href="#">
          饼形图
        </a>
      </li>
    </ul>
    <div class="mytab">
      <div class="tab-content" :is="echa">
        <cpm-echarts-zhu1></cpm-echarts-zhu1>
        <cpm-echarts-zhe1></cpm-echarts-zhe1>
        <cpm-echarts-bing1></cpm-echarts-bing1>
      </div>
    </div>
  </div>
</template>

<script>
    import CpmEchartsZhe1 from "./cpmEchartsZhe1";
    import CpmEchartsZhu1 from "./cpmEchartsZhu1";
    import CpmEchartsBing1 from "./cpmEchartsBing1";
    export default {
        name: "cpmContentEcharts",
      components: {CpmEchartsBing1, CpmEchartsZhu1, CpmEchartsZhe1},
      data(){
        return{
          child1: "cpmEchartsZhu1",
          child2: "cpmEchartsZhe1",
          child3: "cpmEchartsBing1",
          echa: "cpmEchartsZhu1"
        }
      },
      methods: {
        isshow(show){
          this.echa = show;
        }
      }
    }
</script>

<style scoped>
  .echartses{
    padding: 0 15px;
  }
  .nav{
    border-bottom: 1px solid #ddd;
    display: flex;
  }
  .nav li{
    margin-bottom: -1px;
  }
  .nav li a{
    font-size: 16px;
    color: #646464;
    line-height: 1.43;
    margin-right: 2px;
    border: 1px solid transparent;
    border-radius: 4px 4px 0 0;
    position: relative;
    padding: 10px 15px;
  }
  .nav .active a{
    color: #555;
    cursor: default;
    background-color: #fff;
    border: 1px solid #ddd;
    border-bottom-color: transparent;
  }
  .mytab{
    margin-top: 20px;
    margin-bottom: 245px;
  }
  .tab-content{
    width: 800px;
    height: 400px;
    margin: 0 auto;
  }
  .tab-child{
    width: 800px;
    height: 400px;
  }

</style>
