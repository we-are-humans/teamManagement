<template>
  <div class="tab-child" id="tab-cont0"></div>
</template>

<script>
  import echarts from "echarts";
    export default {
      name: "cpmEchartsZhu1",
      mounted(){
        let myChart01 = echarts.init(document.getElementById('tab-cont0'));
        let option01 = {
          tooltip: {
            trigger: 'item',
            formatter: "{b} <br/>{a} : {c}"
          },
          grid: {
            left: '0',
            right: '2%',
            top: '5%',
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
                  color: '#e1e1e1',
                }
              }
            }
          ],
          yAxis : {
            show : true,
            axisLine: {
              lineStyle: {
                type: 'solid',
                color: '#e1e1e1'
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
                color: '#e1e1e1',
              }
            }
          },
          series : [
            {
              name: '订单量',
              type:'bar',
              barWidth: '75%',
              itemStyle: {
                normal: {
                  color: function(params) {
                    var colorList = [
                      'rgba(254,132,58,.7)','rgba(155,202,58,.7)','rgba(250,216,58,.7)','rgba(215,160,58,.7)','rgba(96,192,226,.7)','rgba(215,80,75,.7)','rgba(119,229,121,.7)','rgba(193,35,43,.7)','rgba(181,191,58,.7)','rgba(254,132,58,.7)','rgba(132,134,58,.7)','rgba(39,114,220,.7)'
                    ];
                    return colorList[params.dataIndex]
                  },
                }
              },
              data:[3,4]
            }
          ]
        };
        myChart01.setOption(option01);
      }
    }
</script>

<style scoped>
  .tab-child{
    width: 800px;
    height: 400px;
  }
</style>
