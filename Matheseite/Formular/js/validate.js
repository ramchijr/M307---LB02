function validateForm() {
    let x = document.forms["formular"]["vorname"].value;
    if (x !== "") {
        alert("Vielen Dank für die Nachricht!");
    } else {
        alert("Einige Felder müssen noch ausgefüllt werden.");
        return false;
    }
}

/*
// Diese Funktion ist für ...
function showMsg() {
    // Variablen Deklaration für ...
    let msg = document.getElementsByName("vorname").value;
    // Bedingung Check für ...
    // Begründung: ...
    if (msg !== "") {
        alert("Hallo du!");
    } else {
        alert("Schreibe etwas...");
    }
}
 */