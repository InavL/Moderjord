
var hej = new Boolean(true);
var index=0;
bildSpel()


 function bildSpel() {
  var i;
  var bilder = document.getElementsByClassName("bildspel");
  for (i = 0; i < bilder.length; i++) {
    bilder[i].style.display = "none";
  }
  index++;

  if (index > bilder.length) {index = 1}
  bilder[index-1].style.display = "block";
  if(hej==true){
  setTimeout(bildSpel, 4000);
}
  else{
    
  }
}

$(document).ready(function() {
  $("#stop").click(function(){
    console.log( "ready!" );
    hej= new Boolean(false);
  });
  });
  $(document).ready(function() {
    $("#start").click(function(){
      console.log( "ready!" );
      hej= new Boolean(true);
      bildSpel();
    });
    });