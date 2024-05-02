var flipped=false

function rotateFlipcard() {
  var flipcard = document.getElementById("flip-card");
  if (flipped){
    flipcard.style.transform = "";
    flipped=false
  }else{
    flipcard.style.transform = "rotateY(180deg)";
    flipped=true
  }
  }

$(document).ready(function(){
  
    $('li').click(function(){
      $('li').removeClass("active");
      var selected = $(this).text()
      console.log(selected)
      $('.content').css({
        'display': 'none'
      });
      document.getElementById(selected).style.display="block"
      $(this).addClass("active");
    });
  });