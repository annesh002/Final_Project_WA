$(document).ready(function () {

    $("form").submit(function (e) {
        e.preventDefault(); // Stop form refresh

        let fname = $("#firstName");
        let lname = $("#lastName");
        let email = $("#email");
        let phone = $("#phone");
        let bReg = $("#businessReg");
        let pass = $("#password");
        let confirmPass = $("#confirmPassword");
        let terms = $("#termsCheck");

        const showError = (field, message) => {
            alert(message);
            field.focus();
        };

        // FIRST NAME
        if (fname.val().trim() === "") {
            return showError(fname, "First name is required");
        }

        // LAST NAME
        if (lname.val().trim() === "") {
            return showError(lname, "Last name is required");
        }

        // EMAIL
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email.val().trim())) {
            return showError(email, "Please enter a valid email address");
        }

        // PHONE (digits only)
        const phonePattern = /^[0-9]{7,15}$/;
        if (!phonePattern.test(phone.val().trim())) {
            return showError(phone, "Phone number must be digits only (7–15 digits)");
        }

        // BUSINESS REGISTRATION
        if (bReg.val().trim() === "") {
            return showError(bReg, "Business registration number is required");
        }

        // PASSWORD
        if (pass.val().trim().length < 6) {
            return showError(pass, "Password must be at least 6 characters");
        }

        // CONFIRM PASSWORD
        if (pass.val() !== confirmPass.val()) {
            return showError(confirmPass, "Passwords do not match");
        }

        // TERMS CHECK
        if (!terms.is(":checked")) {
            return showError(terms, "You must agree to Terms & Conditions");
        }

        // If all validation passed
        alert("Form submitted successfully!");
        this.submit(); // allow submission
    });

});
