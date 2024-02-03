const navIcon = document.querySelector(".mobile-nav-icon-container");

function toogleNav() {
    navIcon.classList.toggle("change");
}

navIcon.addEventListener("click", toogleNav);