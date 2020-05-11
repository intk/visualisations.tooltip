function drawTooltip(data) {

  // Declare variable for tooltip text
  let tooltipText = data.style.tooltipText.value || "";

  // Replace link in text with inline hyperlink
  tooltipText = tooltipText.replace(/\[(.*)\]\((https?:\/\/[^\s]+)\)/g, '<a href="$2" target="_blank">$1</a>');

  // create a button element where the tooltip will be displayed
  document.body.innerHTML = "";
  var buttonElement = document.createElement('button');
  buttonElement.id = 'tooltipButton';

  const fillColor =  data.style.tooltipButtonColor.value
  ? data.style.tooltipButtonColor.value.color
  : data.style.tooltipButtonColor.defaultValue;


  buttonElement.style.backgroundColor = fillColor;

  // Set position of tooltip
  if (data.style.tooltipPosition.value == 'top') {
    buttonElement.classList.add("bottom");
  } else {
    buttonElement.classList.remove("bottom");
  }


  document.body.appendChild(buttonElement);

  tippy('#tooltipButton', {
          content: tooltipText,
          allowHTML: true, // parse `content` strings as HTML
          interactive: true, // Tooltip can be hovered over and clicked inside without hiding
          interactiveBorder: 100, // Determines the size of the invisible border around the tippy that will prevent it from hiding if the cursor left it.
          interactiveDebounce: 75, // Determines the time in ms to debounce the interactive hide handler when the cursor leaves the tippy's interactive region.
          appendTo: 'parent'
  });

}

// subscribe to data and style changes
dscc.subscribeToData(drawTooltip, { transform: dscc.objectTransform });