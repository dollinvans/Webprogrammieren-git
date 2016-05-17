////#########--------------------Aufgabe 1-------------------------#########
//#####----------------------Aufgabe 1.1-------------------------------#####
var myArray = [];

function add() {
    zwischen = document.getElementById("eingabe").value;
    console.log(zwischen);
    myArray.push(zwischen);
    console.log(myArray);
    return myArray;
}

function ausgabe() {
    document.getElementById("demo").innerHTML = myArray;
}

//#####----------------------Aufgabe 1.2-------------------------------#####
var arr = [
    [1, 2],
    [40, 50, 60],
    [42, 77, 18, 9]
];

function multi() {
    console.log(arr);
    return arr;

}
document.write(multi());


////#########--------------------Aufgabe 2-------------------------#########
function pruefen() {
    var Eingabepw01 = document.getElementById("pw1").value;
    var Eingabepw02 = document.getElementById("pw2").value;
    console.log(Eingabepw01);
    console.log(Eingabepw02+"  sind gleich");
    if (Eingabepw01 !== Eingabepw02)
    {
        console.log(Eingabepw01);
        console.log(Eingabepw02+"  ungleich");
        alert("Die Passwörter stimmen nicht überein!");
    }
}

