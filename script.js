function clearDisplay() {
    document.getElementById('display').innerText = '0';
}

function appendToDisplay(value) {
    let display = document.getElementById('display');
    if (display.innerText === '0') {
        display.innerText = value;
    } else {
        display.innerText += value;
    }
}

function calculate() {
    let display = document.getElementById('display');
    let expression = display.innerText;

    // Replace ^ with ** for exponentiation
    expression = expression.replace(/\^/g, '**');

    try {
        // Use Function constructor to evaluate the expression
        display.innerText = new Function('return ' + expression)();
    } catch {
        display.innerText = 'Error';
    }
}
