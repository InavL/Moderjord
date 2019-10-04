fNameBoolean = new Boolean;
eNameBoolean = new Boolean;
numberBoolean = new Boolean;
emailBoolean = new Boolean;
messageBoolean = new Boolean;
fNameBoolean = true;
eNameBoolean = true;
numberBoolean = true;
emailBoolean = true;
messageBoolean = true;


//The button is used to store the data in the form

$(document).ready(function () {
    $("#btSaveForm").click(function () {

        //If the user input has been approved throug the validation only then may the user input be stored. 
        //This is made possible with the infromation from 
        //the check-functions downbelow and the following Boolean if-statement.

        if (fNameBoolean == true && eNameBoolean == true && numberBoolean == true && emailBoolean == true && messageBoolean == true) {
            console.log("Funkar tills array");

            // Gets all the forms elements and their values in one step
            var values = $('#theForm').serializeArray();
            console.log(values);

            //The data is stored in a JSON and then set to the localstorage of the
            // used webbpage (cookis).
            var theNewJSON = JSON.stringify(values);
            localStorage.setItem("theJSON", theNewJSON);
        }
    });
});

//retrives the JSON from the localstorge

$(document).ready(function () {
    var loadJSON = JSON.parse(localStorage.getItem('theJSON'));
    putDataInTheForm(loadJSON);
});

//populates the from with the elements

function putDataInTheForm(data) {
    for (i in data) {
        $('input[name=' + data[i].name + ']').val(data[i].value);
    }
}


//Following functions validates input in the form from user.
//Val is a jquery function that retrives the data from the input fieled.
//The pattern.test method returns a Boolean which in this case changes the 
//outcome for the grafical feedback and if the data can be
//stored in the system.


function checkFirstName() {
    var fname = $("#fname").val();
    var pattern = /^[a-zA-Z]{3,}\s?([a-zA-Z]{1,})?$/;
    if (pattern.test(fname) == true) {
        fNameBoolean = true;

        document.getElementById("pCheckFname").innerHTML = "Correct";
    } else {
        fNameBoolean = false;

        document.getElementById("pCheckFname").innerHTML = "Type in correct infromation";
    }
}

function checkLastName() {
    var name = $("#ename").val();

    var pattern = /^[a-zA-Z]{3,}\s?([a-zA-Z]{1,})?$/;
    if (pattern.test(name) == true) {

        eNameBoolean = true;
        document.getElementById("pCheckEname").innerHTML = "Correct";
    } else {

        eNameBoolean = false;


        document.getElementById("pCheckEname").innerHTML = "Type in correct infromation";
    }
}

//the pattern sets a criteria for the infromation the user types into the form.

function checkEmail() {
    var email = $("#email").val();
    var pattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (pattern.test(email) == true) {
        emailBoolean = true;
        document.getElementById("pCheckEmail").innerHTML = "Correct";
    } else {
        emailBoolean = false;
        //this changes the grafical feedback to the user
        document.getElementById("pCheckEmail").innerHTML = "Type in correct infromation";
    }
}

function checkPhoneNumber() {
    var number = $("#mobile").val();
    var pattern = /^\d{10}$/;
    if (pattern.test(number) == true) {
        numberBoolean = true;
        document.getElementById("pCheckNumber").innerHTML = "Correct";
    } else {
        numberBoolean = false;
        check = true;
        document.getElementById("pCheckNumber").innerHTML = "Type in correct infromation";
    }
}

function checkMessage() {
    var message = $("#message").val();

    var pattern = /.{1,}/;
    if (pattern.test(message) == true) {
        messageBoolean = true;

        document.getElementById("pCheckMessage").innerHTML = "Correct";
    } else {
        messageBoolean = false;
        check = true;
        document.getElementById("pCheckMessage").innerHTML = "Type in correct infromation";
    }
}

//On("keyup") kör funktionen när en nedtryckt tangent släpps
//Funktionen gör att valdering kan ske under tiden användaren skriver
//när funktionen körs aktiveras validerings funktionen.

$(document).ready(function () {
    $("#fname").on("keyup", function () {
        console.log("förnamn redo");
        checkFirstName();
    });

    $("#ename").on("keyup", function () {
        console.log("enamn redo");
        checkLastName();
    });

    $("#email").on("keyup", function () {
        console.log("mail redo");
        checkEmail();
    });

    $("#mobile").on("keyup", function () {
        console.log("mobil redo");
        checkPhoneNumber();
    });
    $("#message").on("keyup", function () {
        console.log("meddelande redo");
        checkMessage();
    });
});