export function register() {
  return `
    <head>
    <link rel="stylesheet" href="./src/css/register.css">
    </head>
    <body>
      <main>
          <h2>Crear Cuenta</h2>
          <form id="register-form">
              <input id="name" type="text" placeholder="Nombre completo" required>
              <input id="email" type="email" placeholder="Email" required>
              <input id="password" type="password" placeholder="Contraseña" required>
              <button type="submit">Registrarse</button>
          </form>
          <div>
              <p>¿Ya tienes cuenta? <a href="/login">Inicia sesión</a></p>
              <a href="/" class="volver">← Volver al inicio</a>
          </div>
      </main>
  </body>
  `;
}
