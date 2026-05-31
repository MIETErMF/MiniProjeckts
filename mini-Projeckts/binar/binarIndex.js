resultat = document.getElementById('result');
greater = document.getElementById('greater');
lower = document.getElementById('lower');
bingo = document.getElementById('bingo');
window.onload = resultat.innerHTML += `is your number 50?`;
arr = [...Array(100).keys()];

let left = 0;
let right = arr.length ;

function binarySearch(arr, key) {
    let mid = Math.floor((left + right) / 2);
    if (key === "greater") {
        left = mid + 1;
    } else if (key === "lower") {
        right = mid - 1;
    }  else if (key === 'bingo') {
        resultat.innerHTML = `your number is ${mid}!`;
        return;
    }
    let currentMid = Math.floor((left + right) / 2);
    resultat.innerHTML += `<br>is your number ${currentMid}?`
    if (left > right) {
        greater.setAttribute('disabled', '')
        lower.setAttribute('disabled', '')
        bingo.setAttribute('disabled', '')
    }
}


greater.addEventListener('click', () => {
    binarySearch(arr, 'greater');
});

lower.addEventListener('click', () => {
    binarySearch(arr, 'lower');
});

bingo.addEventListener('click', () => {
    binarySearch(arr, 'bingo');
});