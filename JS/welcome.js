
        const loggedInEmail = localStorage.getItem('loggedInEmail');
        const loggedInName = localStorage.getItem('loggedInName');

        document.getElementById('user-name').innerText = loggedInName ? `Hello, ${loggedInName}!` : 'No user logged in';
        document.getElementById('user-email').innerText = loggedInEmail || 'No email found';
  