// Set the width for the overlay and credits
let width;
let intervalCount = 1;

function setWidth() {
    width = document.querySelector('img').offsetWidth;
    document.querySelector('.overlay').style.width = `${width}px`;
    document.querySelector('.credits').style.width = `${width}px`;
}

window.addEventListener('resize', function() {
    setWidth();
});

// Fix incorrect overlay on page load

let interval = window.setInterval(() => {
    intervalCount++;
    setWidth();
    if (intervalCount >= 5) {
        clearInterval(interval);
    }
}, 500);

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