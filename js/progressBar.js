function progressBar() {
    var bar = document.getElementById("javaBar")
    var progress = document.getElementById("centerTxt")
    var width = 0;
    var x = setInterval(frame, 50);

    function frame() {
        if (width >= 60) {
            clearInterval(x);
        } else {
            
            width++
            bar.style.width = width + '%';
            progress.innerHTML = width  + '%';
        }

    }
}