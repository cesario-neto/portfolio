function cpfGenerator() {
    const btn = document.querySelector('#cpf-btn');
    const input = document.querySelector('#cpf-input');
    btn.addEventListener('click', e => {
        const cpf = generateCpf();
        input.value = cpf
    })

    function generateCpf() {
        let cpf = '';
        while (cpf.length <= 8) {
            cpf += Math.floor(Math.random() * 9);
        }
        let count = 10;
        let firstResult = 0;
        for (let n of cpf) {
            firstResult += Number(n) * count;
            count--;
        }
        firstResult = ((firstResult * 10) % 11) >= 10? '0': ((firstResult * 10) % 11).toString();
        
        cpf += firstResult

        count = 11;
        let secondResult = 0;
        for (let n of cpf) {
            secondResult += Number(n) * count;
            count--;
        }

        secondResult = ((secondResult * 10) % 11) >= 10? '0': ((secondResult * 10) % 11).toString();   
        
        cpf += secondResult;

        cpfFormatted = `${cpf.slice(0,3)}.${cpf.slice(3,6)}.${cpf.slice(6,9)}-${cpf.slice(9,11)}`;

        return cpfFormatted;
    }
}

cpfGenerator();