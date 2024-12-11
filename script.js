function showLogin() {
    const loginContainer = document.getElementById('login-container');
    const registerContainer = document.getElementById('register-container');

    // Show login and hide register
    loginContainer.classList.remove('hidden');
    registerContainer.classList.add('hidden');
}

function showRegister() {
    const loginContainer = document.getElementById('login-container');
    const registerContainer = document.getElementById('register-container');

    // Show register and hide login
    loginContainer.classList.add('hidden');
    registerContainer.classList.remove('hidden');
}
