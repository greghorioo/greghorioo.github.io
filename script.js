document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === "admin" && password === "password") {
        // login sa page ni jom easier access. 
        window.location.href = "https://awssassin.github.io/";
    } else {
        document.getElementById('message').textContent = "Invalid username or password!";
        document.getElementById('message').style.color = "red";
    }
});
