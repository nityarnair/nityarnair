const menu = document.querySelector(".menu-btn");
const nav = document.querySelector(".nav-links");

menu.addEventListener("click", () => {

    if(nav.style.display === "flex"){

        nav.style.display = "none";

    }else{

        nav.style.display = "flex";
        nav.style.flexDirection = "column";
        nav.style.position = "absolute";
        nav.style.top = "80px";
        nav.style.right = "20px";
        nav.style.padding = "20px";
        nav.style.borderRadius = "15px";
        nav.style.background = "#1e293b";

    }

});