function drawTooltip(data) {

  // Declare variable for tooltip text
  let tooltipText = data.style.tooltipText.value || "";

  // Add link to tooltip text when available
  if (data.style.tooltipLink.value.length > 1) {
    tooltipText += ' <a href="'+data.style.tooltipLink.value+'" target="_blank" title="'+data.style.tooltipLinkText.value+'">'+data.style.tooltipLinkText.value+'</a>';
  }

	// create a button element where the tooltip will be displayed
  document.body.innerHTML = "";
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