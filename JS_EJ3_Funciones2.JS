let texto_usuario = (prompt("Ingrese un texto"))
let texto_usuario_minusculas = texto_usuario.toLowerCase()
let texto_usuario_mayuscula = texto_usuario.toUpperCase()


function texto(texto_usuario) {
    if (texto_usuario === texto_usuario_mayuscula ) {
        return ("La frase entera esta en Mayusculas")     

    }else if(texto_usuario === texto_usuario_minusculas){
        return ("La frase entera esta en minusculas")             
        
    }else 
        return ("La frase tiene un MIX de Mayusculas y Minusculas")
    }    
    document.write(texto(texto_usuario))