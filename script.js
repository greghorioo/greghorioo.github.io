document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === "admin" && password === "password") {
        // Redirect to dashboard.html after successful login
        window.location.href = "dashboard.html";
    } else {
        document.getElementById('message').textContent = "Invalid username or password!";
        document.getElementById('message').style.color = "red";
    }
});
