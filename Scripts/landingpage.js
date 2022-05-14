//Open image galery
function opengalery() {
  document.getElementById("teamMemberFloat1").style.display = "block";
}

function closegalery() {
  document.getElementById("teamMemberFloat1").style.display = "none";
}

//Smooth scroll for the dedicated section of the site, and activ nav bar back color


//Home page Contact Us jquery validate
$(document).ready(function () {
  $("#HomeForm").validate({
    rules: {
      inName: "required",
      inMail: {
        required: true,
        email: true,
      },
      inMessage: "required",
    },

    messages: {
      inName: "Írd be a neved!",
      inMail: "Írd be az email címed!",
      inMessage: "Írd le az üzeneted!",
    },
  });
});

//images galery

$(document).ready(function () {
  $("#images").galleria({
    width: 500,
    height: 500,
  });
});

//Open image galery
function opengalery() {
  document.getElementById("teamMemberFloat1").style.display = "block";
}

function closegalery() {
  document.getElementById("teamMemberFloat1").style.display = "none";
}

//Change navbar backround on scroll
window.addEventListener("scroll", function () {
  var element = document.querySelector("#OurSolution");
  var position = element.getBoundingClientRect();
  if (position.top+1000 < window.innerHeight && position.bottom >= 0) {
    document.getElementById("NavSolution").style.backgroundColor = "#00e091";
    document.getElementById("NavProduct").style.backgroundColor = "#0D093B";
    document.getElementById("NavTeam").style.backgroundColor = "#0D093B";
    document.getElementById("NavCaseStudies").style.backgroundColor = "#0D093B";
    document.getElementById("NavContact").style.backgroundColor = "#0D093B";
  }
});

window.addEventListener("scroll", function () {
  var element = document.querySelector("#Product");
  var position = element.getBoundingClientRect();
  if (position.top+1000 < window.innerHeight && position.bottom >= 0) {
    document.getElementById("NavSolution").style.backgroundColor = "#0D093B";
    document.getElementById("NavProduct").style.backgroundColor = "#00e091";
    document.getElementById("NavTeam").style.backgroundColor = "#0D093B";
    document.getElementById("NavCaseStudies").style.backgroundColor = "#0D093B";
    document.getElementById("NavContact").style.backgroundColor = "#0D093B";
  }
});

window.addEventListener("scroll", function () {
  var element = document.querySelector("#SaidAboutUs");
  var position = element.getBoundingClientRect();
  if (position.top+1000 < window.innerHeight && position.bottom >= 0) {
    document.getElementById("NavSolution").style.backgroundColor = "#0D093B";
    document.getElementById("NavProduct").style.backgroundColor = "#0D093B";
    document.getElementById("NavTeam").style.backgroundColor = "#00e091";
    document.getElementById("NavCaseStudies").style.backgroundColor = "#0D093B";
    document.getElementById("NavContact").style.backgroundColor = "#0D093B";
  }
});

window.addEventListener("scroll", function () {
  var element = document.querySelector("#CaseStudies");
  var position = element.getBoundingClientRect();
  if (position.top+1000 < window.innerHeight && position.bottom >= 0) {
    document.getElementById("NavSolution").style.backgroundColor = "#0D093B";
    document.getElementById("NavProduct").style.backgroundColor = "#0D093B";
    document.getElementById("NavTeam").style.backgroundColor = "#0D093B";
    document.getElementById("NavCaseStudies").style.backgroundColor = "#00e091";
    document.getElementById("NavContact").style.backgroundColor = "#0D093B";
  }
});

window.addEventListener("scroll", function () {
  var element = document.querySelector("#HomeForm");
  var position = element.getBoundingClientRect();
  if (position.top+1000 < window.innerHeight && position.bottom >= 0) {
    document.getElementById("NavSolution").style.backgroundColor = "#0D093B";
    document.getElementById("NavProduct").style.backgroundColor = "#0D093B";
    document.getElementById("NavTeam").style.backgroundColor = "#0D093B";
    document.getElementById("NavCaseStudies").style.backgroundColor = "#0D093B";
    document.getElementById("NavContact").style.backgroundColor = "#00e091";
  }
});

function changeOurSolution(){
  var text1="Csapatunkkal egy olyan megoldáson dolgozunk amivel a felhasználóink részére a legtökéletesebb tárcát tudjuk ajánlani, ezzel is elősegítvea felhasználói élményt és a biztonságot"
  var text2="B2B szöveg"
  var x = document.getElementById("oursolution");
  if (x.innerHTML === text2) {
    x.innerHTML = text1;
  } else {
    x.innerHTML = text2;
  }
}