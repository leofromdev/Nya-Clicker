let nyaCoins = 0;

let currentClickGain = 1;

let nyaButtonQuantityText = document.querySelector('#nyaButtonQuantityText');
nyaButtonQuantityText.textContent = currentClickGain;

let currentNyaCoins = document.querySelector('#currentNyaCoins');
currentNyaCoins.textContent = nyaCoins;

function clikedNyaButton() {
    nyaCoins = nyaCoins + 1;
    let currentNyaCoins = document.querySelector('#currentNyaCoins');
    currentNyaCoins.textContent = nyaCoins;
}

