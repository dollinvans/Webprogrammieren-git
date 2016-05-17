
////#########--------------------Aufgabe 1-------------------------#########
//#####----------------------Aufgabe 3-------------------------------#####
var zahl1 = 3.14;
var nummer1 = "dreikommavierzehn";

document.write(zahl1 + "<br>" + nummer1);

var zahl2 = "dreikommavierzehn";
var nummer2 = 3.14;

document.write("<br>" + zahl2 + "<br>" + nummer2);


//#####--------------------Aufgabe 4-------------------------------#####
var zahl3 = 42;

if ((zahl3 % 2) === 1) {
    document.write("<br> ungerade");
} else {
    document.write("<br> gerade");
}


//#####---------------Aufgabe 5 - Zahlenreihe----------------------#####
//------------While----------
document.write("<br>");
document.write("<br>while-Schleife<br>");
var i = 2;
var a = 0;
while (i < 100) {
    document.write(i + ", ");
    a = a + i;
    i += 3;
     
}
document.write("<br>Endergebnis: "+a);


//----------do While----------
document.write("<br>");
document.write("<br>do while-Schleife<br>");
var j = 2;
var a1 = 0;
do {
    a1 = a1 + j;
    document.write(j + ", ");
    j += 3;
} while (j <= 100);
document.write("<br>Endergebnis: "+a1);


//------------for------------
document.write("<br>");
document.write("<br>for-Schleife<br>");
var a2 = 0;
for (k = 2; k <= 100; k++) {
    a2 = a2 + k;
    document.write(k + ", ");
    k += 2;
}
document.write("<br>Endergebnis: "+a2);


//#####---------------Aufgabe 6 - Windowbox------------------------#####
//-----------alert--------
alert("Hello World --alert--");

//--------confirm---------
document.write("<br>");
document.write("<br>Confirm-Box<br>");
if (confirm("Hello World--confirm--") === true) {
   document.write("OK");
} else {
   document.write("Abbrechen");
}

//----------prompt--------
document.write("<br>");
document.write("<br>Prompt-Box<br>");
var name = prompt("Bitte Namen eingeben:");
document.write(name);


//#########--------------------Aufgabe 2-----------------------#########
//#####---------------Aufgabe 1 - Function-------------------------#####
function hello(){
    document.write("<br>");
    document.write("Hello Sommer of 2016 (Function)");   
}


//#####------------Aufgabe 2 - Function Temperatur------------------#####
var celsius = 23;
document.write("<br> <br>");  
document.write(celsius+"° Celsius sind umgerechnet ca.: " + temperatur(celsius) + "° Fahrenheit");
function temperatur(celsius) {
    var temp = 9/5 * celsius+32;    
    return Math.round(temp *100)/100;
}


//#####------------Aufgabe 3 - String Konkatetnation------------------#####
//----------Iterativ----------
var buchstaben = "Aocdwdk";
var multiplikator = 3;
document.write("<br> <br>");
document.write("Iterativ:<br>"+stringsIterativ(multiplikator,buchstaben)+" <br>");
function stringsIterativ(multiplikator,buchstaben){
    var i = 0;
    var e ="";
    while (i < multiplikator){
        e= buchstaben + e;
        i++;
    }
    return e;
}

//----------Rekursiv----------
var buchstaben1 = "Xfdg";
var multiplikator1 = 6;
document.write("<br>Rekursiv:<br>"+stringsRekursiv(multiplikator1,buchstaben1)+" <br>");
function stringsRekursiv(multiplikator1,buchstaben1){
    if(multiplikator1 === 0){
        return "";
    }
    else
        return (stringsRekursiv(multiplikator1 -1,buchstaben1) + buchstaben1);      
}


