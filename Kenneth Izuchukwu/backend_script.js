// Backend script for server-side logic

// Mock database
const users = [];

// Function to handle user sign-up
function handleSignup(username, email, password) {
    console.log("Signup initiated for:", username);

    // Check if the user already exists
    const userExists = users.some(user => user.email === email);
    if (userExists) {
        console.log("Signup failed: User already exists.");
        return { success: false, message: "User already exists." };
    }

    // Add new user to the database
    users.push({ username, email, password });
    console.log("Signup successful:", username);
    return { success: true, message: "Signup successful." };
}

// Function to handle user login
function handleLogin(email, password) {
    console.log("Login attempt for:", email);

    // Find the user by email
    const user = users.find(user => user.email === email);
    if (!user) {
        console.log("Login failed: User not found.");
        return { success: false, message: "User not found." };
    }

    // Verify password
    if (user.password !== password) {
        console.log("Login failed: Incorrect password.");
        return { success: false, message: "Incorrect password." };
    }

    console.log("Login successful for:", email);
    return { success: true, message: "Login successful." };
}

// Export the functions (for use with server frameworks like Node.js)
module.exports = { handleSignup, handleLogin };
