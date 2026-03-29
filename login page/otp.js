const inputs = document.querySelectorAll('.otp-inputs input');

inputs.forEach((input, index) => {
    // Handle typing
    input.addEventListener('input', (e) => {
        const value = e.target.value;
        
        // If user types a digit, move to the next box
        if (value && index < inputs.length - 1) {
            inputs[index + 1].focus();
        }
    });

    // Handle backspacing
    input.addEventListener('keydown', (e) => {
        if (e.key === 'Backspace' && !e.target.value && index > 0) {
            inputs[index - 1].focus();
        }
    });
});

// Example: Consolidating the code for submission
document.getElementById('verify-btn').addEventListener('click', () => {
    let otp = "";
    inputs.forEach(input => otp += input.value);
    
    if (otp.length === 6) {
        alert(`Verifying OTP: ${otp}`);
        // Here you would typically send 'otp' to your backend via fetch()
    } else {
        alert("Please enter all 6 digits.");
    }
});


