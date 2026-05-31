let currencyExchange = document.getElementById('currencyExchange');
const germanyBtn = document.getElementById('germany');
const japanBtn = document.getElementById('japan');
const ukraineBtn = document.getElementById('ukraine');
const swissBtn = document.getElementById('swiss');
const allBtn = document.querySelectorAll("button");

async function get(base, quotes) {
    const response = await fetch(`https://api.frankfurter.dev/v2/rates?base=${base}&quotes=${quotes}`);
    return await response.json();
}

function showRates(base, quotes) {
    get(base, quotes).then(data => {
        currencyExchange.querySelector('tbody').innerHTML = data
            .map(cont =>
                `<tr>
                    <td>${cont.base}</td>
                    <td>${cont.quote}</td>
                    <td>${cont.rate}</td>
                </tr>`
            )
            .join("");
    });
}

germanyBtn.addEventListener('click', () => {
    showRates("EUR", ["UAH", "USD", "JPY", "CHF"]);
});

japanBtn.addEventListener('click', () => {
    showRates("JPY", ["UAH", "USD", "EUR", "CHF"]);
});

ukraineBtn.addEventListener('click', () => {
    showRates("UAH", ["EUR", "USD", "JPY", "CHF"]);
});

swissBtn.addEventListener('click', () => {
    showRates("CHF", ["UAH", "USD", "JPY", "EUR"]);
});