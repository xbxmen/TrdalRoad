var chart = echarts.init(document.getElementById('china-map'));

var convertData = function (data, geoCoordMap) {
    var res = [];
    for (var i = 0; i < data.length; i++) {
        var geoCoord = geoCoordMap[data[i].name];
        if (geoCoord) {
            res.push({
                name: data[i].name,
                value: geoCoord.concat(data[i].value)
            });
        }
    }
    return res;
};

function showChinaMap(city_list, total_city, total_project, geoCoordMap) {
    var option = {
        title: {
            text: '贝壳网开站统计\n(开站:999 总数:9999)',
            subtext: '数据来源于贝壳网',
            sublink: 'https://www.ke.com',
            x:'center',
            textStyle : {
                color : '#3072f6'
            }
        },
        tooltip: {
            trigger: 'item',
            formatter: function (params) {
                return params.name + ' : ' + params.value[2];
            }
        },
        legend: {
            orient: 'vertical',
            y: 'top',
            x:'right',
            data:['楼盘数量', 'Top 10']
        },
        visualMap: {
            min: 0,
            max: 200,
            left: 'left',
            top: 'center',
            calculable: true,
            inRange: {
                color: ['#3072f6']
            }
        },
        geo: {
            map: 'china',
            label: {
                emphasis: {
                    show: false
                }
            },
            itemStyle: {
                normal: {
                    areaColor: '#96CDCD',
                    borderColor: '#111'
                },
                emphasis: {
                    areaColor: '#BBFFFF'
                }
            }
        },
        toolbox: {
            show: true,
            orient: 'vertical',
            left: 'right',
            top: 'center',
            feature: {
                dataView: {readOnly: false},
                restore: {},
                saveAsImage: {}
            }
        },
        series: [
            {
                name: '楼盘数量',
                type: 'scatter',
                coordinateSystem: 'geo',
                data: convertData(city_list, geoCoordMap),
                symbolSize: function (val) {
                    var value = val[2];
                    var symbol_size = Math.ceil(val[2] / 10);
                    if (value < 10) {
                        symbol_size = 3;
                    }

                    if (value > 100 && value <= 300) {
                        symbol_size = Math.ceil(val[2] / 15);
                    }

                    if (value > 300 && value <= 500) {
                        symbol_size = Math.ceil(val[2] / 25);
                    }

                    if (value > 500 && value <= 1000) {
                        symbol_size = Math.ceil(val[2] / 30);
                    }

                    if (value > 1000) {
                        symbol_size = Math.ceil(val[2] / 45);
                    }

                    return symbol_size;
                },
                label: {
                    normal: {
                        formatter: '{b}',
                        position: 'right',
                        show: false
                    },
                    emphasis: {
                        show: true
                    }
                },
                itemStyle: {
                    normal: {
                        color: '#3072f6'
                    },
                    emphasis: {
                        borderColor: '#fff',
                        borderWidth: 1
                    }
                }
            },
            {
                name: 'Top 10',
                type: 'effectScatter',
                coordinateSystem: 'geo',
                data: convertData(city_list.sort(function (a, b) {
                    return b.value - a.value;
                }).slice(0, 10), geoCoordMap),
                symbolSize: function (val) {
                    return val[2] / 40;
                },
                showEffectOn: 'render',
                rippleEffect: {
                    brushType: 'stroke'
                },
                hoverAnimation: true,
                label: {
                    normal: {
                        formatter: '{b}',
                        position: 'right',
                        show: true
                    }
                },
                itemStyle: {
                    normal: {
                        color: '#3072f6',
                        shadowBlur: 20,
                        shadowColor: '#3072f6'
                    }
                },
                zlevel: 1
            }
        ]
    };

    var max_project_number = 0;
    for (var key in city_list) {
        if (city_list[key].value > max_project_number) {
            max_project_number = city_list[key].value;
        }
    }
    option.title.text = '贝壳网开站统计\n(开站:' + total_city + ' 总数:' + total_project + ')';
    option.visualMap.max = max_project_number;
    chart.setOption(option);
}

$.ajax({
    type: 'get',
    url:  '/lupan/projectCount',
    data: '',
    dataType: 'json',
    success: function (data) {
        var city_list     = data['data']['list'];
        var total_city    = data['data']['total_city'];
        var total_project = data['data']['total_project'];
        var geoCoordMap   = data['data']['geo_map'];

        showChinaMap(city_list, total_city, total_project, geoCoordMap);
    },
    error: function (data) {
        console.log('error')
    }
});