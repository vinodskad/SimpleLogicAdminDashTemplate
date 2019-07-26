window.onload = function() { 
var chart = new CanvasJS.Chart("bar-chart", {
	animationEnabled: true,
	theme: "light2", // "light1", "light2", "dark1", "dark2"
	title:false,
	axisY:false,
	data: [{        
		type: "column",  
		showInLegend: true, 
		legendMarkerColor: "grey",
		//legendText: "MMbbl = one million barrels",
		dataPoints: [      
			{ y: 50, label: "03 March", color:"#2f9dd0" },
			{ y: 25,  label: "04 March", color:"#2f9dd0" },
			{ y: 200,  label: "05 March", color:"#2f9dd0" },
            { y: 300,  label: "06 March" , color:"#2f9dd0" },
            { y: 250,  label: "07 March" , color:"#2f9dd0" },
            { y: 250,  label: "08 March" , color:"#2f9dd0" },
            { y: 150,  label: "09 March" , color:"#2f9dd0" }
		]
	}]
});
chart.render();
}