window.onload = function() { 
    $("#Pie-chart").CanvasJSChart({ 
        title: { 
            //text: "Worldwide Smartphone sales by brand - 2012",
            fontSize: 24
        }, 
        axisY: { 
            title: "Products in %" 
        }, 
        legend :{ 
            verticalAlign: "center", 
            horizontalAlign: "right" 
        }, 
        data: [ 
        { 
            type: "pie", 
            showInLegend: true, 
            toolTipContent: "{label} <br/> {y} %", 
            indexLabel: "{y} %", 
            dataPoints: [ 
                { label: "Not Assigned",  y: 13, legendText: "Not Assigned", color:"#b0d7f8"}, 
                { label: "General",    y: 1, legendText: "General", color:"#ff914c" }, 
                { label: "Software",   y: 2,  legendText: "Software", color:"#8dbb01" }, 
                { label: "Network",       y: 3,  legendText: "Network" ,color:"#f6bd0e"}
            ] 
        } 
        ] 
    }); 

	var chart = new CanvasJS.Chart("line-chart", {
	title:false,
	axisY:[{
		title: "Order",
		lineColor: "#C24642",
		tickColor: "#C24642",
		labelFontColor: "#C24642",
		titleFontColor: "#C24642",
		suffix: "k"
	},
	{
		title: "Footfall",
		lineColor: "#369EAD",
		tickColor: "#369EAD",
		labelFontColor: "#369EAD",
		titleFontColor: "#369EAD",
		suffix: "k"
	}],
	
	toolTip: {
		shared: true
	},
	legend: {
		cursor: "pointer",
		itemclick: toggleDataSeries
	},
	data: [{
		type: "line",
		name: "Footfall",
		color: "#369EAD",
		showInLegend: true,
		axisYIndex: 1,
		dataPoints: [
			{ x: new Date(2017, 00, 7), y: 85.4 }, 
			{ x: new Date(2017, 00, 14), y: 92.7 },
			{ x: new Date(2017, 00, 21), y: 64.9 },
			{ x: new Date(2017, 00, 28), y: 58.0 },
			{ x: new Date(2017, 01, 4), y: 63.4 },
			{ x: new Date(2017, 01, 11), y: 69.9 },
			{ x: new Date(2017, 01, 18), y: 88.9 },
			{ x: new Date(2017, 01, 25), y: 66.3 },
			{ x: new Date(2017, 02, 4), y: 82.7 },
			{ x: new Date(2017, 02, 11), y: 60.2 },
			{ x: new Date(2017, 02, 18), y: 87.3 },
			{ x: new Date(2017, 02, 25), y: 98.5 }
		]
	},
	{
		type: "line",
		name: "Order",
		color: "#C24642",
		axisYIndex: 0,
		showInLegend: true,
		dataPoints: [
			{ x: new Date(2017, 00, 7), y: 32.3 }, 
			{ x: new Date(2017, 00, 14), y: 33.9 },
			{ x: new Date(2017, 00, 21), y: 26.0 },
			{ x: new Date(2017, 00, 28), y: 15.8 },
			{ x: new Date(2017, 01, 4), y: 18.6 },
			{ x: new Date(2017, 01, 11), y: 34.6 },
			{ x: new Date(2017, 01, 18), y: 37.7 },
			{ x: new Date(2017, 01, 25), y: 24.7 },
			{ x: new Date(2017, 02, 4), y: 35.9 },
			{ x: new Date(2017, 02, 11), y: 12.8 },
			{ x: new Date(2017, 02, 18), y: 38.1 },
			{ x: new Date(2017, 02, 25), y: 42.4 }
		]
	},
	{
		type: "line",
		name: "Revenue",
		color: "#7F6084",
		axisYType: "secondary",
		showInLegend: true,
		dataPoints: [
			{ x: new Date(2017, 00, 7), y: 42.5 }, 
			{ x: new Date(2017, 00, 14), y: 44.3 },
			{ x: new Date(2017, 00, 21), y: 28.7 },
			{ x: new Date(2017, 00, 28), y: 22.5 },
			{ x: new Date(2017, 01, 4), y: 25.6 },
			{ x: new Date(2017, 01, 11), y: 45.7 },
			{ x: new Date(2017, 01, 18), y: 54.6 },
			{ x: new Date(2017, 01, 25), y: 32.0 },
			{ x: new Date(2017, 02, 4), y: 43.9 },
			{ x: new Date(2017, 02, 11), y: 26.4 },
			{ x: new Date(2017, 02, 18), y: 40.3 },
			{ x: new Date(2017, 02, 25), y: 54.2 }
		]
	}]
});
chart.render();

function toggleDataSeries(e) {
	if (typeof (e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
		e.dataSeries.visible = false;
	} else {
		e.dataSeries.visible = true;
	}
	e.chart.render();
}
var chart = new CanvasJS.Chart("bar-chart", {
	animationEnabled: true,
	theme: "light2", // "light1", "light2", "dark1", "dark2"
	title:false,
	axisY: {
		title: "Reserves(MMbbl)"
	},
	data: [{        
		type: "column",  
		showInLegend: true, 
		legendMarkerColor: "grey",
		legendText: "MMbbl = one million barrels",
		dataPoints: [      
			{ y: 4, label: "Not Assigned", color:"#2f9dd0" },
			{ y: 5,  label: "Service Office", color:"#2f9dd0" },
			{ y: 3,  label: "Kimberly Mit", color:"#2f9dd0" },
			{ y: 2,  label: "Iran" , color:"#2f9dd0" }
		]
	}]
});
chart.render();
$(function () {

    $('.speedChart').highcharts({

        chart: {
            type: 'gauge'
        },

        title:false,

        pane: {
            startAngle: -90,
            endAngle: 90, 
            background: null
        },

        // the value axis
        yAxis: {
            min: 0,
            max: 200,

            minorTickInterval: 'auto',
            minorTickWidth: 1,
            minorTickLength: 10,
            minorTickPosition: 'inside',
            minorTickColor: '#666',

            tickPixelInterval: 30,
            tickWidth: 2,
            tickPosition: 'inside',
            tickLength: 10,
            tickColor: '#666',
            labels: {
                step: 2,
                rotation: 'auto'
            },
            title: {
                text: 'km/h'
            },
            plotBands: [{
                from: 0,
                to: 120,
                color: '#55BF3B' // green
            }, {
                from: 120,
                to: 160,
                color: '#DDDF0D' // yellow
            }, {
                from: 160,
                to: 200,
                color: '#DF5353' // red
            }, {
            	from: 100,
                to: 140,
                color: '#6677ff',
                innerRadius: '100%',
                outerRadius: '110%'
            }]
        },

        series: [{
            name: 'Speed',
            data: [80],
            tooltip: {
                valueSuffix: ' km/h'
            }
        }]

    },
    // Add some life
    function (chart) {
        if (!chart.renderer.forExport) {
            setInterval(function () {
                var point = chart.series[0].points[0],
                    newVal,
                    inc = Math.round((Math.random() - 0.5) * 20);

                newVal = point.y + inc;
                if (newVal < 0 || newVal > 200) {
                    newVal = point.y - inc;
                }

                point.update(newVal);

            }, 3000);
        }
    });
});
$(function () {

    $('.speedChart1').highcharts({

        chart: {
            type: 'gauge'
        },

        title:false,

        pane: {
            startAngle: -90,
            endAngle: 90, 
            background: null
        },

        // the value axis
        yAxis: {
            min: 0,
            max: 200,

            minorTickInterval: 'auto',
            minorTickWidth: 1,
            minorTickLength: 10,
            minorTickPosition: 'inside',
            minorTickColor: '#666',

            tickPixelInterval: 30,
            tickWidth: 2,
            tickPosition: 'inside',
            tickLength: 10,
            tickColor: '#666',
            labels: {
                step: 2,
                rotation: 'auto'
            },
            title: {
                text: 'km/h'
            },
            plotBands: [{
                from: 0,
                to: 120,
                color: '#55BF3B' // green
            }, {
                from: 120,
                to: 160,
                color: '#DDDF0D' // yellow
            }, {
                from: 160,
                to: 200,
                color: '#DF5353' // red
            }, {
            	from: 100,
                to: 140,
                color: '#6677ff',
                innerRadius: '100%',
                outerRadius: '110%'
            }]
        },

        series: [{
            name: 'Speed',
            data: [80],
            tooltip: {
                valueSuffix: ' km/h'
            }
        }]

    },
    // Add some life
    function (chart) {
        if (!chart.renderer.forExport) {
            setInterval(function () {
                var point = chart.series[0].points[0],
                    newVal,
                    inc = Math.round((Math.random() - 0.5) * 20);

                newVal = point.y + inc;
                if (newVal < 0 || newVal > 200) {
                    newVal = point.y - inc;
                }

                point.update(newVal);

            }, 3000);
        }
    });
});
$(function () {

    $('.speedChart2').highcharts({

        chart: {
            type: 'gauge'
        },

        title:false,

        pane: {
            startAngle: -90,
            endAngle: 90, 
            background: null
        },

        // the value axis
        yAxis: {
            min: 0,
            max: 200,

            minorTickInterval: 'auto',
            minorTickWidth: 1,
            minorTickLength: 10,
            minorTickPosition: 'inside',
            minorTickColor: '#666',

            tickPixelInterval: 30,
            tickWidth: 2,
            tickPosition: 'inside',
            tickLength: 10,
            tickColor: '#666',
            labels: {
                step: 2,
                rotation: 'auto'
            },
            title: {
                text: 'km/h'
            },
            plotBands: [{
                from: 0,
                to: 120,
                color: '#55BF3B' // green
            }, {
                from: 120,
                to: 160,
                color: '#DDDF0D' // yellow
            }, {
                from: 160,
                to: 200,
                color: '#DF5353' // red
            }, {
            	from: 100,
                to: 140,
                color: '#6677ff',
                innerRadius: '100%',
                outerRadius: '110%'
            }]
        },

        series: [{
            name: 'Speed',
            data: [80],
            tooltip: {
                valueSuffix: ' km/h'
            }
        }]

    },
    // Add some life
    function (chart) {
        if (!chart.renderer.forExport) {
            setInterval(function () {
                var point = chart.series[0].points[0],
                    newVal,
                    inc = Math.round((Math.random() - 0.5) * 20);

                newVal = point.y + inc;
                if (newVal < 0 || newVal > 200) {
                    newVal = point.y - inc;
                }

                point.update(newVal);

            }, 3000);
        }
    });
});
}