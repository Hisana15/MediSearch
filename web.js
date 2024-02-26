$(document).ready(function () {
    $(".toggle-bars").click(function () {
        $(".nav").slideToggle("fast");
    });
});

let menu_icon_box = document.querySelector(".menu_icon_box");

        menu_icon_box.onclick = function(){
            menu_icon_box.classList.toggle("active");
        }