import { router } from "../router";

export function login() {
    return `
    <head>
    <link rel="stylesheet" href="./src/css/login.css">
    </head>
    <body>
        <main>
            <h2>Iniciar Sesión</h2>
            <form id="form">
                <input id="email" type="email" placeholder="Email" required>
                <input id="password" type="password" placeholder="Contraseña" required>
                <button id="btn-login" type="submit">Entrar</button>
            </form>
            <div>
                <p>¿No tienes cuenta? <a href="/register">Regístrate aqui</a></p>
                <a href="/" class="volver">← Volver al inicio</a>
            </div>
        </main>
    </body>
    `;
}

export function loginValidation() {
    const $email = document.getElementById("email");
    const $password = document.getElementById("password");
    const $form = document.getElementById("form");
    const urlApi = "http://localhost:3000/users";

    $form.addEventListener("submit", async function (event) {
        event.preventDefault();
        try {
            const response = await fetch(`${urlApi}?email=${$email.value}`);
            const data = await response.json();

            if (data.length !== 1) return errorUser();

            if (data[0].password === $password.value) {
                localStorage.setItem("currentUser", JSON.stringify(data[0]));
                if (data[0].roleId === "2") {
                    window.location.href = "./dashboardT";
                } else if (data[0].roleId === "1") {
                    window.location.href = "./dashboardE";
                }
            } else {
                alert("error aqui")
            }
        } catch (error) {
            console.error("Error al iniciar sesión", error);
        }
    });
}
