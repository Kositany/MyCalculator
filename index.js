 const display = document.getElementById('display');
    const buttons = document.querySelectorAll('.button');
    let currentInput = '';

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

        display.textContent = currentInput || '0';
      });
    });
