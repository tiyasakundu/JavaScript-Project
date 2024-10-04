
document.getElementById('register-form').addEventListener('submit', function (event) {
    event.preventDefault();
    const fullName = document.getElementById('full-name').value;
    const email = document.getElementById('register-email').value;
    const password = document.getElementById('register-password').value;
    const confirmPassword = document.getElementById('confirm-password').value;
    const errorDiv = document.getElementById('register-error');

    errorDiv.innerText = ""; // Clear previous errors

    // Check password length
    if (password.length < 8) {
        errorDiv.innerText = "Password must be at least 8 characters long.";
        return;
    }

    // Check if passwords match
    if (password !== confirmPassword) {
        errorDiv.innerText = "Passwords do not match.";
        return;
    }

    const users = JSON.parse(localStorage.getItem('users')) || [];
    const userExists = users.some(u => u.email === email);

    if (userExists) {
        errorDiv.innerText = "User already exists.";
    } else {
        // Store user data in localStorage
        users.push({ id: users.length + 1, name: fullName, email: email, password: password });
        localStorage.setItem('users', JSON.stringify(users));

        // Set logged in user email and name in localStorage
        localStorage.setItem('loggedInEmail', email);
        localStorage.setItem('loggedInName', fullName); // Store name correctly

        // Redirect to success page
        window.location.href = "registersuccess.html";
    }
});
