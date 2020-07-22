function validateform()
{
const email = document.Sign_in.email.value;
    const password = document.Sign_in.password.value;
    var mailformat = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (email === '' || email == null) {
        alert('Email is required');
        var b = 0;
    }
    if (email.match(mailformat)) {
        var b = 1;
    }
    else {
        alert("You have entered an invalid email address. Follow format abc@gmail.com");
    }
    if (password.length <= 6) {
        alert('Password must be longer than 6 characters');
        var c = 0;
    }
    else if (password.length >= 20) {
        alert('Password must be less than 20 characters');
        var c = 0;
    }
    else if (password === 'password') {
        alert('Password cannot be password');
        var c = 0;
    }
    else {
        return c = 1;
    }
    if (b + c == 2) {
        return true;
    }
    else {
        return false;
    }
}



