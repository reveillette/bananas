// Added additional comment here

// Part one


	var hovers = d3.selectAll('.hover-me');

	var filteredHovers = d3.select('#part-one').selectAll('.hover-me');

	// Click handler
	d3.selectAll('#click-me')
	.on('click', function() {

		if (this.style.transform) {
			this.style.transform = '';
		} else {
			this.style.transform = 'translate(300px, 200px)';
		}
	});

	// Hover handler
	d3.selectAll('.hover-me')
		.on('mouseover', function() {
			this.style.color = 'darkorchid';
		})
		.on('mouseleave', function() {
			this.style.color = '';
	});	


// Part three

	// Click handler for SVG circle
	d3.select('#part-three')
	.selectAll('circle')
	.on('click', function() {
		if (this.style.fill == 'red') {
			this.style.fill = 'blue';
		} else {
			this.style.fill = 'red';
		}
	});

	// Hover handler for SVG rectangle
	d3.select('#part-three')
	.selectAll('rect')
	.on('mouseover', function() {
		this.style.stroke = "green";
	})
	.on('mouseleave', function() {
		this.style.stroke = "purple";
	});


// Illustrator

	d3.selectAll('#blobby')
		.on('mouseenter', function() {
			this.style.fill = "magenta";
		})
		.on('mouseleave', function() {
			this.style.fill = "red";
		});






