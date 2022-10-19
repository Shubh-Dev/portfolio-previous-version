const form = document.getElementById('my-form');
form.addEventListener('submit', (e) => {
    console.log('submitted')
    const emailValue = document.getElementById('my-email').value;
    const emailError = document.getElementById('error-mes');
    const regex = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
    if (regex.test(emailValue)) {
        emailError.style.display = 'none';
        localStorage.removeItem('formData');

    } else {
        e.preventDefault();
        emailError.style.display = 'block';
        emailError.innerHTML = `<p> Please enter a valid email address </p>`;
    }
});

let formData = {
    fullName: document.querySelector('.name-input').value,
    email: document.getElementById('my-email').value,
    message: document.querySelector('.message-input').value
};

if(localStorage.getItem('formData') !== null) {
    formData = JSON.parse(localStorage.getItem('formData'));
    document.querySelector('.name-input').value = formData.fullName;
    document.getElementById('my-email').value = formData.email;
    document.querySelector('.message-input').value = formData.message;
};




