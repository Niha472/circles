canvas= document.getElementById("mycanvas");
ctx=canvas.getContext("2d");
Color="black"
ctx.beginPath();
ctx.strokeStyle=Color;
ctx.lineWidth=2;
ctx.arc(200,200,40,0,2*Math.PI);
ctx.stroke()
ctx.beginPath();
ctx.strokeStyle="Blue";
ctx.lineWidth=2;
ctx.arc(250,200,40,0,2*Math.PI);
ctx.stroke()
ctx.beginPath();
ctx.strokeStyle="Green";
ctx.lineWidth=2;
ctx.arc(300,200,40,0,2*Math.PI);
ctx.stroke()
ctx.beginPath();
ctx.strokeStyle="Wi";
ctx.lineWidth=2;
ctx.arc(225,250,40,0,2*Math.PI);
ctx.stroke()
canvas.addEventListener("mousedown", my_mousedown);
 function my_mousedown(e) 
 {
      //taking color from input box //additional activity start
       Color = document.getElementById("color").value;
        console.log(color);
         //addition activity ends
          mouse_x = e.clientX - canvas.getBoundingClientRect().left;
           mouse_y = e.clientY - canvas.getBoundingClientRect().top;
            console.log("X = " + mouse_x + " ,Y = " + mouse_y);
             circle(mouse_x , mouse_y);
             }
              function circle(mouse_x , mouse_y)
               { ctx.beginPath(); ctx.strokeStyle = color;
                 ctx.lineWidth = 2; ctx.arc(mouse_x, mouse_y, 40 ,0 , 2*Math.PI);
                  ctx.stroke();
                 }