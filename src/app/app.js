import { router } from "./router.js";

const root = document.getElementById("root");

//el contenido dinámico
root.innerHTML = `
  <div id="view"></div>
`;

router(); // Inicializar router
