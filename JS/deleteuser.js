

function confirmDelete() {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const updatedUsers = users.filter(user => user.id !== userId); // Get userId from your context
    localStorage.setItem('users', JSON.stringify(updatedUsers));
    window.location.reload();
}
