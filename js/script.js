document .addEventListener('DOMContentLoaded', function() {
    let menuIcone = document.getElementById("menu-icone");
    let menu = document.getElementById("menu")

    menuIcone.addEventListener('click', function(){
        menu.classList.toggle('active');
    });
});