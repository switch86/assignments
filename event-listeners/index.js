var box = document.getElementById("box");
box.addEventListener("mouseenter", blue);
box.addEventListener("mousedown", red);
box.addEventListener("mouseup", yellow);
box.addEventListener("dblclick", green);
document.body.addEventListener("mousewheel", orange);


function blue() {
    box.style.background = "blue";
}

function red() {
    box.style.background = "red";
}
function yellow() {
    box.style.background = "yellow";
}
function green() {
    box.style.background = "green";
}
function orange() {
    box.style.background = "orange";
}

var char = document.addEventListener("keydown", select)
function select(char) {
    if (char.key == "b") {
        box.style.background = "blue";
    } else if (char.key == "r") {
        box.style.background = "red";
    } else if (char.key == "y") {
        box.style.background = "yellow";
    } else if (char.key == "g") {
        box.style.background = "green";
    } else if (char.key == "o") {
        box.style.background = "orange";
    }
}