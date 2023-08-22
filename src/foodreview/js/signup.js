

document.addEventListener("DOMContentLoaded", function () {
    const signupForm = document.getElementById("signup-form");
    
    signupForm.addEventListener("submit", function (event) {
      event.preventDefault();
      validateForm();
    });
    
    function validateForm() {
      const username = document.getElementById("username").value;
      const password = document.getElementById("password").value;
      const confirmPassword = document.getElementById("confirm-password").value;
      
      if (!username || !password || !confirmPassword) {
        alert("Please fill in all fields.");
        return;
      }
      
      if (password !== confirmPassword) {
        alert("Passwords do not match.");
        return;
      }
      
      // You can add more validation checks here
      
      // If all checks pass, you can proceed with submitting the form
      alert("Signup successful!");
      signupForm.reset();
    }
  });
  
