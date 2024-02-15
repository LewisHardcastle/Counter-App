// Create counter
// store result and display below counter
// red background if negative,
// reen if positive,
// blue above 5
// save button, add resurt to list
// reset button to go back to 0

// Initialization

const body = document.querySelector('body');
const container = document.createElement('div');
const counterDiv = document.createElement('div');
const counterBox = document.createElement('div');
const counterResult = document.createElement('p');
const plusButton = document.createElement('btn');
const minusButton = document.createElement('btn');
const resultDiv = document.createElement('div');
const result = document.createElement('p');
const bottomDiv = document.createElement('div');
const saveButton = document.createElement('btn');
const resetButton = document.createElement('btn');
let counter = 0;
let resultCounter = '';

// Add Classes

body.classList.add('body');
container.classList.add('container');
counterDiv.classList.add('counterDiv');
counterBox.classList.add('counterBox');
plusButton.classList.add('plusButton');
minusButton.classList.add('minusButton');
resultDiv.classList.add('resultDiv');
result.classList.add('result');
bottomDiv.classList.add('bottomDiv');
saveButton.classList.add('saveButton');
resetButton.classList.add('resetButton');

// Styling

body.style.backgroundColor = '#29292b';
counterBox.style.backgroundColor = '#3A3A3C';
plusButton.style.backgroundColor = '#55b055';
minusButton.style.backgroundColor = '#ff3b30';
plusButton.innerHTML = '+';
minusButton.innerHTML = '-';
counterResult.innerText = `${counter}`;
result.innerText = `Result: ${resultCounter}`;
saveButton.innerHTML = 'Save';
resetButton.innerHTML = 'Reset';

// Arrrangement

body.appendChild(container);
container.appendChild(counterDiv);
counterDiv.appendChild(minusButton);
counterDiv.appendChild(counterBox);
counterDiv.appendChild(plusButton);
counterBox.appendChild(counterResult);
container.appendChild(resultDiv);
resultDiv.appendChild(result);
container.appendChild(bottomDiv);
bottomDiv.appendChild(saveButton);
bottomDiv.appendChild(resetButton);

// Event Listeners
plusButton.addEventListener('click', () => {
  counter++;
  counterResult.innerText = `${counter}`;
  conditionalStyling();
});

minusButton.addEventListener('click', () => {
  counter--;
  counterResult.innerText = `${counter}`;
  conditionalStyling();
});

resetButton.addEventListener('click', () => {
  counter = 0;
  counterResult.innerText = `${counter}`;
  resultCounter = counter;
  result.innerText = `Result:`;
  conditionalStyling();
});

saveButton.addEventListener('click', () => {
  resultCounter = counter;
  result.innerText = `Result: ${resultCounter}`;
  conditionalStyling();
});

// Conditional Styling

function conditionalStyling() {
  if (counter < 0) {
    counterBox.style.backgroundColor = '#ff3b30';
  } else if (counter > 5) {
    counterBox.style.backgroundColor = '#55b055';
  } else {
    counterBox.style.backgroundColor = '#3A3A3C';
  }
}
