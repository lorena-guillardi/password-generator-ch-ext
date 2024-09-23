document.addEventListener('DOMContentLoaded', function() {
    const generateBtn = document.getElementById('generate');
    const copyBtn = document.getElementById('copy');
    const passwordInput = document.getElementById('password');
    const lengthInput = document.getElementById('length');
    const alphanumericCheckbox = document.getElementById('alphanumeric');
    const specialCheckbox = document.getElementById('special');

    generateBtn.addEventListener('click', generatePassword);
    copyBtn.addEventListener('click', copyPassword);

    // Função responsável por gerar a senha
    function generatePassword() {
        const length = parseInt(lengthInput.value);
        const useAlphanumeric = alphanumericCheckbox.checked;
        const useSpecial = specialCheckbox.checked;

        let chars = '';
        if (useAlphanumeric) {
            chars += 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        } else {
            chars += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        }
        if (useSpecial) {
            chars += '!@#$%^&*()_+{}[]|:;<>,.?~';
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