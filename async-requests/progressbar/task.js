const sendButton = document.getElementById('send');
sendButton.addEventListener('click', clickHandler);

function clickHandler(event) {
    event.preventDefault();

    const formData = new FormData(document.forms.form);

    let xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/upload');
    xhr.send(formData);

    xhr.addEventListener('progress', progressHandler);
}


function progressHandler(event) {
    const progressBar = document.getElementById('progress');
    progressBar.value = event.loaded / event.total;
}





