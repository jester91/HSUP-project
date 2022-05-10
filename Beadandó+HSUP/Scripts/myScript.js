function menu() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

//Smooth scroll for the dedicated section of the site, and activ nav bar back color

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

//Question page "next" and "back" button event
function question1next(){
  document.getElementById('question1').style.display = 'none';
  document.getElementById('question2').style.display = 'flex';
}

function question2next(){
  document.getElementById('question2').style.display = 'none';
  document.getElementById('question3').style.display = 'flex';
}

function question2back(){
  document.getElementById('question2').style.display = 'none';
  document.getElementById('question1').style.display = 'flex';
}

function question3next(){
  document.getElementById('question3').style.display = 'none';
  document.getElementById('question4').style.display = 'flex';
}

function question3back(){
  document.getElementById('question3').style.display = 'none';
  document.getElementById('question2').style.display = 'flex';
}

function question4next(){
  document.getElementById('question4').style.display = 'none';
  document.getElementById('question5').style.display = 'flex';
}

function question4back(){
  document.getElementById('question4').style.display = 'none';
  document.getElementById('question3').style.display = 'flex';
}

function question5next(){
  document.getElementById('question5').style.display = 'none';
  document.getElementById('question6').style.display = 'flex';
}

function question5back(){
  document.getElementById('question5').style.display = 'none';
  document.getElementById('question4').style.display = 'flex';
}
//next button need to be changed
function question6submit(){
  
}

function question6back(){
  document.getElementById('question6').style.display = 'none';
  document.getElementById('question5').style.display = 'flex';
}

