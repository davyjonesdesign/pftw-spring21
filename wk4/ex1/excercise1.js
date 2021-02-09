// select empy div and assign it to a variable
const myEmptyDiv = document.querySelector('#myEmptyDiv');
// put an h1 inside of it
// create a new element
const heading = document.createElement('h1');
heading.innerHTML = 'Llamas don\'t bite. They spit when they\'re agitated, but that\'s mostly at each other. Llamas also kick and neck wrestle each other when agitated.';
heading.style.cursor = 'pointer';
heading.style.color = 'green';
heading.addEventListener('click', handleHeadingClick);
myEmptyDiv.appendChild(heading);
function handleHeadingClick () {
  console.log('Heading has been clicked.');
  document.body.style.backgroundColor = 'black';
  heading.style.color = 'magenta';
}
