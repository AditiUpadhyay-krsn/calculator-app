let currentDisplay = '';

function appendToDisplay(value) {
     currentDisplay += value;
     document.querySelector('#display').value = currentDisplay;
}

function clearDisplay() {
     currentDisplay = '';
     document.querySelector('#display').value = currentDisplay;
}        

function calculate() {
     try {
          currentDisplay = String(eval(currentDisplay));
          document.querySelector('#display').value = currentDisplay;
     } catch (e) {
          document.querySelector('#display').value = 'Error';
          currentDisplay = '';
     }
}