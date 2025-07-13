export function home() {
  return `
    <head>
    <link rel="stylesheet" href="./src/css/home.css">
    </head>
    <header>
        <h2>Bienvenido a</h2>
        <h1> Barranquilla online school 🏫</h1>
    </header>
    <main>
        <div>
            <a id="login-user" href="/login" data-link>Ingresar</a>
            <a id="register-user" href="/register" data-link>Registrarse</a>
        </div>
    </main>
  `;
}

export function homeLogin() {
  const $btnLogin = document.getElementById("login-user");
  if ($btnLogin) {
    $btnLogin.addEventListener("click", (event) => {
      event.preventDefault();
      render("/login"); // Llamar directamente a render para cambiar la vista
    });
  }
}

export function homeRegister() {
  const $btnRegister = document.getElementById("register-user");
  if ($btnRegister) {
    $btnRegister.addEventListener("click", (event) => {
      event.preventDefault()
      render("/register"); // Llamar directamente a render para cambiar la vista
    });
  }
}