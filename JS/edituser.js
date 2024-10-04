
        const urlParams = new URLSearchParams(window.location.search);
        const userId = parseInt(urlParams.get('id'));
        const users = JSON.parse(localStorage.getItem('users')) || [];
        const user = users.find(u => u.id === userId);

        if (user) {
            document.getElementById('edit-full-name').value = user.name;
            document.getElementById('edit-email').value = user.email;
        }

        document.getElementById('edit-user-form').addEventListener('submit', function (event) {
            event.preventDefault();
            user.name = document.getElementById('edit-full-name').value;
            user.email = document.getElementById('edit-email').value;

            localStorage.setItem('users', JSON.stringify(users));
            window.location.href = "userlist.html";
        });
    