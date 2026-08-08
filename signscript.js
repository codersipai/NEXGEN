const signupForm = document.getElementById("signupForm");
        const password = document.getElementById("password");
        const confirmPassword = document.getElementById("confirmPassword");
        const message = document.getElementById("message");

      
        document.getElementById("showPassword").addEventListener("click", function () {
            if (password.type === "password") {
                password.type = "text";
                this.textContent = "Hide";
            } else {
                password.type = "password";
                this.textContent = "Show";
            }
        });

   
        document.getElementById("showConfirmPassword").addEventListener("click", function () {
            if (confirmPassword.type === "password") {
                confirmPassword.type = "text";
                this.textContent = "Hide";
            } else {
                confirmPassword.type = "password";
                this.textContent = "Show";
            }
        });

        signupForm.addEventListener("submit", function (event) {
            event.preventDefault();

            if (password.value.length < 6) {
                message.textContent =
                    "Password must be at least 6 characters.";
                message.style.color = "red";
                return;
            }

            if (password.value !== confirmPassword.value) {
                message.textContent =
                    "Passwords do not match.";
                message.style.color = "red";
                return;
            }

            message.textContent =
                "Account created successfully!";
            message.style.color = "green";

         
            setTimeout(function () {
                window.location.href = "login.html";
            }, 1500);
        });