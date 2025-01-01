function handleSubmitContactForm() {
    let reply_to = document.getElementById("inputEmail4").value;
    let name = document.getElementById("fullName").value;
    let message = document.getElementById("message").value;
    let subject = document.getElementById("subject").value;

    if (!reply_to || !name || !message || !subject) {
        alert("Please fill all fields before submitting");
        return;
    }

    const params = {
        name: name,
        message: message,
        reply_to: reply_to,
        subject: subject,
    }

    emailjs.send("service_v82v3kc", "template_4edluyp", params).then(() => alert("Email sent successfully!")).catch(err => {
        console.log("Error: ", params)
        // alert(`Failed to send email. Please try again later.`)
    });
}