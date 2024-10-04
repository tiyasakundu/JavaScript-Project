
const uploads = JSON.parse(localStorage.getItem('uploads')) || [];
const documentListDiv = document.getElementById('document-list');

uploads.forEach(upload => {
    const docRow = document.createElement('tr');
    docRow.innerHTML = `
        <td>${upload.label}</td>
        <td><a href="${upload.fileData}" download>${upload.fileName}</a></td>
        <td>
            <a href="editdocument.html?id=${upload.id}" class="btn btn-warning btn-sm">Edit</a>
            <button onclick="deleteUpload(${upload.id})" class="btn btn-danger btn-sm">Delete</button>
        </td>`;
    documentListDiv.appendChild(docRow);
});

function deleteUpload(id) {
    const confirmed = confirm("Are you sure you want to delete this document?");
    if (confirmed) {
        const updatedUploads = uploads.filter(upload => upload.id !== id);
        localStorage.setItem('uploads', JSON.stringify(updatedUploads));
        window.location.reload();
    }
}
