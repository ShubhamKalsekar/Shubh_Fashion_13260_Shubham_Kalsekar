

// Validate signup form
function validateSignup() {
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var gender = document.querySelector('input[name="gender"]:checked');
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmPassword").value;

    // Clear previous error messages
    clearErrors();

    var isValid = true;

    // Validate First Name
    if (firstName === "") {
        document.getElementById("firstNameError").innerText = "First name is required.";
        isValid = false;
    }

    // Validate Last Name
    if (lastName === "") {
        document.getElementById("lastNameError").innerText = "Last name is required.";
        isValid = false;
    }

    // Validate Email
    var emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (email === "") {
        document.getElementById("emailError").innerText = "Email is required.";
        isValid = false;
    } else if (!emailRegex.test(email)) {
        document.getElementById("emailError").innerText = "Please enter a valid email address.";
        isValid = false;
    }

    // Validate Phone Number
    if (phone === "" || !/^\d{10}$/.test(phone)) {
        document.getElementById("phoneError").innerText = "Valid phone number is required.";
        isValid = false;
    }

    // Validate Gender
    if (!gender) {
        document.getElementById("genderError").innerText = "Gender is required.";
        isValid = false;
    }

    // Validate Password
    if (password === "") {
        document.getElementById("passwordError").innerText = "Password is required.";
        isValid = false;
    }

    // Validate Confirm Password
    if (confirmPassword === "" || password !== confirmPassword) {
        document.getElementById("confirmPasswordError").innerText = "Passwords do not match.";
        isValid = false;
    }

    return isValid;
}

// Clear previous error messages
function clearErrors() {
    var errorMessages = document.querySelectorAll(".error");
    errorMessages.forEach(function(message) {
        message.innerText = "";
    });
}
