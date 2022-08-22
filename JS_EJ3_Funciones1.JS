//*Funciones
// Dificultad:  🟢
// 1- Escribir el código de una función a la que se pasa como parámetro un número entero y devuelve como resultado una cadena de texto que indica si el número es par o impar. Mostrar por pantalla el resultado devuelto por la función.


let numero_usuario = Number(prompt("Ingrese un numero para verificar si es Par o Impar"))

function tiponumero(numero_usuario ) {
    if (numero_usuario % 2 == 0) {
        return ("El numero " + numero_usuario + " es Par!")     

    }else if(Number (numero_usuario) !== (numero_usuario)){
        return ("Lo ingresado no es un numero")             
        
    }else 
        return ("El numero " + numero_usuario + " es imPar!")
    }    
    document.write(tiponumero(numero_usuario))
            
        
 
    

    



