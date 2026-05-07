function login() {
    let username = document.getElementById("user").value;
    let password = document.getElementById("pass").value;

    if (username === "admin" && password === "123") {
        window.location.href = "dashboard.html";
    } else {
        alert("Username atau password salah!");
    }
}