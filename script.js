document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('myForm');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const nameError = document.getElementById('nameError');
    const emailError = document.getElementById('emailError');
    const passwordError = document.getElementById('passwordError');
    const submissionMessage = document.getElementById('submissionMessage');
    const changeTextBtn = document.getElementById('changeTextBtn');
    const dynamicText = document.getElementById('dynamicText');

    // --- Event Listeners ---

    form.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent default form submission
        validateForm();
    });

    changeTextBtn.addEventListener('click', () => {
        dynamicText.textContent = 'The text has been changed by the button click!';
    });

    nameInput.addEventListener('input', () => {
        validateName();
    });

    emailInput.addEventListener('input', () => {
        validateEmail();
    });

    passwordInput.addEventListener('input', () => {
        validatePassword();
    });

    // --- Form Validation Functions ---

    function validateName() {
        if (nameInput.value.trim() === '') {
            displayError(nameError, 'Name is required.');
            return false;
        } else {
            clearError(nameError);
            return true;
        }
    }

    function validateEmail() {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (emailInput.value.trim() === '') {
            displayError(emailError, 'Email is required.');
            return false;
        } else if (!emailRegex.test(emailInput.value)) {
            displayError(emailError, 'Invalid email format.');
            return false;
        } else {
            clearError(emailError);
            return true;
        }
    }

    function validatePassword() {
        if (passwordInput.value === '') {
            displayError(passwordError, 'Password is required.');
            return false;
        } else if (passwordInput.value.length < 8) {
            displayError(passwordError, 'Password must be at least 8 characters long.');
            return false;
        } else {
            clearError(passwordError);
            return true;
        }
    }

    function validateForm() {
        const isNameValid = validateName();
        const isEmailValid = validateEmail();
        const isPasswordValid = validatePassword();

        if (isNameValid && isEmailValid && isPasswordValid) {
            // If all validations pass, you can proceed with form submission logic here
            submissionMessage.textContent = 'Form submitted successfully!';
            form.reset(); // Clear the form
        } else {
            submissionMessage.textContent = ''; // Clear any previous success message
        }
    }

    function displayError(element, message) {
        element.textContent = message;
    }

    function clearError(element) {
        element.textContent = '';
    }

    // --- Interactive Elements ---
    // (The button click functionality is already implemented in the event listeners section)

    // You can add more interactive elements here based on your README.md
    // For example, changing styles on hover, toggling visibility, etc.
});