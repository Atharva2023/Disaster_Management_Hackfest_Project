// Switch between login and register form
document.getElementById("switchToRegister").addEventListener("click", function() {
    document.getElementById("login-section").style.opacity = "0"; // Fade out login section
    setTimeout(() => {
        document.getElementById("login-section").style.display = "none"; // Hide login section after fade out
        document.getElementById("register-section").style.display = "block"; // Show register section
        setTimeout(() => {
            document.getElementById("register-section").style.opacity = "1"; // Fade in register section
        }, 10); // Delay to allow for display to change
    }, 500); // Duration of the fade-out effect
});

document.getElementById("switchToLogin").addEventListener("click", function() {
    document.getElementById("register-section").style.opacity = "0"; // Fade out register section
    setTimeout(() => {
        document.getElementById("register-section").style.display = "none"; // Hide register section after fade out
        document.getElementById("login-section").style.display = "block"; // Show login section
        setTimeout(() => {
            document.getElementById("login-section").style.opacity = "1"; // Fade in login section
        }, 10); // Delay to allow for display to change
    }, 500); // Duration of the fade-out effect
});

// Handle login form submission
document.getElementById("loginForm").addEventListener("submit", function(e) {
    e.preventDefault(); // Prevent form from submitting

    // Get selected user type (Citizen or Rescue Agency)
    const selectedType = document.getElementById("loginType").value;

    // Redirect based on the selected user type
    if (selectedType === "citizen") {
        window.location.href = " user.html";
    } else if (selectedType === "rescue") {
        window.location.href = "admin-dashboard.html";
    }
});


// Handle registration form submission
document.getElementById("registerForm").addEventListener("submit", function(e) {
    e.preventDefault(); // Prevent form from submitting

    // You can add any additional validation or processing here before showing the alert

    // Show success alert
    alert("Registration successful!");

    // Optionally, reset the form fields
    document.getElementById("registerForm").reset();

    // Optionally, switch back to login form
    document.getElementById("register-section").style.display = "none"; // Hide registration section
    document.getElementById("login-section").style.display = "block"; // Show login section
    document.getElementById("login-section").style.opacity = "1"; // Ensure it's visible
});
