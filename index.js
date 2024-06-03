function generatePassword() {
    var characters = '1234567890qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM!@#$%^&*()_+{}:';
    var passwordLength = 15;
    var password = "";
    for (var i = 0; i < passwordLength; i++) {
        var random = Math.floor(Math.random() * characters.length);
        password += characters.charAt(random);
    }
    document.getElementById("password").value = password;
}

function copyPassword() {
    var pass = document.getElementById('password');
    pass.select();
    document.execCommand("copy");
}