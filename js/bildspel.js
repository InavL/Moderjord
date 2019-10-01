var runBildspel = new Boolean(true);
var index = 0;

function bildspel() {
  var i;
  var bilder = document.getElementsByClassName("bildspel");
  var timer;
  //loop genom hämtade bildelement
  for (i = 0; i < bilder.length; i++) {
    bilder[i].style.display = "none";
  }
  //om boolean är true lägg till element i variabeln index, skapa en timer för loopade element och sätt ett tidsintervall
  if (runBildspel == true) {
    index++;
    var timer = setTimeout(bildspel, 4000);
  }
  //om index av loppade element är större än array:n, börja om på index 1
  if (index > bilder.length) {
    index = 1
  }
  //visa bildelement 1 på API
  bilder[index - 1].style.display = "block";
}

//när användare klickar ändras boolean till false & vise versa
$(document).ready(function () {
  $("#startStop").click(function () {
    if (runBildspel == false) {
      console.log("ready!");
      //om boolean är true startas bildspelet
      runBildspel = new Boolean(true);
      bildspel();
    } else {
      //om boolean är false stoppas bildspelet
      runBildspel = new Boolean(false);
      clearTimeout(timer);
    }
  });
});