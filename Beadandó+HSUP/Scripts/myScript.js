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
  var TargetArticle = document.getElementById("HomeForm");
  TargetArticle.scrollIntoView({ behavior: "smooth" });
  document.getElementById('NavAbout').style.backgroundColor ='#182722';
  document.getElementById('NavProduct').style.backgroundColor ='#182722';
  document.getElementById('NavTeam').style.backgroundColor ='#182722';
  document.getElementById('NavContact').style.backgroundColor ='#00e091';
}

//Question page "next" and "back" button event


// document.getElementById("inCountry").addEventListener('input', f => {
//   if(f.value !=="Country") {
//     document.getElementById("inCity").addEventListener('input', e => {
//       if(e.value !=="") {
//         document.getElementById('ButtonQuestion1Next').disabled = false;
//       } 
//     });
//   } 
// })

// document.getElementById("inCity").addEventListener('input', f => {
//   if(f.value !=="") {
//     document.getElementById("inCountry").addEventListener('input', e => {
//       if(e.value !=="Country") {
//         document.getElementById('ButtonQuestion1Next').disabled = false;
//       } 
//     });
//   } 
// })
// ,

// var question2radio1 = document.getElementById("question2radio1")
// var question2radio2 = document.getElementById("question2radio2")
// var question2radio3 = document.getElementById("question2radio3")
// var question2radio4 = document.getElementById("question2radio4")
// if(question2radio1.checked || question2radio2.checked || question2radio3.checked || question2radio4.checked) {
//   document.getElementById('ButtonQuestion2Next').disabled = false;
// }
$(document).ready(function(){
  $("#question1").validate({
    rules:{
      inCountry: "required",
      inCity: "required",
    },
    messages: {
      inCountry: "Add meg az országot ahol laksz!",
      inCity: "Add meg a várost ahol laksz!",
    }
  });
});

$(document).ready(function(){
  $("#question2").validate({
    rules:{
      Exprerience: "required",
    },
    messages: {
      Exprerience:"Add meg mennyire vagy jártas a témában!"
    }
  });
});

$(document).ready(function(){
  $("#question3").validate({
    rules:{
      safety: "required",
    },
    messages: {
      safety: "Adja meg milyen szinű biztonságot akar!"
    }
  });
});

$(document).ready(function(){
  $("#question4").validate({
    rules:{
      Centralised: "required",
    },
    messages: {
      Centralised: "Add meg, hogy centralizált legyen-e!"
    }
  });
});

$(document).ready(function(){
  $("#question5").validate({
    rules:{
      frequency: "required",
    },
    messages: {
      frequency: "Add meg, hogy milye gyakran használnád a tárcádat!"
    }
  });
});

$(document).ready(function(){
  $("#question6").validate({
    rules:{
      UsedFor: "required",
    },
    messages: {
      UsedFor: "Add meg, hogy Mire használnád a tárcád!"
    }
  });
});


function question1next(){
  document.getElementById('question1').style.display = 'none';
  document.getElementById('question2').style.display = 'flex';
  document.getElementById('progressbarpart1').style.backgroundColor = '#00e091';
  document.getElementById('progressnumber1').style.display = 'none';
  document.getElementById('progressnumber2').style.display = 'block';
}

function question2next(){
  document.getElementById('question2').style.display = 'none';
  document.getElementById('question3').style.display = 'flex';
  document.getElementById('progressbarpart2').style.backgroundColor = '#00e091'
  document.getElementById('progressnumber2').style.display = 'none';
  document.getElementById('progressnumber3').style.display = 'block';
}

function question2back(){
  document.getElementById('question2').style.display = 'none';
  document.getElementById('question1').style.display = 'flex';
  document.getElementById('progressbarpart1').style.backgroundColor = '#182722'
  document.getElementById('progressnumber2').style.display = 'none';
  document.getElementById('progressnumber1').style.display = 'block';
}

function question3next(){
  document.getElementById('question3').style.display = 'none';
  document.getElementById('question4').style.display = 'flex'
  document.getElementById('progressbarpart3').style.backgroundColor = '#00e091';
  document.getElementById('progressnumber3').style.display = 'none';
  document.getElementById('progressnumber4').style.display = 'block';
}

function question3back(){
  document.getElementById('question3').style.display = 'none';
  document.getElementById('question2').style.display = 'flex';
  document.getElementById('progressbarpart2').style.backgroundColor = '#182722'
  document.getElementById('progressnumber3').style.display = 'none';
  document.getElementById('progressnumber2').style.display = 'block';
}

function question4next(){
  document.getElementById('question4').style.display = 'none';
  document.getElementById('question5').style.display = 'flex';
  document.getElementById('progressbarpart4').style.backgroundColor = '#00e091';
  document.getElementById('progressnumber4').style.display = 'none';
  document.getElementById('progressnumber5').style.display = 'block';
}

function question4back(){
  document.getElementById('question4').style.display = 'none';
  document.getElementById('question3').style.display = 'flex';
  document.getElementById('progressbarpart3').style.backgroundColor = '#182722'
  document.getElementById('progressnumber4').style.display = 'none';
  document.getElementById('progressnumber3').style.display = 'block';
}

function question5next(){
  document.getElementById('question5').style.display = 'none';
  document.getElementById('question6').style.display = 'flex';
  document.getElementById('progressbarpart5').style.backgroundColor = '#00e091';
  document.getElementById('progressnumber5').style.display = 'none';
  document.getElementById('progressnumber6').style.display = 'block';
}

function question5back(){
  document.getElementById('question5').style.display = 'none';
  document.getElementById('question4').style.display = 'flex';
  document.getElementById('progressbarpart4').style.backgroundColor = '#182722'
  document.getElementById('progressnumber5').style.display = 'none';
  document.getElementById('progressnumber4').style.display = 'block';
}
//next button need to be changed
function question6submit(){
  document.getElementById('progressbarpart6').style.backgroundColor = '#00e091';
}

function question6back(){
  document.getElementById('question6').style.display = 'none';
  document.getElementById('question5').style.display = 'flex';
  document.getElementById('progressbarpart5').style.backgroundColor = '#182722'
  document.getElementById('progressnumber6').style.display = 'none';
  document.getElementById('progressnumber5').style.display = 'block';
}

//Home page Contact Us jquery validate
$(document).ready(function(){
  $("#HomeForm").validate({
    rules:{
      inName: "required",
      inMail: {
        required: true,
        email: true,
      },
      inMessage: "required"
    },

    messages: {
      inName: "Írd be a neved!",
      inMail: "Írd be az email címed!",
      inMessage: "Írd le az üzeneted!"
    }
  });
});

