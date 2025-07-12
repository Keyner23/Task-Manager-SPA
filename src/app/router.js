import { dashboardE } from "./views/dashboardE.js";
import { home } from "./views/home.js";
import { login, loginValidation } from "./views/login.js";
import { register } from "./views/register.js";

const routes = {
    "/": home,
    "/login": login,
    "/register": register,
    "/dashboardE": dashboardE,
};

function render(path) {
    const view = document.getElementById("view");
    const route = routes[path] || (() => "<h1>404 - Página no encontrada</h1>");
    view.innerHTML = route();

    if (path === "/login") {
        view.innerHTML = login();
        loginValidation();
    }
}


export function router() {
    document.body.addEventListener("click", (event) => {
        if (event.target.matches("a[data-link]")) {
            event.preventDefault();
            const path = event.target.getAttribute("href");// Obtiene la ruta del enlace
            history.pushState({}, "", path);
            render(path);// Llama a una función render para mostrar el contenido correspondiente
        }
    });

    // window.addEventListener("popstate", () => {
    //     render(location.pathname);
    // });
    render(location.pathname);
}
