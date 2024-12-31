function handleSubmitContactForm() {
    let email = document.getElementById("inputEmail4").value;
    let name = document.getElementById("fullName").value;
    let message = document.getElementById("message").value;

    if (!email || !name || !message) {
        alert("Please fill all fields before submitting");
        return;
    }

    const subject = `Contact from ${name}`;
    const body = `Hi \n\nYou have received a new message:\n\n` + `Name: ${name}\n` + `Email: ${email}\n` + `Best Regard\n` + `${name}`;

    window.location.href = `mailto:nguyengiason7@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}