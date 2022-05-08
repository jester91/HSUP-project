function menu() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }

  //Weboldal aouto görgetés menüpont kattintása után  

function FunctionProduct() {
  var célarticle = document.getElementById("HomeArticle2");
  célarticle.scrollIntoView({behavior: "smooth"}); 
}

function FunctionAbout() {
  var célarticle = document.getElementById("HomeArticle1");
  célarticle.scrollIntoView({behavior: "smooth"}); 
}

function FunctionTeam() {
  var célarticle = document.getElementById("HomeArticle5");
  célarticle.scrollIntoView({behavior: "smooth"}); 
  
}
function FunctionContact() {
  var célarticle = document.getElementById("HomeArticle6");
  célarticle.scrollIntoView({behavior: "smooth"}); 
}
