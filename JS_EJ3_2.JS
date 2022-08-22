//*2-  Crear un script que solicite al usuario mediante un prompt el nombre de ciudades y almacenarlas en un arreglo, cuando el usuario selecciona cancelar se debe mostrar el arreglo generado, luego realizar las siguientes acciones:

// Mostrar la longitud del arreglo.
// Mostrar en el documento web los ítems de las posiciones primera, tercera y última.
// Añade en última posición la ciudad de París.
// Escribe por pantalla el elemento que ocupa la segunda posición.
// Sustituye el elemento que ocupa la segunda posición por la ciudad de 'Barcelona'.

let nombre_ciudades = [] ;
    
do{ let ciudades_usuario = String( prompt("Ingreses aqui sus ciudades Favoritas"));
   nombre_ciudades.push(ciudades_usuario);
} while (confirm(" vas a ingresar otra ciudad?")){

    // Listado de Ciudades:

    document.write( " Tus ciudades favoritas son : " + nombre_ciudades + "<br>")

    // longitud del array:

    document.write( "La longitu de maxima del Array es :" + nombre_ciudades.length + "<br>")   

    // posiciones del arreglo:
    
    document.write( "La Primera ciudad es : " + nombre_ciudades.slice(0,1)+"<br>")
    document.write( "La Tercera ciudad es : " + nombre_ciudades.slice(2,3)+"<br>")
    document.write( "La Ultima ciudad es : " + nombre_ciudades[nombre_ciudades.length-1]+ "<br>")

    // añadir Paris
    nombre_ciudades.push("Paris")
    document.write(" Agrego Paris al final " +  nombre_ciudades + "<br>")

    //Escribir por pantalla la segunda posicion
    document.write( "La Segunda ciudad es : " + nombre_ciudades.slice(1,2)+"<br>")

    //sustitur el segundo elemento por Barcelona:
    nombre_ciudades.splice(1,1,"Barcelona") 

    document.write( " Con Barcelona :" + nombre_ciudades + "<br>")



   


     
} 



