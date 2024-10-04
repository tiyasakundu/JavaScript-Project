
const users = JSON.parse(localStorage.getItem('users')) || [];
const userListDiv = document.getElementById('user-list');

users.forEach(user => {
    const userItem = document.createElement('div');
    userItem.className = 'card mb-3';
    userItem.innerHTML = `
        <div class="card-body d-flex justify-content-between align-items-center">
            <div>
                <h5 class="card-title mb-0">${user.name}</h5>
                <p class="card-text">${user.email}</p>
            </div>
            <div>
                <a href="edituser.html?id=${user.id}" class="btn btn-warning btn-sm mr-2">Edit</a>
                <button onclick="deleteUser(${user.id})" class="btn btn-danger btn-sm">Delete</button>
            </div>
        </div>
    `;
    userListDiv.appendChild(userItem);
});

function deleteUser(id) {
    const confirmed = confirm("Are you sure you want to delete this user?");
    if (confirmed) {
        const updatedUsers = users.filter(user => user.id !== id);
        localStorage.setItem('users', JSON.stringify(updatedUsers));
        window.location.reload();
    }
}
