let base = parseInt (prompt("Ingrese el tamaño de la Base en cm"))
let altura = parseInt (prompt("Ingrese el tamaño de la altura en cm"))

function perimetro(base,altura) {
    if ((2*(base + altura))== Number(2*(base + altura))) {
        return ("El perimetro es Igual a " + (2*(base + altura)))
    } else {
        return ("Los valores ingresados no son numeros ")
    }    
}document.write(perimetro(base,altura))