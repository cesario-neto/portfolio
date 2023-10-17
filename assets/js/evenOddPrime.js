function evenOddPrimeNumber() {
    const btn = document.querySelector('#btn-evenOddPrime');
    const startInput = document.querySelector('#start-evenOddPrime');
    const endInput = document.querySelector('#end-evenOddPrime');

    btn.addEventListener('click', e => {
        if (!(startInput.value) || !(endInput.value)) {
            alert('Operação ínvalida')
            return
        }
        if (startInput.value >= endInput.value) {
            alert('Inicio não pode ser maior que o fim')
            startInput.value = '';
            endInput.value = '';
            return
        }
        const evenNumbers = even(startInput.value, endInput.value);
        const oddNumbers = odd(startInput.value, endInput.value);
        const primeNumbers = primeNumber(startInput.value, endInput.value)
        
        const resultDiv = document.querySelector('.result');
        resultDiv.innerHTML = '';
        const evenResult = document.createElement('p');
        evenResult.setAttribute('class', 'text-center-direction text-full-width');
        evenResult.innerHTML = `Par: <br> ${evenNumbers}`;
        const oddResult = document.createElement('p');
        oddResult.setAttribute('class', 'text-center-direction text-full-width');
        oddResult.innerHTML = `Ímpar: <br> ${oddNumbers}`;
        const primeResult = document.createElement('p');
        primeResult.setAttribute('class', 'text-center-direction text-full-width');
        primeResult.innerHTML = `Primos <br> ${primeNumbers}`;
        resultDiv.appendChild(evenResult);
        resultDiv.appendChild(oddResult);
        resultDiv.appendChild(primeResult);
    })

    function even(start, end) {
        const nums = new Array();
    
        for (let i = start; i <= end; i++) {
            nums.push(i);
        }
    
        const evens = nums.filter(value => {
            if (value % 2 === 0) return value;
        });
    
        return evens;
    }
    
    function odd(start, end) {
        const nums = new Array();
    
        for (let i = start; i <= end; i++) {
            nums.push(i);
        }
    
        const odds = nums.filter(value => {
            if (value % 2 !== 0) return value;
        });
    
        return odds;
    }
    
    function primeNumber(start, end) {
        const nums = new Array();
    
        for (let i = start; i <= end; i++) {
            nums.push(i);
        }
    
        const primeNumbers = nums.filter(value => {
            let count = 0;
    
            for (let i = 1; i <= value; i++) {
                if (value % i === 0) count++;
            }
            if (count <= 2) return value
    
        });
    
        return primeNumbers;
    }
}

evenOddPrimeNumber();