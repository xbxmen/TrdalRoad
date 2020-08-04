$.get('data/grid-beijing.json', function (data) {
    let option = {
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'cross'
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
                    formatter: function (param) {
                        return param.data[2];
                    }
                }
            },
            data: data
        }
    };

    let myChart = echarts.init(document.getElementById('grid'));
    myChart.setOption(option);
});
