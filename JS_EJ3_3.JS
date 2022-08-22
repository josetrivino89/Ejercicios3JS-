//*3- Escribir un script que simule el lanzamiento de dos dados. Hacer uso de la función Math.random para obtener números aleatorios entre 1 y 6 para cada uno de los lanzamientos de los dados. Sumar el resultado de lanzar dos dados y anotar en un array el número de apariciones de dicha suma, repitiendo 50 veces esta operación.

//creamos un Array para acumular los valores de la suma
let Acumulador1 = [];
let Acumulador2 = [];
let Total = 0;

for (let i = 0; i<=50; i++) {
   //*armamos los dados
   Acumulador1.push(1 + Math.floor(Math.random()*6))
   Acumulador2.push(1 + Math.floor(Math.random()*6))
   //* sumamos los arrays
   Total += Acumulador1[i] + Acumulador2 [i]
          
}   document.write("Los N° al tirar 50 veces los dados son : " + (Acumulador1 + Acumulador2) + "<br>") 
    document.write("La suma de tirar 50 veces los dados nos da : " + (Total)+ "<br>") 
    




