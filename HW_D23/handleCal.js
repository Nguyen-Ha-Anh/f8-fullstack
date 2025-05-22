let expression = ''

const screenE = document.querySelector('.calculate-screen')

const onclickBtn = (value) => {
    if (value === 'AC') {
        expression = ''
    }

    else if (value === 'C') {
        expression = expression.slice(0, -1)
    }
    
    else if (value === '=') {

        const result = eval(expression)
        expression = result.toString()
        screenE.innerText = expression
    }
    else {
        expression += value
        screenE.innerText = expression
    }

    screenE.innerText = expression
  }
  
export {onclickBtn}
