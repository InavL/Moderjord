var hej = new Boolean(true);
var index=0;

function bildspel() {
  var i;
  var bilder = document.getElementsByClassName("bildspel");
  var timer;
  for (i = 0; i < bilder.length; i++) {
    bilder[i].style.display = "none";
  }
  if (hej == true) {
  index++;
  var timer =setTimeout(bildspel,2000);
  } 
  if (index > bilder.length) {
    index = 1
  }
  bilder[index - 1].style.display="block";
}

$(document).ready(function () {
  $("#startStop").click(function () {
    if(hej==false){
    console.log("ready!");
    hej = new Boolean(true);
    bildspel();
  } else{
    hej = new Boolean(false);
    clearTimeout(timer);
  }
 });
});

function change(){
  var knapp =document.getElementById("startStop");
  if(knapp.value=="Stoppa bildspel"){
    knapp.value="Starta bildspel"; 
}else{
  knapp.value="Stoppa bildspel"; 
}
}