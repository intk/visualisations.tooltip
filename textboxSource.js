function drawTooltip(data) {

	document.body.innerHTML = "";
	var textElement = document.createElement('div');
	textElement.id = 'tooltipText';
	textElement.innerText = 'Test';
	document.body.appendChild(textElement);

}

// subscribe to data and style changes
dscc.subscribeToData(drawTooltip, { transform: dscc.objectTransform });