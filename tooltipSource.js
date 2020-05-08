function drawTooltip(data) {

  // Declare variable for tooltip text
  let tooltipText = data.style.tooltipText.value || "";

  // Replace link in text with inline hyperlink
  tooltipText = tooltipText.replace(/\[(.*)\]\((https?:\/\/[^\s]+)\)|(https?:\/\/[^\s]+)/g, '<a href="$2" target="_blank">$1</a>');

	// create a button element where the tooltip will be displayed
  document.body.innerHTML = "";
	var buttonElement = document.createElement('button');
	buttonElement.id = 'tooltipButton';

  const fillColor =  data.style.tooltipButtonColor.value
  ? data.style.tooltipButtonColor.value.color
  : data.style.tooltipButtonColor.defaultValue;


  buttonElement.style.backgroundColor = fillColor;
	document.body.appendChild(buttonElement);

	tippy('#tooltipButton', {
	        content: tooltipText,
	        allowHTML: true, // parse `content` strings as HTML
	        interactive: true, // Tooltip can be hovered over and clicked inside without hiding
	        interactiveBorder: 50, // Determines the size of the invisible border around the tippy that will prevent it from hiding if the cursor left it.
          placement: 'bottom'
	});

}

// subscribe to data and style changes
dscc.subscribeToData(drawTooltip, { transform: dscc.objectTransform });