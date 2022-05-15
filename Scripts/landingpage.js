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
      inName: "Enter your name!",
      inMail: "Enter your email address!",
      inMessage: "Write your message!",
    },
    errorElement : 'div',
    errorLabelContainer: '.errorTxt'
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
  if (position.top+800 < window.innerHeight && position.bottom >= 0) {
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
  if (position.top+800 < window.innerHeight && position.bottom >= 0) {
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
  if (position.top+800 < window.innerHeight && position.bottom >= 0) {
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
  if (position.top+800 < window.innerHeight && position.bottom >= 0) {
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
  if (position.top+800 < window.innerHeight && position.bottom >= 0) {
    document.getElementById("NavSolution").style.backgroundColor = "#0D093B";
    document.getElementById("NavProduct").style.backgroundColor = "#0D093B";
    document.getElementById("NavTeam").style.backgroundColor = "#0D093B";
    document.getElementById("NavCaseStudies").style.backgroundColor = "#0D093B";
    document.getElementById("NavContact").style.backgroundColor = "#00e091";
  }
});

function changeOurSolution(){
  var text1="<b>Célunk egy olyan felület megalkotása volt, amely kezdőknek és haladóknak egyaránt segít megtalálni a  legmegfelelőbb tárcát. Ehhez néhány kérdésre kell válaszolni, hogy felmérjük a szükséges igényeket, amelyek alapján ajánlunk tárcákat. Törekedtünk arra, hogy ajánlatunkban az ingyenes, egyszerű kezelhetőségű tárcák is helyet kapjanak a kezdő cryptosok segítésére és arra is, hogy a haladóbb ismeretekkel rendelkezők is megtalálják a maguk kedvencét. Tesztünk kitöltésével és az ajánlatok elfogadásával, felhasználóinkról több órányi terhet igyekszünk levenni, hiszen a tárcák kínálata ma már széles spektrumban mozog, és nem is biztos, hogy tudjuk merre induljunk el a nagy kínálatban.<b/>"
  var text2="B2B szöveg"
  var x = document.getElementById("oursolution");
  if (x.innerHTML === text2) {
    x.innerHTML = text1;
  } else {
    x.innerHTML = text2;
  }
}

function changeOurSolutioneng(){
  var text1="<b>Our goal was to create an interface for beginners and helps advanced users find the most suitable wallet. For this some questions need to be answered to assess the need needs on the basis of which we offer wallets. We strived to Our offer also includes free, easy-to-use wallets get them to help novice cryptos and also to be more advanced those with knowledge will also find their favorite. We're testing by filling out and accepting offers, more about our users we are trying to take down an hourly load, as the range of wallets is now available it is on a wide spectrum and it is not even certain where we know let's start with the big offer.<b/>"
  var text2="B2B szöveg"
  var x = document.getElementById("oursolution");
  if (x.innerHTML === text2) {
    x.innerHTML = text1;
  } else {
    x.innerHTML = text2;
  }
}