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
const display = document.querySelector('.calculator_display')

//add event listeners
keys.addEventListener('click', e => {
    if(e.target.matches('button')) {
        const key = e.target
        const action = key.dataset.action
        const keyContent = key.textContent
        const displayedNum = display.textContent
        const previousKeyType = calculator.dataset.previousKeyType
         Array.from(key.parentNode.children)
      .forEach(k => k.classList.remove('is-depressed'))

    if (!action) {
      if (displayedNum === '0' || previousKeyType === 'operator') {
        display.textContent = keyContent
      } else {
        display.textContent = displayedNum + keyContent
      }
    }

    if (action === 'decimal') {
      display.textContent = displayedNum + '.'
    }

    if (
      action === 'add' ||
      action === 'subtract' ||
      action === 'multiply' ||
      action === 'divide'
    ) {
      key.classList.add('is-depressed')
      calculator.dataset.previousKeyType = 'operator'
      calculator.dataset.firstValue = displayedNum
      calculator.dataset.operator = action
    }

    if (action === 'clear') {
      console.log('clear key!')
    }

    if (action === 'calculate') {
      const firstValue = calculator.dataset.firstValue
      const operator = calculator.dataset.operator
      const secondValue = displayedNum

      display.textContent = calculate(firstValue, operator, secondValue)
    }

    }
})

const calculate = (n1, operator, n2) => {
  let result = ''
  if (operator === 'add') {
    result = parseFloat(n1) + parseFloat(n2)
  } else if (operator === 'subtract') {
    result = parseFloat(n1) - parseFloat(n2)
  } else if (operator === 'multiply') {
    result = parseFloat(n1) * parseFloat(n2)
  } else if (operator === 'divide') {
    result = parseFloat(n1) / parseFloat(n2)
  }

  return result
}