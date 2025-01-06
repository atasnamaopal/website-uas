let pengguna = [
    { username: "admin", password: "123456" },
    { username: "user", password: "password" }
  ];
  
  // Fungsi untuk memeriksa login
  function cekLogin() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
  
    pengguna.forEach((user) => {
    if (username === user.username && password === user.password) {
    // Login berhasil
    window.location.href = "index.html";
    alert("Login berhasil!");
    return;
    }
    });
  
    // Login gagal
    document.getElementById("pesan-error").innerHTML = "Username atau password salah!";
  }
  
  // Menambahkan event listener pada tombol login
  document.getElementById("btn-login").addEventListener("click", (e) => {
    e.preventDefault();
    cekLogin();
  });