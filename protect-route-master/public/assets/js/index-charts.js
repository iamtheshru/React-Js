google.charts.load('current', { 'packages': ['bar'] });
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
	var data = google.visualization.arrayToDataTable([
		['Year', 'Sales', 'Expenses', 'Profit'],
		['2014', 500, 300, 100],
		['2015', 200, 560, 250],
		['2016', 350, 150, 470],
		['2017', 230, 440, 150]
	]);

	var options = {
		chart: {
			title: 'Company Performance',
			// subtitle: 'Sales, Expenses, and Profit: 2014-2017',
		}
	};

	var chart = new google.charts.Bar(document.getElementById('canvas-linechartl'));

	chart.draw(data, google.charts.Bar.convertOptions(options));
}