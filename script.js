const inputText = document.getElementById('inputText');
const outputText = document.getElementById('outputText');
const encriptarBtn = document.getElementById('encriptarBtn');
const desencriptarBtn = document.getElementById('desencriptarBtn');
const copiarBtn = document.getElementById('copiarBtn');
const limpiarBtn = document.getElementById('limpiarBtn');

const key = {
    'e': 'enter',
    'i': 'imes',
    'a': 'ai',
    'o': 'ober',
    'u': 'ufat'
};

encriptarBtn.addEventListener('click', () => {
    const text = inputText.value.toLowerCase();
    let encryptedText = text;
    for (let letter in key) {
        encryptedText = encryptedText.replaceAll(letter, key[letter]);
    }
    outputText.value = encryptedText;
});

desencriptarBtn.addEventListener('click', () => {
    const text = inputText.value.toLowerCase();
    let decryptedText = text;
    for (let letter in key) {
        decryptedText = decryptedText.replaceAll(key[letter], letter);
    }
    outputText.value = decryptedText;
});

copiarBtn.addEventListener('click', () => {
    outputText.select();
    document.execCommand('copy');
});

limpiarBtn.addEventListener('click', () => {
    inputText.value = '';
    outputText.value = '';
});