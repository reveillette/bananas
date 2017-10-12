// Part one

	// Click handler
	d3.selectAll('#click-me')
	.on('click', function() {
		if (this.style.backgroundColor) {
			this.style.backgroundColor = '';
		} else {
			this.style.backgroundColor = 'red';
		}
	});

	// Hover handler
	d3.selectAll('.hover-me')
	.on('mouseover', function() {
		this.style.backgroundColor = 'yellow';
	})
	.on('mouseleave', function() {
		this.style.backgroundColor = '';
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
		this.style.fill = "yellow";
	})
	.on('mouseleave', function() {
		this.style.fill = "blue";
	});






