var numero1 = prompt("Ingrese un numero distinto de cero");
var numero2 = prompt("Ingrese un numero distinto de cero y distinto al anterior");

var suma = parseInt(numero1) + parseInt(numero2);
var resta = numero1 - numero2;
var multiplicacion = numero1 * numero2;
var division = numero1 / numero2;
var modulo = numero1 % numero2;


document.write( "La suma de ambos numeros es:   "+suma);
document.write("<br>");
document.write( "La resta de ambos numeros es: " + resta);
document.write(" <br> ");
document.write( "La multiplicación de ambos numeros es: " + multiplicacion);
document.write(" <br>");
document.write( "La división de ambos numeros es: " + division);
document.write(" <br> ");
document.write( "El modulo de ambos numeros es: " + modulo);
document.write(" <br><br><br> ");


var celsius = prompt("Ingrese una temperatura en grados Celsius para ver su equivalente en Fahrenheit y en Kelvin");

var fahreinheit = (celsius * (9/5)) + 32;
var kelvin = (parseFloat(celsius) + parseFloat(273.15));

document.write( celsius +"ºC es equivalente a "+ kelvin + "ºK");
document.write(" <br> ");
document.write( celsius +"ºC es equivalente a "+ fahreinheit + "ºF");
document.write(" <br><br><br> ");

var dias = prompt(" Ingrese una cantidad de días para ver su equivalente en años, semanas y días. ");

var anos = Math.floor(dias/365);
var restante = dias - (anos * 365);
var semanas = Math.floor(restante/7);
var dias = restante - (semanas * 7);


document.write( "Los días ingresados equivalen a "+ anos + " años, "+ semanas +" semanas y "+ dias + " días." );
document.write(" <br><br><br> ");

var num = prompt(" A continuación deberá ingresar 5 números, comience con el primero.  ");
var numtwo = prompt("Ingrese el segundo número.");
var numthree = prompt("Ingrese el tercer número.");
var numfour = prompt("Ingrese el cuarto número. ");
var numfive = prompt("Ingrese el quinto número. ");

var all = parseInt(num) + parseInt(numtwo) + parseInt(numthree) + parseInt(numfour) + parseInt(numfive);
var prom = all/5;

document.write(" La suma de todos los números es: "+ all);
document.write(" <br> ");
document.write(" El promedio de los números es: "+ prom);







