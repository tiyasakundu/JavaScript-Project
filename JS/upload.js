
        document.getElementById('upload-form').addEventListener('submit', function (event) {
            event.preventDefault();
            const label = document.getElementById('document-label').value;
            const fileInput = document.getElementById('document-file');
            
            if (fileInput.files.length === 0) {
                alert("Please select a file to upload.");
                return;
            }

            const file = fileInput.files[0];
            const uploads = JSON.parse(localStorage.getItem('uploads')) || [];
            const newId = uploads.length ? uploads[uploads.length - 1].id + 1 : 1;

            // Create a URL for the uploaded file
            const upload = {
                id: newId,
                label: label,
                fileName: file.name,
                fileData: URL.createObjectURL(file) // Create a URL for the file
            };

            uploads.push(upload);
            localStorage.setItem('uploads', JSON.stringify(uploads));
            window.location.href = "documentlist.html";
        });
 