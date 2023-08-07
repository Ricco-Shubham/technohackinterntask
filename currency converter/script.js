const apiKey = 'e1618faaf8710cd1fa7ef15e';

async function fetchCurrencies() {
    try {
        const response = await fetch(`https://open.er-api.com/v6/latest/${apiKey}`);
        const data = await response.json();
        const rates = data.rates;
        const currencySelects = document.querySelectorAll('select');
        for (const currency of Object.keys(rates)) {
            for (const select of currencySelects) {
                const option = document.createElement('option');
                option.value = currency;
                option.text = currency;
                select.appendChild(option);
            }
        }
    } catch (error) {
        console.error('Error fetching currencies:', error);
    }
}

async function convert() {
    const amount = parseFloat(document.getElementById('amount').value);
    const fromCurrency = document.getElementById('fromCurrency').value;
    const toCurrency = document.getElementById('toCurrency').value;
    try {
        const response = await fetch(`https://v6.exchangerate-api.com/v6/${apiKey}/pair/${fromCurrency}/${toCurrency}/${amount}`);
        const data = await response.json();
        if (data.result === "success") {
            const resultElement = document.getElementById('result');
            resultElement.innerText = `${amount} ${fromCurrency} = ${data.conversion_result.toFixed(2)} ${toCurrency}`;
        } else {
            console.error('Error converting currencies:', data.error);
        }
    } catch (error) {
        console.error('Error converting currencies:', error);
    }
}

fetchCurrencies();
