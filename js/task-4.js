window.onload = () => {

    const form = document.querySelector('.login-form');

    form.addEventListener('submit', handleSubmit);

    function handleSubmit(event) {
        event.preventDefault();
        const form = event.target;
        const login = form.elements.login.value.trim();
        const password = form.elements.password.value.trim();

        if (!login || !password) {
            alert('All form fields must be filled in');
            return;
        }

        console.log('Login:', login);
        console.log('Password:', password);

        form.reset();

    }
}


