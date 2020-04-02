/*
Listening to key-presses
Five things can happen when a person gets
hold of a calculator. They can hit:

    a number key (0–9)
    an operator key (+, -, ×, ÷)
    the decimal key
    the equals key
    the clear key

The first steps to building this calculator
are to be able to (1) listen for all keypresses 
and (2) determine the type of key that is pressed. 
In this case, we can use an event delegation pattern to listen,
 since keys are all children of .calculator__keys.
*/

//grab elemnts from the DOM
const calculator = document.querySelector('.calculator');
const keys = calculator.querySelector('.calculator_keys');
const key = e.target;
const action = key.dataset.action;

//If the key does not have a data-action attribute, it must be a number key.
if(!action) {
    console.log('Number key!')
}

//add event listeners
keys.addEventListener('click', e => {
    if(e.target.matches('button')) {

    }
})