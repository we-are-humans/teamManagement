<template>
  <div class="tab-child" id="tab-cont1"></div>
</template>

<script>
  import echarts from "echarts";
    export default {
        name: "cpmEchartsZhe1",
      mounted(){
          let that = this;
          let myChart02 = echarts.init(document.getElementById('tab-cont1'));
          let option02 = {
            legend: {
              icon: "rect",
              data:['订单量']
            },
            tooltip: {
              trigger: 'item',
              formatter: "{b} <br/>{a} : {c}"
            },
            grid: {
              left: '0',
              right: '2%',
              top: '8%',
              bottom: '0',
              containLabel: true
            },
            xAxis : [
              {
                type : 'category',
                data : ['1月', '2月', '3月', '4月', '5月', '6月', '7月','8月','9月','10月','11月','12月'],
                axisTick: {
                  alignWithLabel: true
                },
                boundaryGap: false,
                show : true,
                axisLine: {
                  lineStyle: {
                    type: 'solid',
                    color: '#ababab'
                  }
                },
                axisLabel: {
                  textStyle: {
                    color: '#666666',
                  }
                },
                splitLine: {
                  show: true,
                  lineStyle:{
                    color: '#eaeaea',
                  }
                }
              }
            ],
            yAxis : {
              show : true,
              axisLine: {
                lineStyle: {
                  type: 'solid',
                  color: '#eaeaea'
                }
              },
              axisLabel: {
                textStyle: {
                  color: '#666666',
                }
              },
              splitLine: {
                show: true,
                lineStyle:{
                  color: '#eaeaea',
                }
              }
            },
            series: [{
              name: '订单量',
              type: 'line',
              symbolSize:7,
              symbol:'circle',
              smooth: true,
              itemStyle: {
                width: '1',
                normal: {
                  color: '#ff9666',
                }
              },
              data:[3,4,0,0,0,0,0,0,0,0,0,0],

            }]
          };
          myChart02.setOption(option02);
      }
    }
</script>

<style scoped>
  .tab-child{
    width: 800px;
    height: 400px;
  }
</style>
