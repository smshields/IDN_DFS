let yAxis = [
  [1, 1, 1, 0.75, 0.8, 0.67],
  [1, 1, 1, 0.75, 0.8, 0.83, 0.86],
  [1, 1, 1, 0.75, 0.8, 0.83],
  [1, 1, 1, 0.75, 0.6, 0.5],
  [1, 1, 1, 0.75, 0.6, 0.67, 0.71],
  [1, 1, 1, 0.75, 0.8, 0.83, 0.86, 0.88, 0.89],
  [1, 1, 1, 0.75, 0.8, 0.83, 0.86, 0.75],
  [1, 1, 1, 0.75, 0.8, 0.83, 0.71, 0.63, 0.67],
  [1, 1, 1, 0.75, 0.8, 0.83, 0.71, 0.63],
  [1, 1, 1, 0.75, 0.8, 0.67, 0.71, 0.75, 0.67],
  [1, 1, 1, 0.75, 0.8, 0.67, 0.71, 0.75, 0.78, 0.8],
  [1, 1, 1, 0.75, 0.8, 0.67, 0.71, 0.75, 0.78],
  [1, 1, 1, 0.75, 0.8, 0.67, 0.57, 0.5, 0.56],
  [1, 1, 1, 0.75, 0.8, 0.67, 0.57, 0.5],
  [1, 1, 0.67, 0.5, 0.4],
  [1, 1, 0.67, 0.5, 0.6, 0.67],
  [1, 1, 0.67, 0.75, 0.8, 0.83, 0.86, 0.88],
  [1, 1, 0.67, 0.75, 0.8, 0.83, 0.71],
  [1, 1, 0.67, 0.75, 0.8, 0.67, 0.57, 0.63],
  [1, 1, 0.67, 0.75, 0.8, 0.67, 0.57],
  [1, 1, 0.67, 0.75, 0.6, 0.67, 0.71, 0.63],
  [1, 1, 0.67, 0.75, 0.6, 0.67, 0.71, 0.75, 0.78],
  [1, 1, 0.67, 0.75, 0.6, 0.67, 0.71, 0.75],
  [1, 1, 0.67, 0.75, 0.6, 0.5, 0.43, 0.5],
  [1, 1, 0.67, 0.75, 0.6, 0.5, 0.43],
  [1, 1, 1, 0.75, 0.6],
  [1, 1, 1, 0.75, 0.8, 0.83],
  [1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 0.86],
  [1, 1, 1, 1, 1, 0.83, 0.71, 0.75],
  [1, 1, 1, 1, 1, 0.83, 0.71],
  [1, 1, 1, 1, 0.8, 0.83, 0.86, 0.75],
  [1, 1, 1, 1, 0.8, 0.83, 0.86, 0.88, 0.89],
  [1, 1, 1, 1, 0.8, 0.83, 0.86, 0.88],
  [1, 1, 1, 1, 0.8, 0.67, 0.57, 0.63],
  [1, 1, 1, 1, 0.8, 0.67, 0.57],
  [1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 0.83],
  [1, 1, 1, 1, 0.8, 0.67, 0.71],
  [1, 1, 1, 1, 0.8, 0.67],
  [1, 1, 1, 0.75, 0.8, 0.83, 0.71],
  [1, 1, 1, 0.75, 0.8, 0.83, 0.86, 0.88],
  [1, 1, 1, 0.75, 0.8, 0.83, 0.86],
  [1, 1, 1, 0.75, 0.6, 0.5, 0.57],
  [1, 1, 1, 0.75, 0.6, 0.5],
  [1, 1, 1, 0.75, 0.6],
  [1, 1, 1, 0.75, 0.8, 0.83],
  [1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 0.86],
  [1, 1, 1, 1, 1, 0.83, 0.71, 0.75],
  [1, 1, 1, 1, 1, 0.83, 0.71],
  [1, 1, 1, 1, 0.8, 0.83, 0.86, 0.75],
  [1, 1, 1, 1, 0.8, 0.83, 0.86, 0.88, 0.89],
  [1, 1, 1, 1, 0.8, 0.83, 0.86, 0.88],
  [1, 1, 1, 1, 0.8, 0.67, 0.57, 0.63],
  [1, 1, 1, 1, 0.8, 0.67, 0.57],
  [1, 1, 0.67, 0.75, 0.8, 0.67],
  [1, 1, 0.67, 0.75, 0.8, 0.83, 0.86],
  [1, 1, 0.67, 0.75, 0.8, 0.83],
  [1, 1, 0.67, 0.5, 0.4, 0.5],
  [1, 1, 0.67, 0.5, 0.4],
  [1, 1, 1, 1, 0.8, 0.83],
  [1, 1, 1, 1, 0.8],
  [1, 1, 1, 1, 1, 1, 0.86],
  [1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 0.8, 0.67, 0.71],
  [1, 1, 1, 1, 0.8, 0.67],
  [1, 1, 1, 0.75, 0.8, 0.67, 0.71],
  [1, 1, 1, 0.75, 0.8, 0.67],
  [1, 1, 1, 0.75, 0.8, 0.83, 0.86, 0.75],
  [1, 1, 1, 0.75, 0.8, 0.83, 0.86, 0.88, 0.89],
  [1, 1, 1, 0.75, 0.8, 0.83, 0.86, 0.88],
  [1, 1, 1, 0.75, 0.8, 0.67, 0.57, 0.63],
  [1, 1, 1, 0.75, 0.8, 0.67, 0.57],
  [1, 1, 1, 1, 0.8, 0.83],
  [1, 1, 1, 1, 0.8]
];

