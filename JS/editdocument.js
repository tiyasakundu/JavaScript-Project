
const urlParams = new URLSearchParams(window.location.search);
const docId = parseInt(urlParams.get('id'));
const uploads = JSON.parse(localStorage.getItem('uploads')) || [];
const upload = uploads.find(u => u.id === docId);

if (upload) {
    document.getElementById('edit-document-label').value = upload.label;
    document.getElementById('edit-document-file').value = upload.fileName;
}

document.getElementById('edit-document-form').addEventListener('submit', function (event) {
    event.preventDefault();
    upload.label = document.getElementById('edit-document-label').value;

    localStorage.setItem('uploads', JSON.stringify(uploads));
    window.location.href = "documentlist.html";
});
