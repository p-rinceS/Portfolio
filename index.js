        // this is my first java script code
        let myDiv = document.getElementById("cursor");

        let div = document.getElementById("X-Value");
        let div2 = document.getElementById("Y-Value");

        window.addEventListener('mousemove', function(e){
                
               var x = e.x;
               var y = e.y;
                
               div.textContent = e.x;
               div2.textContent = e.y;
               myDiv.style.left = x + "px";
               myDiv.style.top = y + "px";
        });
