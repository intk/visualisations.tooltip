function drawTooltip(data) {

  // Declare variable for tooltip text
  let tooltipText = data.style.content.value || "";

  // Create object where the text will be displayed
	document.body.innerHTML = "";
	var textElement = document.createElement('div');
	textElement.id = 'tooltipText';
	textElement.innerText = tooltipText;

  // Get font colour from configuration
  const textColor =  data.style.fontColour.value
  ? data.style.fontColour.value.color
  : data.style.fontColour.defaultValue;

  // Set font style properties from configuration
  textElement.style.color = textColor;
  textElement.style.fontSize = data.style.fontSize.value+"px";
  textElement.style.fontFamily = data.style.fontFamily.value;
	document.body.appendChild(textElement);

}

// subscribe to data and style changes
dscc.subscribeToData(drawTooltip, { transform: dscc.objectTransform });