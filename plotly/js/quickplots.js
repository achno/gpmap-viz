
src="plotly-latest.min.js"

function make_scatter(data, clabel)
{
	var data1 = [ {
	    x: data.x,
	    y: data.y,
		mode: 'markers',
		marker: {
			//size: 40,
			color: data.color,
			colorscale: 'Portland',
			showscale: true
		  },

    type: 'scatter',

	colorbar:{
		title: clabel,
		titleside: 'right',
		titlefont: {  size: 14, family: 'Arial, sans-serif' },
		}



	    } ];

	return data1;
}


function make_histogram(data, clabel)
{
	var data2 = [ {
	    x: data.x,
	    y: data.y,

    type: 'histogram'

	    } ];

	return data2;
}

/*
function make_histogram(data)
{
	datas = []

	for (i = 0; i < data.y.length; i++)
	{ 
		var data2 = {
			x: data.x,
			y: data.y[i],
			name: data.names[i],
			type: 'bar' 
		}

	datas.push(data2)
	}

	return datas;
}
*/

function make_heatmap(data)
{
	var data3 = [ {
	    x: data.x,
	    y: data.y,
	    z: data.z,
	    type: 'heatmap'
	    } ];
	return data3;
}


function get_labels(data)
{
	return data.labels;
}

function set_layout(labels)
{

	layout = {
	  //title: 'Plot title',
	  xaxis: { title: labels[0], titlefont: {  size: 16, color: 'rgb(107, 107, 107)' }, tickfont: { size: 14, color: 'rgb(107, 107, 107)' },
      gridcolor: 'rgb(255, 255, 255)',gridwidth: 1,zerolinecolor: 'rgb(255, 255, 255)' },
	  yaxis: { title: labels[1], titlefont: {  size: 16, color: 'rgb(107, 107, 107)' }, tickfont: { size: 14, color: 'rgb(107, 107, 107)' },
      gridcolor: 'rgb(255, 255, 255)',gridwidth: 1,zerolinecolor: 'rgb(255, 255, 255)' },

	  legend: {
		x: 0.75,
		y: 1.0,
		bgcolor: 'rgba(255, 255, 255, 0)',
		bordercolor: 'rgba(255, 255, 255, 0)'
	  },
	  barmode: 'group',
	  bargap: 0.15,
	  bargroupgap: 0.1,
   	  paper_bgcolor: 'rgb(243, 243, 243)',
	  plot_bgcolor: 'rgb(243, 243, 243)'
    };

return layout;
}


function loadJSON(file, callback) {   

    var xobj = new XMLHttpRequest();
    xobj.overrideMimeType("application/json");
    xobj.open('GET', file, true); // Replace 'my_data' with the path to your file
    xobj.onreadystatechange = function () {
          if (xobj.readyState == 4 && xobj.status == "200") {
            // Required use of an anonymous callback as .open will NOT return a value but simply returns undefined in asynchronous mode
            callback(xobj.responseText);
          }
    };
    xobj.send(null);  
 }
 

function load(filename){
    
    loadJSON(filename, function(response) {
  
        actual_JSON = JSON.parse(response);
		json_object = JSON.parse(response);
		console.log(actual_JSON);
        return actual_JSON;
    });
 
 console.log(json_object);   
}

