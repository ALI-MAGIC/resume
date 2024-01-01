function showMenu() {
    var navMenu = document.getElementById("nav-menu");
    if (navMenu.className === "header-menu") {
        navMenu.className += " show";
        document.querySelector(".menu-burger-icon i").style = "color : #fff";
        document.querySelector(".menu-burger-icon i").setAttribute('class', 'fa fa-close');
    } else {
        navMenu.className = "header-menu";
        document.querySelector(".menu-burger-icon i").style = "color : #c76a00";
        document.querySelector(".menu-burger-icon i").setAttribute('class', 'fa fa-bars');
    }
}