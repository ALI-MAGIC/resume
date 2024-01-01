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

function showMenuFa(){
    var navMenuFa = document.getElementById("nav-menuFa");
    if (navMenuFa.className === "header-menuFa") {
        navMenuFa.className += " show";
        document.querySelector(".menu-burger-iconFa i").style = "color : #fff";
        document.querySelector(".menu-burger-iconFa i").setAttribute('class', 'fa fa-close');
    } else {
        navMenuFa.className = "header-menuFa";
        document.querySelector(".menu-burger-iconFa i").style = "color : #c76a00";
        document.querySelector(".menu-burger-iconFa i").setAttribute('class', 'fa fa-bars');
    }
}
