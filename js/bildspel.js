var hej = new Boolean(true);
var index=0;

function bildspel() {
  var i;
  var bilder = document.getElementsByClassName("bildspel");
  for (i = 0; i < bilder.length; i++) {
    bilder[i].style.display = "none";
  }
  index++;

  if (index > bilder.length) {
    index = 1
  }
  bilder[index - 1].style.display="block";
  if (hej == true) {
    setTimeout(bildspel, 1000);
  } else {

  }
}

$(document).ready(function () {
  $("#startStop").click(function () {
    var knapp =  document.getElementsByClassName("startStop");
    if(hej==false){
    console.log("ready!");
    hej = new Boolean(true);
    knapp.innerHTML ="Starta bildspel";
    bildspel();
  }
  else{
    hej = new Boolean(false);
  }
});
});