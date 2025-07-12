
export function dashboardE() {
    return `
    <head>
    <link rel="stylesheet" href="./src/css/dashboardE.css">
    </head>
    <body>
        <header>
            <h1 id="header">Bienvenido estudiante a tu aula virtual</h1>
            <a id="logoutBtn" href="/"><button>Cerrar sesión</button></a>
        </header>

        <main>
            <section class="task-form">
                <h2>Añada sus materias aqui</h2>
                <form action="#">
                    <input id="student" type="text" placeholder="Estudiante" disabled />
                    <label for="">Asignatura</label>
                    <select id="subject">
                        <option value="calculo">Calculo</option>
                        <option value="programacion1">Programacion 1</option>
                        <option value="catedra">Catedra</option>
                        <option value="base de datos">Base de datos</option>
                        <option value="ingles">Ingles</option>
                    </select>
                    <label>Semetre</label>
                    <input type="number" id="semester"/>
                    <label>Jornada</label>
                    <select id="">
                        <option value="diurna">Diurna</option>
                        <option value="nocturna">Noctuna</option>
                    </select>
                    <button id="btn-submit" type="submit">Matricular Materia</button>
                </form>
            </section>

            <section  id="task-list">
                <!--mostrar las tareas -->
            </section>
            
        </main>
        <footer>
            <p>Sistema creado por <a href="https://github.com/Keyner23">Keyner Barrios</a></p>
        </footer>
    </body>
    `}

