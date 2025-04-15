// Select the display element
const display = document.getElementById('display');

// Select all buttons
const buttons = document.querySelectorAll('.button');

// Initial state
let currentInput = '';

// Add event listener to each button
buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.value;

        switch (value) {
            case 'ac':
                currentInput = '';
                break;
            case 'backspace':
                currentInput = currentInput.slice(0, -1);
                break;
            case '=':
                try {
                    currentInput = eval(currentInput).toString();
                } catch (e) {
                    currentInput = 'Error';
                }
                break;
            default:
                currentInput += value;
        }

        // Prevent empty display
        display.textContent = currentInput || '0';
    });
});