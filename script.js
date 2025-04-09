document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("validationForm");

    const fullName = document.getElementById("fullName");
    const email = document.getElementById("email");
    const phone = document.getElementById("phone");
    const password = document.getElementById("password");

    const nameError = document.getElementById("nameError");
    const emailError = document.getElementById("emailError");
    const phoneError = document.getElementById("phoneError");
    const passwordError = document.getElementById("passwordError");
    const successMessage = document.getElementById("successMessage");

    function validateName() {
        const nameRegex = /^[A-Za-z\s]+$/;
        if (!fullName.value.match(nameRegex)) {
            nameError.textContent = "Only alphabetic characters and spaces allowed.";
            fullName.classList.add("invalid");
            return false;
        }
        nameError.textContent = "";
        fullName.classList.remove("invalid");
        return true;
    }

    function validateEmail() {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!email.value.match(emailRegex)) {
            emailError.textContent = "Enter a valid email address.";
            email.classList.add("invalid");
            return false;
        }
        emailError.textContent = "";
        email.classList.remove("invalid");
        return true;
    }

    function validatePhone() {
        const phoneRegex = /^[0-9]{10,15}$/;
        if (!phone.value.match(phoneRegex)) {
            phoneError.textContent = "Only digits, 10-15 characters.";
            phone.classList.add("invalid");
            return false;
        }
        phoneError.textContent = "";
        phone.classList.remove("invalid");
        return true;
    }

    function validatePassword() {
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
        if (!password.value.match(passwordRegex)) {
            passwordError.textContent = "Min 8 chars, 1 uppercase, 1 lowercase, 1 number.";
            password.classList.add("invalid");
            return false;
        }
        passwordError.textContent = "";
        password.classList.remove("invalid");
        return true;
    }

    fullName.addEventListener("input", validateName);
    email.addEventListener("input", validateEmail);
    phone.addEventListener("input", validatePhone);
    password.addEventListener("input", validatePassword);

    form.addEventListener("submit", function (event) {
        event.preventDefault();
        
        if (validateName() && validateEmail() && validatePhone() && validatePassword()) {
            successMessage.textContent = "Form submitted successfully!";
            successMessage.style.color = "green";
            form.reset();
        } else {
            successMessage.textContent = "";
        }
    });
});
