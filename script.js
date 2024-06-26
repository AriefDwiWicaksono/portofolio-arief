function whatsApp() {
    var nama = document.getElementById('nama').value;
    var email = document.getElementById('email').value;
    var number = document.getElementById('number').value;
    var message = document.getElementById('message').value;

    var whatsapp = "https://wa.me/6285892494792?text="
    + "Nama: " + nama + "%0a"
    + "Email: " + email + "%0a"
    + "Number: " + number + "%0a"
    + "Message: " + message;

    window.open(whatsapp,"_blank").focus();
}