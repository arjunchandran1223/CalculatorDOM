 // Function to create buttons
 function createButton(value, className, onclickFunction) {
    var button = document.createElement('button');
    button.textContent = value;
    button.className = 'btn ' + className;
    button.onclick = onclickFunction;
    return button;
}

// Function to append button to the container
function appendButton(container, button) {
    container.appendChild(button);
}

// Function to append value to the display
function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

// Function to clear display
function clearDisplay() {
    document.getElementById('display').value = '';
}

// Function to calculate result
function calculate() {
    var expression = document.getElementById('display').value;
    try {
        var result = eval(expression);
        document.getElementById('display').value = result;
    } catch (error) {
        alert('Invalid expression');
    }
}

// Dynamically create buttons
var buttonsContainer = document.getElementById('buttons');
var buttons = [
    ['7', 'btn-primary', function() { appendToDisplay('7'); }],
    ['8', 'btn-primary', function() { appendToDisplay('8'); }],
    ['9', 'btn-primary', function() { appendToDisplay('9'); }],
    ['C', 'btn-danger', function() { clearDisplay(); }],
    ['4', 'btn-primary', function() { appendToDisplay('4'); }],
    ['5', 'btn-primary', function() { appendToDisplay('5'); }],
    ['6', 'btn-primary', function() { appendToDisplay('6'); }],
    ['+', 'btn-primary', function() { appendToDisplay('+'); }],
    ['1', 'btn-primary', function() { appendToDisplay('1'); }],
    ['2', 'btn-primary', function() { appendToDisplay('2'); }],
    ['3', 'btn-primary', function() { appendToDisplay('3'); }],
    ['-', 'btn-primary', function() { appendToDisplay('-'); }],
    ['0', 'btn-primary', function() { appendToDisplay('0'); }],
    ['.', 'btn-primary', function() { appendToDisplay('.'); }],
    ['=', 'btn-primary', function() { calculate(); }],
    ['*', 'btn-primary', function() { appendToDisplay('*'); }],
    ['%', 'btn-primary', function() { appendToDisplay('%'); }],
    ['/', 'btn-primary', function() { appendToDisplay('/'); }]
];

// Create and append buttons
buttons.forEach(function(buttonData) {
    var button = createButton(buttonData[0], buttonData[1], buttonData[2]);
    appendButton(buttonsContainer, button);
});

// Keyboard event listener
document.addEventListener('keydown', function(event) {
    var key = event.key;
    if (!isNaN(key) || key === '+' || key === '-' || key === '*' || key === '/' || key === '%' || key === '.') {
        appendToDisplay(key);
    } else if (key === 'Enter') {
        calculate();
    } else if (key === 'Backspace') {
        clearDisplay();
    } else {
        alert('Only numbers and operators are allowed');
    }
});
