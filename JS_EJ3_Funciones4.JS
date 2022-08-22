 let multiplicando = prompt("ingrese para armar una tabla de multiplicar");

 function multiplicador() {

       if (multiplicando == Number(multiplicando)){

             for (let index = 1; index <=10; index++)  
              
               return (multiplicando + "*" + index +"="+ index * multiplicando + "<br>")      
         
       }else 
             return ("Lo ingresado no es un numero")   

    
 }document.write(multiplicador(multiplicando))
 
