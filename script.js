// Set the width for the overlay and credits
let width = document.querySelector('img').offsetWidth;

function setWidth() {
    document.querySelector('.overlay').style.width = `${width}px`;
    document.querySelector('.credits').style.width = `${width}px`;
}

setWidth()
window.addEventListener('resize', function() {
    setWidth();
});

// Validate passwords

let passwd = document.getElementById('passwd');
let passwdc = document.getElementById('passwdc');
let passwdValue, passwdcValue;

function validatePasswd() {
    if (passwdValue === '' || passwdcValue === '') { 
        passwd.setCustomValidity('Please enter a password');
        passwdc.setCustomValidity('Please enter a password');
        console.log('invalid');
    } else if (passwdValue === passwdcValue) {
        passwd.setCustomValidity('');
        passwdc.setCustomValidity('');
        console.log('valid');
    } else {
        passwd.setCustomValidity('Passwords do not match');
        passwdc.setCustomValidity('Passwords do not match');
        console.log('invalid');
    }
}

passwd.addEventListener('input', function() {
    passwdValue = passwd.value;
    validatePasswd();
});

passwdc.addEventListener('input', function() {
    passwdcValue = passwdc.value;
    validatePasswd();
});