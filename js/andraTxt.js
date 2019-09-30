function andraTxt() {
  var knapp = document.getElementById("startStop");
  if (knapp.value == "Stoppa bildspel") {
    knapp.value = "Starta bildspel";
  }
  else {
    knapp.value = "Stoppa bildspel";
  }
}
