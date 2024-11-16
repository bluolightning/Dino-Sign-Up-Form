// Set overlay width
let width = document.querySelector('img').offsetWidth;
document.querySelector('.overlay').style.width = `${width}px`;

window.addEventListener('resize', function() {
    width = document.querySelector('img').offsetWidth;
    document.querySelector('.overlay').style.width = `${width}px`;
});


// Validate passwords
let passwd = document.getElementById('passwd');
let passwdc = document.getElementById('passwdc');

let passwdValue, passwdcValue;

passwd.addEventListener('input', function() {
    passwdValue = passwd.value;
    validatePasswd();
});

passwdc.addEventListener('input', function() {
    passwdcValue = passwdc.value;
    validatePasswd();
});

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
