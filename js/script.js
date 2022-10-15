// HOME Page
function toggleMenu() {
    document.getElementById("primary-nav").classList.toggle("open");
}
let menu = document.getElementById("hamburger-btn");
menu.onclick = toggleMenu;

const today = new Date();
let currentYear = today.getFullYear();
document.getElementById("year").innerHTML = currentYear;