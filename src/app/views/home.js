export function home() {
  return `
    <body>
    <header>
        <h2>Bienvenido a</h2>
        <h1> Barranquilla online school 🏫</h1>
    </header>
    <main>
        <div>
            <a href="src/views/login.html">Iniciar Sesión</a>
            <a href="src/views/register.html">Registrarse</a>
        </div>
    </main>
    <script type="module" src="./src/js/main.js"></script>
</body>
  `;
}
