let screen = document.getElementsByClassName("screen")[0]

document.addEventListener('click', (event) => {
    if (event.target.classList.contains('calc-button')) {
        let value = event.target.getAttribute('value');
        screen.innerText = value;
    }
})


let currentInput = ''; 
let previousInput = ''; 
let operator = ''; 

document.addEventListener('click', (event) => {
    if (event.target.classList.contains('calc-button')) {
        let value = event.target.getAttribute('value');

        
        if (!isNaN(value) || value === '.') {
            currentInput += value;
            screen.innerText = currentInput;
        }
        
        else if (value === '+' || value === '-' || value === 'x' || value === '/') {
            if (currentInput !== '') {
                previousInput = currentInput;
                currentInput = '';
                operator = value;
                screen.innerText = value;
            }
        }
        
        else if (value === '=') {
            if (currentInput !== '' && previousInput !== '' && operator !== '') {
                let result;
                let num1 = parseFloat(previousInput);
                let num2 = parseFloat(currentInput);

                switch (operator) {
                    case '+':
                        result = num1 + num2;
                        break;
                    case '-':
                        result = num1 - num2;
                        break;
                    case 'x':
                        result = num1 * num2;
                        break;
                    case '/':
                        result = num1 / num2;
                        break;
                }

                screen.innerText = result;
                currentInput = result.toString();
                previousInput = '';
                operator = '';
            }
        }
        
        else if (value === 'C') {
            currentInput = '';
            previousInput = '';
            operator = '';
            screen.innerText = '';
        }
    }
});


