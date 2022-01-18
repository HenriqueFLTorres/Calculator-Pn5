let inputBox = document.querySelector('#inputBox');

const buttons = document.querySelectorAll('button');

buttons.forEach( button => {
    button.addEventListener('click', e => {
        let inputbox = inputBox.value
        switch (e.target.innerHTML) {
            case 'C':
                let symbol = inputBox.value.match(/[^\.\d]/g); // match anything except . and digit
                let symbolIndex = 1 + inputBox.value.indexOf(symbol); // Find the index of the symbol + 1
                inputBox.value = inputBox.value.slice(0, symbolIndex); // slice after symbol
                break;
            case 'CE':
                inputBox.value = '';
                break;
            case '=':
                inputBox.value = eval(inputBox.value);
                break;
            case '+/-':
                console.log("sorry");
                break;
            case 'Remove':
                inputBox.value = inputBox.value.slice(0, -1); // remove last number
                break;
            case '√x':
                inputBox.value = Math.sqrt(inputBox.value);
                break;
            case 'x²':
                inputBox.value += '**';
                break;
            case '%':
                let symboll = inputBox.value.match(/[^\.\d]/g);  // match anything except . and digit
                let symbolIndexx = inputBox.value.indexOf(symboll);  // Find the index of the symbol

                let firstPart = inputBox.value.slice(0, symbolIndexx);  // slice before symbol
                let secondPart = inputBox.value.slice(symbolIndexx, 100);  // slice after symbol

                // Calculator breaking on * and /
                secondPart = Math.abs(secondPart);
                inputBox.value = eval(`${firstPart} ${symboll} ((${firstPart}/100)*${secondPart})`);
                break;
            default:
                inputBox.value += e.target.innerText;
        }
})})
