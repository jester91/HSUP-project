//Open image galery
function opengalery() {
  document.getElementById("teamMemberFloat1").style.display = "block";
}

function closegalery() {
  document.getElementById("teamMemberFloat1").style.display = "none";
}

//Smooth scroll for the dedicated section of the site, and activ nav bar back color

function FunctionProduct() {
  var TargetArticle = document.getElementById("HomeArticle2");
  TargetArticle.scrollIntoView({ behavior: "smooth" });
  document.getElementById("NavAbout").style.backgroundColor = "#182722";
  document.getElementById("NavProduct").style.backgroundColor = "#00e091";
  document.getElementById("NavTeam").style.backgroundColor = "#182722";
  document.getElementById("NavContact").style.backgroundColor = "#182722";
}

function FunctionAbout() {
  var TargetArticle = document.getElementById("HomeArticle1");
  TargetArticle.scrollIntoView({ behavior: "smooth" });
  document.getElementById("NavAbout").style.backgroundColor = "#00e091";
  document.getElementById("NavProduct").style.backgroundColor = "#182722";
  document.getElementById("NavTeam").style.backgroundColor = "#182722";
  document.getElementById("NavContact").style.backgroundColor = "#182722";
}

function FunctionTeam() {
  var TargetArticle = document.getElementById("HomeArticle5");
  TargetArticle.scrollIntoView({ behavior: "smooth" });
  document.getElementById("NavAbout").style.backgroundColor = "#182722";
  document.getElementById("NavProduct").style.backgroundColor = "#182722";
  document.getElementById("NavTeam").style.backgroundColor = "#00e091";
  document.getElementById("NavContact").style.backgroundColor = "#182722";
}
function FunctionContact() {
  var TargetArticle = document.getElementById("HomeForm");
  TargetArticle.scrollIntoView({ behavior: "smooth" });
  document.getElementById("NavAbout").style.backgroundColor = "#182722";
  document.getElementById("NavProduct").style.backgroundColor = "#182722";
  document.getElementById("NavTeam").style.backgroundColor = "#182722";
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
  var element = document.querySelector("#HomeArticle3");
  var position = element.getBoundingClientRect();
  if (position.top < window.innerHeight && position.bottom >= 0) {
    document.getElementById("NavAbout").style.backgroundColor = "#00e091";
    document.getElementById("NavProduct").style.backgroundColor = "#182722";
    document.getElementById("NavTeam").style.backgroundColor = "#182722";
    document.getElementById("NavContact").style.backgroundColor = "#182722";
  }
});

window.addEventListener("scroll", function () {
  var element = document.querySelector("#HomeArticle2");
  var position = element.getBoundingClientRect();
  if (position.top < window.innerHeight && position.bottom >= 0) {
    document.getElementById("NavAbout").style.backgroundColor = "#182722";
    document.getElementById("NavProduct").style.backgroundColor = "#00e091";
    document.getElementById("NavTeam").style.backgroundColor = "#182722";
    document.getElementById("NavContact").style.backgroundColor = "#182722";
  }
});

window.addEventListener("scroll", function () {
  var element = document.querySelector("#HomeArticle5");
  var position = element.getBoundingClientRect();
  if (position.top < window.innerHeight && position.bottom >= 0) {
    document.getElementById("NavAbout").style.backgroundColor = "#182722";
    document.getElementById("NavProduct").style.backgroundColor = "#182722";
    document.getElementById("NavTeam").style.backgroundColor = "#00e091";
    document.getElementById("NavContact").style.backgroundColor = "#182722";
  }
});

window.addEventListener("scroll", function () {
  var element = document.querySelector("#HomeForm");
  var position = element.getBoundingClientRect();
  if (position.top < window.innerHeight && position.bottom >= 0) {
    document.getElementById("NavAbout").style.backgroundColor = "#182722";
    document.getElementById("NavProduct").style.backgroundColor = "#182722";
    document.getElementById("NavTeam").style.backgroundColor = "#182722";
    document.getElementById("NavContact").style.backgroundColor = "#00e091";
  }
});
