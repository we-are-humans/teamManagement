<template>
  <div class="tab-child" id="tab-cont2"></div>
</template>

<script>
  import echarts from "echarts";
    export default {
      name: "cpmEchartsBing",
      mounted() {
        let myChart03 = echarts.init(document.getElementById('tab-cont2'));
        let option03 = {
          tooltip : {
            show: true,
            trigger: 'item',
            formatter: "{b} : {c} ",
          },
          legend: [
            {
              data: ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月'],
              textStyle:{
                color:'#666666',
                fontSize:12
              },
              icon: "rect",
              itemWidth: 40,
              itemHeight: 13,
            },
            {
              data: ['11月','12月'],
              top: 22,
              textStyle:{
                color:'#666666',
                fontSize:12
              },
              icon: "rect",
              itemWidth: 40,
              itemHeight: 13,
            }
          ],
          grid: {
            left: '0',
            right: '2%',
            top: '5%',
            bottom: '0',
            containLabel: true
          },
          series : [
            {
              type: 'pie',
              radius : '85%',
              center: ['50%', '56%'],
              hoverAnimation:false,
              data:[
                {value:3, name:'1月',itemStyle: {color: '#ff9666'}},
                {value:4, name:'2月',itemStyle: {color: '#d9ff8b'}},
                {value:0, name:'3月',itemStyle: {color: '#af87b9'}},
                {value:0, name:'4月',itemStyle: {color: '#d4b66c'}},
                {value:0, name:'5月',itemStyle: {color: '#d17a7a'}},
                {value:0, name:'6月',itemStyle: {color: '#c69781'}},
                {value:0, name:'7月',itemStyle: {color: '#b9b966'}},
                {value:0, name:'8月',itemStyle: {color: '#8ea8f5'}},
                {value:0, name:'9月',itemStyle: {color: '#66b98f'}},
                {value:0, name:'10月',itemStyle: {color: '#b7e1fc'}},
                {value:0, name:'11月',itemStyle: {color: '#e1e166'}},
                {value:0, name:'12月',itemStyle: {color: '#f56666'}}
              ],
              itemStyle: {
                normal: {
                  label : {
                    show : false
                  },
                  labelLine : {
                    show : false
                  },
                  borderWidth: 1,
                  borderColor: '#df320d',
                },
                emphasis: {
                  shadowBlur: 10,
                  shadowOffsetX: 0,
                  shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
              }
            }
          ]
        };
        myChart03.setOption(option03);
      }
    }
</script>

<style scoped>
  .tab-child{
    width: 800px;
    height: 400px;
  }
</style>
