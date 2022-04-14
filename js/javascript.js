const navHamburguesa = document.querySelector(".navegador__hamburguesa")
const navMenu = document.querySelector(".navegador__menu")

navHamburguesa.addEventListener("click", () => {
    navMenu.classList.toggle("navegador__menu_visible")
})