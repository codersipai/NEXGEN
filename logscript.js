document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const message = document.getElementById("message");
    if (email === "sarik@gmail.com" && password === "1234") {
        message.style.color = "green";
        message.textContent = "Login Successful!";
    } else {
        message.style.color = "red";
        message.textContent = "Invalid email or Password";
    }
});