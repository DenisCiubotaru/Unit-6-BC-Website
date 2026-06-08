document.addEventListener("DOMContentLoaded", () => {
    const applyBtn1 = document.getElementById("applyBtn");
    const applyBtn2 = document.getElementById("applyBtn2");

    if (applyBtn1) {
        applyBtn1.addEventListener("click", () => {
            window.location.href = "application.html";
        });
    }

    if (applyBtn2) {
        applyBtn2.addEventListener("click", () => {
            window.location.href = "application.html";
        });
    }
});

// Letter-only validation
function onlyLetters(field) {
    const regex = /^[A-Za-z]+$/;

    if (!regex.test(field.value)) {
        field.setCustomValidity("Please only use letters A–Z with no numbers or symbols.");
    } else {
        field.setCustomValidity("");
    }
}

document.addEventListener("DOMContentLoaded", () => {

    // Get all fields
    const firstName = document.getElementById("firstName");
    const lastName = document.getElementById("lastName");
    const email = document.getElementById("email");
    const phone = document.getElementById("phone");
    const dob = document.getElementById("dob");
    const city = document.getElementById("city");
    const form = document.getElementById("applicationForm");

    // Apply letter-only validation
    firstName.addEventListener("input", () => onlyLetters(firstName));
    lastName.addEventListener("input", () => onlyLetters(lastName));
    city.addEventListener("input", () => onlyLetters(city));

    // Form submit validation
    form.addEventListener("submit", function(event) {
        let errors = [];

        // Email validation
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email.value.trim())) {
            errors.push("Please enter a valid email address.");
        }

        // Phone validation (optional)
        const phonePattern = /^[0-9+\-\s]{7,15}$/;
        if (phone.value.trim() !== "" && !phonePattern.test(phone.value.trim())) {
            errors.push("Phone number must be 7–15 digits.");
        }

        // DOB validation
        if (dob.value === "") {
            errors.push("Please enter your date of birth.");
        }

        // If errors exist → stop form + show alert
        if (errors.length > 0) {
            event.preventDefault();
            alert(errors.join("\n"));
        }
    });
});
