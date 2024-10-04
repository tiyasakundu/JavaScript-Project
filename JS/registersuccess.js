
// Get the logged-in name from localStorage
const loggedInName = localStorage.getItem('loggedInName');
document.getElementById('user-name').innerText = loggedInName ? `Welcome, ${loggedInName}!` : '';
