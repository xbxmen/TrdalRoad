let data = [];
for (let i = 0; i < 20; i++) {
    data[i] = [Math.round(Math.random() * 1856), Math.round(Math.random() * 1783)];
}

// See https://github.com/ecomfe/echarts-stat
let myRegression = ecStat.regression('polynomial', data, 3);

myRegression.points.sort(function (a, b) {
    return a[0] - b[0];
});

option = {
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
    series: [{
        name: 'scatter',
        type: 'scatter',
        emphasis: {
            label: {
                show: true,
                position: 'right',
                color: 'blue',
                fontSize: 16
            }
        },
        data: data
    }, {
        name: 'line',
        type: 'line',
        smooth: true,
        showSymbol: false,
        data: myRegression.points,
        markPoint: {
            itemStyle: {
                color: 'transparent'
            },
            label: {
                show: true,
                position: 'left',
                formatter: myRegression.expression,
                color: '#333',
                fontSize: 14
            },
            data: [{
                coord: myRegression.points[myRegression.points.length - 1]
            }]
        }
    }]
};

let myChart = echarts.init(document.getElementById('grid'));
myChart.setOption(option);
