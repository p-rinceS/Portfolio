        // this is my first java script code
        let cursor = document.getElementById('cursor');

        let div = document.getElementById("X-Value");
        let div2 = document.getElementById("Y-Value");

        document.addEventListener('mousemove', function(e){
                
                
               var x = e.x;
               var y = e.y;
                
               div.textContent = e.clientX;
               div2.textContent = e.clientY;
               cursor.style.left = x + "px";
               cursor.style.top = y + "px";
        });
