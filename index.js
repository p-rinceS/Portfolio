        // this is my first java script code
        let cursor = document.getElementById('cursor');

        let div = document.getElementById("X-Value");
        let div2 = document.getElementById("Y-Value");

        document.addEventListener('mousemove', function(e){
                var onmousestop = function() {
                        console.log("test");
                      }, thread;
                
               var x = e.x;
               var y = e.y;
                
               div.textContent = e.clientX;
               div2.textContent = e.clientY;
               cursor.style.left = x + "px";
               cursor.style.top = y + "px";

        });

        // cursor transparency
        // and click audio

        // change if you want to change clickSound"
        var clickSound = new Audio("old_click_sound.mp3");

        addEventListener('click', function(event){

                clickSound.play();
                cursor.style.opacity = 0;
                setTimeout(() => {cursor.style.opacity = 1;}, 150);

        });