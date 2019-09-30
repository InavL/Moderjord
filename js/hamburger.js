function hamburger(x) {
    x.classList.toggle("change");
}

function hamMenu1() {
    var x = document.getElementById("pop");
    if (x.className === "popupMenu") {
        x.className += " responsive";
    } else {
        x.className = "popupMenu";
    }
}