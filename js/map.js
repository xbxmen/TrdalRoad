var uploadedDataURL = "data/data-1499156198404-H1AJkAOEZ.json";

//function randomData() {
//    return Math.round(Math.random() * 10000);
//}

function showProvince() {
    var name = 'bj';
    var myChart = echarts.init(document.getElementById('map'));

    // myChart.showLoading();

    $.get(uploadedDataURL, function (geoJson) {

        // myChart.hideLoading();

        echarts.registerMap(name, geoJson);

        myChart.setOption(option = {
            // backgroundColor: '#044060',
            title: {
                text: "北京市地图",
                subtext: "时间周期：2017.01.01——2019.12.30",
                left: 'center',
                textStyle: {
                    color: '#101010'
                }
            },
            visualMap: {
                min: 0,
                max: 45000,
                left: 'left',
                top: 'bottom',
                text: ['高', '低'], // 文本，默认为数值文本
                calculable: true,
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
                    value: 18163,
                    label: {
                        normal: {
                            show: false
                        }
                    }
                }, {
                    name: '西城区',
                    value: 22036,
                    label: {
                        normal: {
                            show: false
                        }
                    }
                }, {
                    name: '海淀区',
                    value: 39825
                }, {
                    name: '朝阳区',
                    value: 48405
                }, {
                    name: '石景山区',
                    value: 15212,
                }, {
                    name: '大兴区',
                    value: 26681
                }, {
                    name: '门头沟区',
                    value: 11161,
                }, {
                    name: '昌平区',
                    value: 20687
                }, {
                    name: '通州区',
                    value: 51488,
                }, {
                    name: '房山区',
                    value: 23053
                }, {
                    name: '丰台区',
                    value: 26504
                }, {
                    name: '顺义区',
                    value: 17247
                }, {
                    name: '怀柔区',
                    value: 21812
                }, {
                    name: '密云区',
                    value: 18589
                }, {
                    name: '延庆区',
                    value: 22211
                }, {
                    name: '平谷区',
                    value: 16729
                }]
                // animationDurationUpdate: 1000,
                // animationEasingUpdate: 'quinticInOut'
            }]
        });
    });
}
showProvince();
