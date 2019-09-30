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
            progress.innerHTML = width + '%';
        }
    }
}
function progressBar() {
    var bar = document.getElementById("sqlBar")
    var progress = document.getElementById("centerTxt")
    var width = 0;
    var x = setInterval(frame, 50);

    function frame() {
        if (width >= 60) {
            clearInterval(x);
        } else {
            width++
            bar.style.width = width + '%';
            progress.innerHTML = width + '%';
        }
    }
}
function progressBar() {
    var bar = document.getElementById("umlBar")
    var progress = document.getElementById("centerTxt")
    var width = 0;
    var x = setInterval(frame, 50);

    function frame() {
        if (width >= 60) {
            clearInterval(x);
        } else {
            width++
            bar.style.width = width + '%';
            progress.innerHTML = width + '%';
        }
    }
}
function progressBar() {
    var bar = document.getElementById("spanskaBar")
    var progress = document.getElementById("centerTxt")
    var width = 0;
    var x = setInterval(frame, 50);

    function frame() {
        if (width >= 60) {
            clearInterval(x);
        } else {
            width++
            bar.style.width = width + '%';
            progress.innerHTML = width + '%';
        }
    }
}







var isJavaCalled = false;
var isSQLCalled = false;
var isUMLCalled = false;
var isSpanCalled = false;

function progressBarMain() {
    
    if (!isJavaCalled) {
        var bar = document.getElementById("javaProg")
        var progress = document.getElementById("progTxtJava")
        var width = 0;
        var x = setInterval(frame, 50);
        isJavaCalled = true;

        function frame() {
            if (width >= 60) {
                clearInterval(x);
            } else {
                width++
                bar.style.width = width + '%';
                progress.innerHTML = width + '%';
            }
        }
    }

    else if (!isSQLCalled) {
        var bar = document.getElementById("sqlProg")
        var progress = document.getElementById("progTxtSQL")
        var width = 0;
        var x = setInterval(frame, 50);
        isSQLCalled = true;

        function frame() {
            if (width >= 60) {
                clearInterval(x);
            } else {
                width++
                bar.style.width = width + '%';
                progress.innerHTML = width + '%';
            }
        }
    }

    else if (!isUMLCalled) {
        var bar = document.getElementById("umlProg")
        var progress = document.getElementById("progTxtUML")
        var width = 0;
        var x = setInterval(frame, 50);
        isUMLCalled = true;

        function frame() {
            if (width >= 60) {
                clearInterval(x);
            } else {
                width++
                bar.style.width = width + '%';
                progress.innerHTML = width + '%';
            }
        }
    }

    else if (!isSpanCalled) {
        var bar = document.getElementById("spanProg")
        var progress = document.getElementById("progTxtSpan")
        var width = 0;
        var x = setInterval(frame, 50);
        isSpanCalled = true;

        function frame() {
            if (width >= 60) {
                clearInterval(x);
            } else {
                width++
                bar.style.width = width + '%';
                progress.innerHTML = width + '%';
            }
        }
    }
}

