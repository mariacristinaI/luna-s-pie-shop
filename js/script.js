// HOME Page
function toggleMenu() {
    document.getElementById("primary-nav").classList.toggle("open");
}
let menu = document.getElementById("hamburger-btn");
menu.onclick = toggleMenu;