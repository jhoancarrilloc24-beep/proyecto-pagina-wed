document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('.login-form');
    const emailInput = document.getElementById('Correo');
    const passwordInput = document.getElementById('password');

    if (!form || !emailInput || !passwordInput) {
        return;
    }

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const email = emailInput.value.trim();
        const password = passwordInput.value.trim();

        if (!email || !password) {
            alert('Por favor completa todos los campos.');
            return;
        }

        if (!validateEmail(email)) {
            alert('Ingresa un correo válido.');
            emailInput.focus();
            return;
        }

        const storedUser = getStoredUser();
        const validUser = storedUser || {
            email: 'usuario@ejemplo.com',
            password: '12345678'
        };

        if (email === validUser.email && password === validUser.password) {
            alert('Inicio de sesión exitoso.');
            // Redirigir a la página principal o a otra página si ya existe.
            // window.location.href = 'dashboard.html';
        } else {
            alert('Correo o contraseña incorrectos.');
        }
    });
});

function validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function getStoredUser() {
    try {
        const userData = localStorage.getItem('user');
        return userData ? JSON.parse(userData) : null;
    } catch (error) {
        return null;
    }
}
