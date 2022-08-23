const botonAceptarCookies = document.getElementById("btn-aceptar-cookies");
const avisoCookies = document.getElementById("aviso-cookies");
const fondoAvisoCookies = document.getElementById("fondo-ads-cookies");

dataLayer = [];

if (!localStorage.getItem("cookies-aceptadas", true)) {
    avisoCookies.classList.add("activo");
    fondoAvisoCookies.classList.add("activo");
} else {
    dataLayer.push({'event': 'aceptaporfa'})
};


botonAceptarCookies.addEventListener("click", () => {
    avisoCookies.classList.remove("activo");
    fondoAvisoCookies.classList.remove("activo");

    localStorage.setItem("cookies-aceptadas", true);

    dataLayer.push({'event': 'aceptaporfa'})
    
});