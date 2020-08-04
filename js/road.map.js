var uploadedDataURL = "data/map-beijing.json";

function randomData() {
    return Math.round(Math.random() * 45000);
}

function showProvince() {
    var name = 'bj';
    var myChart = echarts.init(document.getElementById('map'));

    // myChart.showLoading();

    $.get(uploadedDataURL, function (geoJson) {

        // myChart.hideLoading();

        echarts.registerMap(name, geoJson);

        myChart.setOption(option = {
            // backgroundColor: '#044060',
            visualMap: {
                min: 0,
                max: 45000,
                left: 'left',
                top: 'bottom',
                show: false,
                text: ['高', '低'], // 文本，默认为数值文本
                // calculable: true,
                inRange: {
                    color: ['yellow', 'lightskyblue', 'orangered']
                },
                textStyle: {
                    color: '#101010'
                }
            },
            series: [{
                type: 'map',
                mapType: name,
                label: {
                    normal: {
                        show: true
                    },
                    emphasis: {
                        textStyle: {
                            color: '#202020'
                        }
                    }
                },
                itemStyle: {
                    normal: {
                        borderColor: '#389BB7',
                        areaColor: '#202020',
                    },
                    emphasis: {
                        areaColor: '#389BB7',
                        borderWidth: 0
                    }
                },
                animation: false,
                data: [{
                    name: '东城区',
                    value: randomData(),
                    label: {
                        normal: {
                            show: false
                        }
                    }
                }, {
                    name: '西城区',
                    value: randomData(),
                    label: {
                        normal: {
                            show: false
                        }
                    }
                }, {
                    name: '海淀区',
                    value: randomData()
                }, {
                    name: '朝阳区',
                    value: randomData()
                }, {
                    name: '石景山区',
                    value: randomData(),
                }, {
                    name: '大兴区',
                    value: randomData()
                }, {
                    name: '门头沟区',
                    value: randomData(),
                }, {
                    name: '昌平区',
                    value: randomData()
                }, {
                    name: '通州区',
                    value: randomData(),
                }, {
                    name: '房山区',
                    value: randomData()
                }, {
                    name: '丰台区',
                    value: randomData()
                }, {
                    name: '顺义区',
                    value: randomData()
                }, {
                    name: '怀柔区',
                    value: randomData()
                }, {
                    name: '密云区',
                    value: randomData()
                }, {
                    name: '延庆区',
                    value: randomData()
                }, {
                    name: '平谷区',
                    value: randomData()
                }]
                // animationDurationUpdate: 1000,
                // animationEasingUpdate: 'quinticInOut'
            }]
        });
    });
}

showProvince();
