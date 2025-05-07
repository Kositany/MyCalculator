let currentValue = '0';
    let previousValue = '';
    let currentOperator = '';
    let shouldReset = false;
    
    const currentDisplay = document.getElementById('current');
    const historyDisplay = document.getElementById('history');
    
    function updateDisplay() {
      currentDisplay.textContent = currentValue;
      historyDisplay.textContent = previousValue ? `${previousValue} ${currentOperator}` : '';
    }
    
    function appendNumber(number) {
      if (currentValue === '0' || shouldReset) {
        currentValue = number;
        shouldReset = false;
      } else {
        currentValue += number;
      }
      updateDisplay();
    }
    
    function appendDecimal() {
      if (shouldReset) {
        currentValue = '0.';
        shouldReset = false;
        updateDisplay();
        return;
      }
      if (!currentValue.includes('.')) {
        currentValue += '.';
        updateDisplay();
      }
    }
    
    function appendOperator(operator) {
      if (currentValue === '') return;
      
      if (previousValue !== '') {
        calculate();
      }
      
      currentOperator = operator;
      previousValue = currentValue;
      currentValue = '';
      updateDisplay();
    }
    
    function calculate() {
      if (previousValue === '' || currentValue === '' || !currentOperator) return;
      
      const prev = parseFloat(previousValue);
      const current = parseFloat(currentValue);
      let result;
      
      switch (currentOperator) {
        case '+': result = prev + current; break;
        case '-': result = prev - current; break;
        case '*': result = prev * current; break;
        case '/': result = prev / current; break;
        default: return;
      }
      
      currentValue = result.toString();
      previousValue = '';
      currentOperator = '';
      shouldReset = true;
      updateDisplay();
    }
    
    function clearAll() {
      currentValue = '0';
      previousValue = '';
      currentOperator = '';
      updateDisplay();
    }
    
    function deleteLast() {
      if (currentValue.length === 1 || (currentValue.length === 2 && currentValue.startsWith('-'))) {
        currentValue = '0';
      } else {
        currentValue = currentValue.slice(0, -1);
      }
      updateDisplay();
    }
