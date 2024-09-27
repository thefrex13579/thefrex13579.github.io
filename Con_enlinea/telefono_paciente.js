document.getElementById("bton_open").addEventListener("click", open_menu);

var bton_open = document.getElementById("bton_open");
var body = document.getElementById("body");
var navg = document.getElementById("navg")

function open_menu(){
    body.classList.toggle("body_move");
    navg.classList.toggle("navg_side_move");
}