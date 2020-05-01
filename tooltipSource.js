// create a button element where the tooltip will be displayed
var buttonElement = document.createElement('button');
buttonElement.id = 'tooltipButton';
buttonElement.innerText = 'Hover this';
document.body.appendChild(buttonElement);

tippy('#tooltipButton', {
        content: '<a href="https://www.intk.com/en/about" target="_blank">INTK</a> researches and develops digital strategies and creates critical interventions that reflect on art, technology and society.',
        allowHTML: true, // parse `content` strings as HTML
        interactive: true, // Tooltip can be hovered over and clicked inside without hiding
        interactiveBorder: 50, // Determines the size of the invisible border around the tippy that will prevent it from hiding if the cursor left it.
});