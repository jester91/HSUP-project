function menu() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

//Smooth scroll for the dedicated section of the site

function FunctionProduct() {
  var TargetArticle = document.getElementById("HomeArticle2");
  TargetArticle.scrollIntoView({ behavior: "smooth" });
  document.getElementById('NavAbout').style.backgroundColor ='#182722';
  document.getElementById('NavProduct').style.backgroundColor ='#00e091';
  document.getElementById('NavTeam').style.backgroundColor ='#182722';
  document.getElementById('NavContact').style.backgroundColor ='#182722';
}

function FunctionAbout() {
  var TargetArticle = document.getElementById("HomeArticle1");
  TargetArticle.scrollIntoView({ behavior: "smooth" });
  document.getElementById('NavAbout').style.backgroundColor ='#00e091';
  document.getElementById('NavProduct').style.backgroundColor ='#182722';
  document.getElementById('NavTeam').style.backgroundColor ='#182722';
  document.getElementById('NavContact').style.backgroundColor ='#182722';
}

function FunctionTeam() {
  var TargetArticle = document.getElementById("HomeArticle5");
  TargetArticle.scrollIntoView({ behavior: "smooth" });
  document.getElementById('NavAbout').style.backgroundColor ='#182722';
  document.getElementById('NavProduct').style.backgroundColor ='#182722';
  document.getElementById('NavTeam').style.backgroundColor ='#00e091';
  document.getElementById('NavContact').style.backgroundColor ='#182722';
}
function FunctionContact() {
  var TargetArticle = document.getElementById("HomeArticle6");
  TargetArticle.scrollIntoView({ behavior: "smooth" });
  document.getElementById('NavAbout').style.backgroundColor ='#182722';
  document.getElementById('NavProduct').style.backgroundColor ='#182722';
  document.getElementById('NavTeam').style.backgroundColor ='#182722';
  document.getElementById('NavContact').style.backgroundColor ='#00e091';
}

