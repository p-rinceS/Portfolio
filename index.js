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
               cursor.style.color

  
        });

        // cursor transparency
        
        var audio = new Audio("old_click_sound.mp3");

        addEventListener('click', function(event){

                audio.play();
                cursor.style.opacity = 1;
                setTimeout(() => {cursor.style.opacity = .5;}, 100);

        });