const skipped = (ctx, value) => ctx.p0.skip || ctx.p1.skip ? value : undefined;
const down = (ctx, value) => ctx.p0.parsed.y > ctx.p1.parsed.y ? value : undefined;

lineChartData = {};
lineChartData.labels = ["Start", "Edge 1", "Edge 2", "Edge 3", "Edge 4", "Edge 5", "Edge 6", "Edge 7", "Edge 8" , "Edge 9"];
lineChartData.datasets = [];


for(let i = 0; i < yAxis.length; i++){
	y = [];
  lineChartData.datasets.push({});
  dataset = lineChartData.datasets[i];
  dataset.borderColor = 'rgb(75, 192, 192, .15)';
  dataset.segment = {
  	borderColor: ctx => skipped(ctx, 'rgb(0,0,0,0.2)') || down(ctx, 'rgb(192,75,75,.15)'),
  	borderDash: ctx => skipped(ctx, [6, 6]),
  },
  dataset.borderWidth = 20;
  dataset.spanGaps = true;
  dataset.data = yAxis[i];
  dataset.labels = "hide";
  dataset.tension = .1;
  dataset.borderJoinStyle = "bevel";
  
  for(let x = 0; x < dataset.data.length; x++){
  	y.push(yAxis[i][x]);
  }
  
  lineChartData.datasets[i].data = y;
}

const genericOptions = {
  fill: false,
  interaction: {
    intersect: false
  },
  radius: 0,
  plugins: {
  	legend: {
    	display: false
    },
    title: {
    	display: true,
      text: ["Ratio of Valid Choices Over All Unique Paths", "in Unstructured Multi-Shot Tree Generation"],
      padding: {
      	bottom: 30
      },
      font: {
            family: 'Arial',
            size: 20,
            weight: 'bold',
        }
    }
  },
  scales: {
  	x: {
    	title: {
    		text: "Node Traversal",
        display: true,
        align: "center",
        font: {
            family: 'Arial',
            size: 16,
            weight: 'bold',
        }
    	}
    },
    y: {
        title: {
    			text: "Valid Choice Ratio",
        display: true,
        align: "center",
        font: {
            family: 'Arial',
            size: 16,
            weight: 'bold',
        }
    	}
    }
  }
};

const config = {
	type: "line",
  data: lineChartData,
  options: genericOptions
};


ctx = document.getElementById("myChart");
new Chart(ctx, config);

console.log("done.")