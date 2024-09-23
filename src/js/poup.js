document.addEventListener('DOMContentLoaded', function() {
    const generateBtn = document.getElementById('generate');
    const copyBtn = document.getElementById('copy');
    const passwordInput = document.getElementById('password');
    const lengthInput = document.getElementById('length');
    const lowercaseCheckbox = document.getElementById('lowercase');
    const uppercaseCheckbox = document.getElementById('uppercase');
    const numbersCheckbox = document.getElementById('numbers');
    const specialCheckbox = document.getElementById('special');

    generateBtn.addEventListener('click', generatePassword);
    copyBtn.addEventListener('click', copyPassword);

    // Função responsável por gerar a senha
    function generatePassword() {
        const length = parseInt(lengthInput.value);
        const useLowercase = lowercaseCheckbox.checked;
        const useUppercase = uppercaseCheckbox.checked;
        const useNumbers = numbersCheckbox.checked;
        const useSpecial = specialCheckbox.checked;

        let chars = '';
        if (useLowercase) chars += 'abcdefghijklmnopqrstuvwxyz';
        if (useUppercase) chars += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        if (useNumbers) chars += '0123456789';
        if (useSpecial) chars += '!@#$%^&*()_+{}[]|:;<>,.?~';

        if (chars === '') {
            alert('Por favor, selecione pelo menos um tipo de caractere.');
            return;
        }

        let password = '';
        for (let i = 0; i < length; i++) {
            password += chars.charAt(Math.floor(Math.random() * chars.length));
        }

        passwordInput.value = password;
    }

    function copyPassword() {
        passwordInput.select();
        document.execCommand('copy');
        alert('Senha copiada para a área de transferência!');
    }
});