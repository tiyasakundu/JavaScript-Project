

function confirmDelete() {
    const uploads = JSON.parse(localStorage.getItem('uploads')) || [];
    const updatedUploads = uploads.filter(upload => upload.id !== uploadId); // Get uploadId from your context
    localStorage.setItem('uploads', JSON.stringify(updatedUploads));
    window.location.reload();
}
