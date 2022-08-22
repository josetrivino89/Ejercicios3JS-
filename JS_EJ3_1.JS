//*1- Crear un array llamado meses y que almacene el nombre de los doce meses del año. Mostrar por pantalla en forma de lista  los doce nombres del arreglo.

let meses =["Enero","Febrero","Marzo","Abril", "Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre",]
   
// document.write("<br> 1-"+ meses.slice(0,1))
// document.write("<br> 2-"+ meses.slice(1,2))
// document.write("<br> 3-"+ meses.slice(2,3))
// document.write("<br> 4-"+ meses.slice(3,4))
// document.write("<br> 5-"+ meses.slice(4,5))
// document.write("<br> 6-"+ meses.slice(5,6))
// document.write("<br> 7-"+ meses.slice(6,7))
// document.write("<br> 8-"+ meses.slice(7,8))
// document.write("<br> 9-"+ meses.slice(8,9))
// document.write("<br> 10-"+ meses.slice(9,10))
// document.write("<br> 11-"+ meses.slice(10,11))
// document.write("<br> 12-"+ meses.slice(11,12))

// otra forma:
 for (let index = 0; index < meses.length; index++) {
    document.write(meses[index]+ "<br>")
    
 }