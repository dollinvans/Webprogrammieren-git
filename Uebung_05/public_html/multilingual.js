var eng = false;
function changeLang() {

    $("img").toggle();
    $(".wechsel").toggle();
    $(".submit").toggle();
    $("button").toggle();

    eng = true;
    document.getElementById('error').innerHTML = '';
}

function changeLang2() {

    $("img").toggle();
    $(".wechsel").toggle();
    $(".submit").toggle();
    $("button").toggle();

    eng = false;
    document.getElementById('error').innerHTML = '';
}

////#########--------------------PW Check------------------------#########
var check;
function pruefenpw() {
    var Eingabepw01 = document.getElementById("pw1").value;
    var Eingabepw02 = document.getElementById("pw2").value;
    console.log(Eingabepw01);
    console.log(Eingabepw02 + "  sind gleich");
    if (Eingabepw01 !== Eingabepw02)
    {
        console.log(Eingabepw01);
        console.log(Eingabepw02 + "  ungleich");
        alert("Die Passwörter stimmen nicht überein!");
        check = false;
    } else
        check = true;
}

var mailcheck;
function pruefenmail() {

    var email = document.getElementById("email").value;

    var char = /^[a-z][a-z0-9]+@[a-z]{2,}\.[a-z]{2,3}$/;
    if (email.match(char)) {

        document.getElementById('icon').innerHTML = '<img src="icon/check.png" style ="width: 14px; height: 14px; position: relative; margin-left: 5px;">';
        mailcheck = true;
    } else {
        document.getElementById('icon').innerHTML = '<img src="icon/uncheck.png" style ="width: 14px; height: 14px; position: relative; margin-left: 5px;">';
        mailcheck = false;
    }
}

function absenden() {
    var nutzername = document.getElementById('nutzername').value;
    var pw1 = document.getElementById("pw1").value;
    var pw2 = document.getElementById("pw2").value;
    var vorname = document.getElementById("vorname").value;
    var nachname = document.getElementById("nachname").value;
    var email = document.getElementById("email").value;

    if (nutzername === "" || pw1 === "" || pw2 === "" || vorname === "" || nachname === "" || email === "" || check === false || mailcheck === false)
    {
        if (eng === false) {

            document.getElementById('error').innerHTML = 'Fill out all the areas with *!';
        } else {
            document.getElementById('error').innerHTML = 'Alle mit dem * gekennzeichneten Felder ausfüllen!';
        }

    } else {
        if (eng === false) {

            document.getElementById('error').innerHTML = 'Everything is fine.';
        } else {
            document.getElementById('error').innerHTML = 'Alles ist OK.';
        }
    }
}

function slidedw(){
    $("#box").slideToggle("slow");
}
