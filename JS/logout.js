
        document.getElementById('logout-button').addEventListener('click', function() {
            // Clear user data from localStorage
            localStorage.removeItem('loggedInEmail');
            localStorage.removeItem('loggedInName'); // Clear user name as well
            
            // Optional: Add a confirmation message before redirecting
            document.getElementById('logout-message').innerText = "Logging out...";
            
            // Redirect to login page
            window.location.href = "login.html";
        });
   