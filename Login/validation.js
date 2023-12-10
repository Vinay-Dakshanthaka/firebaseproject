function isValidPassword(password) {
    // Password must be at least 6 characters and contain at least 1 uppercase letter, 1 special character, and 1 number
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;
    return passwordRegex.test(password);
}