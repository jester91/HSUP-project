//Open image galery
function opengalery() {
  document.getElementById("teamMemberFloat1").style.display = "block";
}

function closegalery() {
  document.getElementById("teamMemberFloat1").style.display = "none";
}

//Smooth scroll for the dedicated section of the site, and activ nav bar back color

function FunctionSolution() {
  var TargetArticle = document.getElementById("OurSolution");
  TargetArticle.scrollIntoView({ behavior: "smooth" });
  document.getElementById("NavSolution").style.backgroundColor = "#00e091";
  document.getElementById("NavProduct").style.backgroundColor = "#182722";
  document.getElementById("NavTeam").style.backgroundColor = "#182722";
  document.getElementById("NavCaseStudies").style.backgroundColor = "#182722";
  document.getElementById("NavContact").style.backgroundColor = "#182722";
}

function FunctionProduct() {
  var TargetArticle = document.getElementById("Product");
  TargetArticle.scrollIntoView({ behavior: "smooth" });
  document.getElementById("NavSolution").style.backgroundColor = "#182722";
  document.getElementById("NavProduct").style.backgroundColor = "#00e091";
  document.getElementById("NavTeam").style.backgroundColor = "#182722";
  document.getElementById("NavCaseStudies").style.backgroundColor = "#182722";
  document.getElementById("NavContact").style.backgroundColor = "#182722";
}


function FunctionTeam() {
  var TargetArticle = document.getElementById("SaidAboutUs");
  TargetArticle.scrollIntoView({ behavior: "smooth" });
  document.getElementById("NavSolution").style.backgroundColor = "#182722";
  document.getElementById("NavProduct").style.backgroundColor = "#182722";
  document.getElementById("NavTeam").style.backgroundColor = "#00e091";
  document.getElementById("NavCaseStudies").style.backgroundColor = "#182722";
  document.getElementById("NavContact").style.backgroundColor = "#182722";
}

function FunctionCaseStudies() {
  var TargetArticle = document.getElementById("CaseStudies");
  TargetArticle.scrollIntoView({ behavior: "smooth" });
  document.getElementById("NavSolution").style.backgroundColor = "#182722";
  document.getElementById("NavProduct").style.backgroundColor = "#182722";
  document.getElementById("NavTeam").style.backgroundColor = "#182722";
  document.getElementById("NavCaseStudies").style.backgroundColor = "#00e091";
  document.getElementById("NavContact").style.backgroundColor = "#182722";
}

function FunctionContact() {
  var TargetArticle = document.getElementById("HomeForm");
  TargetArticle.scrollIntoView({ behavior: "smooth" });
  document.getElementById("NavSolution").style.backgroundColor = "#182722";
  document.getElementById("NavProduct").style.backgroundColor = "#182722";
  document.getElementById("NavTeam").style.backgroundColor = "#182722";
  document.getElementById("NavCaseStudies").style.backgroundColor = "#182722";
  document.getElementById("NavContact").style.backgroundColor = "#00e091";
}

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
  if (position.top < window.innerHeight && position.bottom >= 0) {
    document.getElementById("NavSolution").style.backgroundColor = "#00e091";
    document.getElementById("NavProduct").style.backgroundColor = "#182722";
    document.getElementById("NavTeam").style.backgroundColor = "#182722";
    document.getElementById("NavCaseStudies").style.backgroundColor = "#182722";
    document.getElementById("NavContact").style.backgroundColor = "#182722";
  }
});

window.addEventListener("scroll", function () {
  var element = document.querySelector("#Product");
  var position = element.getBoundingClientRect();
  if (position.top < window.innerHeight && position.bottom >= 0) {
    document.getElementById("NavSolution").style.backgroundColor = "#182722";
    document.getElementById("NavProduct").style.backgroundColor = "#00e091";
    document.getElementById("NavTeam").style.backgroundColor = "#182722";
    document.getElementById("NavCaseStudies").style.backgroundColor = "#182722";
    document.getElementById("NavContact").style.backgroundColor = "#182722";
  }
});

window.addEventListener("scroll", function () {
  var element = document.querySelector("#SaidAboutUs");
  var position = element.getBoundingClientRect();
  if (position.top < window.innerHeight && position.bottom >= 0) {
    document.getElementById("NavSolution").style.backgroundColor = "#182722";
    document.getElementById("NavProduct").style.backgroundColor = "#182722";
    document.getElementById("NavTeam").style.backgroundColor = "#00e091";
    document.getElementById("NavCaseStudies").style.backgroundColor = "#182722";
    document.getElementById("NavContact").style.backgroundColor = "#182722";
  }
});

window.addEventListener("scroll", function () {
  var element = document.querySelector("#CaseStudies");
  var position = element.getBoundingClientRect();
  if (position.top < window.innerHeight && position.bottom >= 0) {
    document.getElementById("NavSolution").style.backgroundColor = "#182722";
    document.getElementById("NavProduct").style.backgroundColor = "#182722";
    document.getElementById("NavTeam").style.backgroundColor = "#182722";
    document.getElementById("NavCaseStudies").style.backgroundColor = "#00e091";
    document.getElementById("NavContact").style.backgroundColor = "#182722";
  }
});

window.addEventListener("scroll", function () {
  var element = document.querySelector("#HomeForm");
  var position = element.getBoundingClientRect();
  if (position.top < window.innerHeight && position.bottom >= 0) {
    document.getElementById("NavSolution").style.backgroundColor = "#182722";
    document.getElementById("NavProduct").style.backgroundColor = "#182722";
    document.getElementById("NavTeam").style.backgroundColor = "#182722";
    document.getElementById("NavCaseStudies").style.backgroundColor = "#182722";
    document.getElementById("NavContact").style.backgroundColor = "#00e091";
  }
});
