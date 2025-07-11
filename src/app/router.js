import { home } from "./views/home.js";
import { About } from "./views/about.js";
import { Contact } from "./views/contact.js";

const routes = {
    "/": home,
    "/about": About,
    "/contact": Contact,
};

function render(path) {
    const view = document.getElementById("view");
    const route = routes[path] || (() => "<h1>404 - Página no encontrada</h1>");
    view.innerHTML = route();
}

export function router() {
    // Al hacer clic en enlaces
    document.body.addEventListener("click", (e) => {
        if (e.target.matches("a[data-link]")) {
            e.preventDefault();
            const path = e.target.getAttribute("href");
            history.pushState({}, "", path);
            render(path);
        }
    });

    // Al navegar con botones del navegador
    window.addEventListener("popstate", () => {
        render(location.pathname);
    });

    // Al cargar la página
    render(location.pathname);
}
