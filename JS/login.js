
        document.getElementById('login-form').addEventListener('submit', function (event) {
            event.preventDefault();
            const email = document.getElementById('login-email').value;
            const password = document.getElementById('login-password').value;

            const users = JSON.parse(localStorage.getItem('users')) || [];
            const user = users.find(u => u.email === email && u.password === password);

            if (user) {
                localStorage.setItem('loggedInEmail', email);
                localStorage.setItem('loggedInName', user.name); // Store name correctly
                window.location.href = "welcome.html";
            } else {
                document.getElementById('login-error').innerText = "Wrong Email or Password";
            }
        });
   