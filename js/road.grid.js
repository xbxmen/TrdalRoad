$.get('data/grid-beijing.json', function (data) {
    let option = {
        tooltip: {
            axisPointer: {
                type: 'cross'
            },
            padding: 10,
            backgroundColor: '#222',
            borderColor: '#777',
            borderWidth: 1,
            formatter: function (obj) {
                var value = obj.value;
                return "<div style='border-bottom: 1px solid rgba(255,255,255,.3); font-size: 18px;padding-bottom: 7px;margin-bottom: 7px'>"
                    + '道路名称：' + value[2]
                    + '</div>'
                    + '横坐标：' + value[0] + '<br>'
                    + '纵坐标：' + value[1] + '<br>';
            }
        },
        title: {
            text: '北京市地图潮汐道路分析',
            subtext: '时间周期：2018.01.01——2019.12.30',
            sublink: '',
            left: 'center',
            top: 16
        },
        xAxis: {
            type: 'value',
            min: 1,
            max: 1783,
            splitLine: {
                lineStyle: {
                    type: 'dashed'
                }
            },
            splitNumber: 25
        },
        yAxis: {
            type: 'value',
            min: 1,
            max: 1856,
            splitLine: {
                lineStyle: {
                    type: 'dashed'
                }
            },
            splitNumber: 25
        },
        grid: {
            top: 90
        },
        series: {
            name: '路链',
            type: 'scatter',
            emphasis: {
                label: {
                    show: true,
                    position: 'right',
                    color: '#111',
                    fontSize: 16,
                }
            },
            symbolSize: 4,
            data: data
        }
    };

    let myChart = echarts.init(document.getElementById('grid'));
    myChart.setOption(option);
});
