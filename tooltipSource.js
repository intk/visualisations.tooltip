function drawTooltip(data) {

	// Declare variable for tooltip text
	let tooltipText = "";

	// Get tooltip text dimension
	let rowData = data.tables.DEFAULT;
	rowData.forEach(function(row, i) {

    	// 'tooltipText' comes from the id defined in tooltip.json
		tooltipText = JSON.stringify(row["tooltipText"][0]);

	});


	// create a button element where the tooltip will be displayed
	var buttonElement = document.createElement('button');
	buttonElement.id = 'tooltipButton';
	buttonElement.innerText = 'Hover this';
	document.body.appendChild(buttonElement);

	tippy('#tooltipButton', {
	        content: tooltipText,
	        allowHTML: true, // parse `content` strings as HTML
	        interactive: true, // Tooltip can be hovered over and clicked inside without hiding
	        interactiveBorder: 50, // Determines the size of the invisible border around the tippy that will prevent it from hiding if the cursor left it.
	});

}

// subscribe to data and style changes
dscc.subscribeToData(drawTooltip, { transform: dscc.objectTransform });