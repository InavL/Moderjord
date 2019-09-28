        function progressBar(){
            var bar = document.getElementById("javaBar")
            var width = 0;
            var x = setInterval(frame,10);
            function frame(){
                if(width>=60){
                    clearInterval(x);
                }else {width++
                    bar.style.with = width + '%';
                    bar.innerHTML = width + 1 +'%';
                }

            }
        }

        function progressBar(){
            var bar = document.getElementById("sqlBar")
            var width = 0;
            var x = setInterval(frame,10);
            function frame(){
                if(width>=60){
                    clearInterval(x);
                }else {width++
                    bar.style.with = width + '%';
                    bar.innerHTML = width + 1 +'%';
                }

            }
        }
        function progressBar(){
            var bar = document.getElementById("umlBar")
            var width = 0;
            var x = setInterval(frame,10);
            function frame(){
                if(width>=60){
                    clearInterval(x);
                }else {width++
                    bar.style.with = width + '%';
                    bar.innerHTML = width + 1 +'%';
                }

            }
        }
        function progressBar(){
            var bar = document.getElementById("spBar")
            var width = 0;
            var x = setInterval(frame,10);
            function frame(){
                if(width>=60){
                    clearInterval(x);
                }else {width++
                    bar.style.with = width + '%';
                    bar.innerHTML = width + 1 +'%';
                }

            }
        }
