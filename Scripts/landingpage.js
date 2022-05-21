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
function opengalery1() {
  document.getElementById("teamMemberFloat1").style.display = "block";
}

function closegalery1() {
  document.getElementById("teamMemberFloat1").style.display = "none";
}

function opengalery2() {
  document.getElementById("teamMemberFloat2").style.display = "block";
}

function closegalery2() {
  document.getElementById("teamMemberFloat2").style.display = "none";
}

function opengalery3() {
  document.getElementById("teamMemberFloat3").style.display = "block";
}

function closegalery3() {
  document.getElementById("teamMemberFloat3").style.display = "none";
}

function opengalery4() {
  document.getElementById("teamMemberFloat4").style.display = "block";
}

function closegalery4() {
  document.getElementById("teamMemberFloat4").style.display = "none";
}

function opengalery5() {
  document.getElementById("teamMemberFloat5").style.display = "block";
}

function closegalery5() {
  document.getElementById("teamMemberFloat5").style.display = "none";
}



//Change navbar backround on scroll
window.addEventListener("scroll", function () {
  var element = document.querySelector("#OurSolution");
  var position = element.getBoundingClientRect();
  if (position.top+800 < window.innerHeight && position.bottom >= 0) {
    document.getElementById("NavSolution").style.backgroundColor = "#2de1af";
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
    document.getElementById("NavProduct").style.backgroundColor = "#2de1af";
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
    document.getElementById("NavTeam").style.backgroundColor = "#2de1af";
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
    document.getElementById("NavCaseStudies").style.backgroundColor = "#2de1af";
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
    document.getElementById("NavContact").style.backgroundColor = "#2de1af";
  }
});

function changeOurSolution(){
  var text1="<b>Célunk egy olyan felület megalkotása volt, amely kezdőknek és haladóknak egyaránt segít megtalálni a  legmegfelelőbb tárcát. Ehhez néhány kérdésre kell válaszolni, hogy felmérjük a szükséges igényeket, amelyek alapján ajánlunk tárcákat. Törekedtünk arra, hogy ajánlatunkban az ingyenes, egyszerű kezelhetőségű tárcák is helyet kapjanak a kezdő cryptosok segítésére és arra is, hogy a haladóbb ismeretekkel rendelkezők is megtalálják a maguk kedvencét. Tesztünk kitöltésével és az ajánlatok elfogadásával, felhasználóinkról több órányi terhet igyekszünk levenni, hiszen a tárcák kínálata ma már széles spektrumban mozog, és nem is biztos, hogy tudjuk merre induljunk el a nagy kínálatban.</b>"
  var text2="<b>A kriptovilágban sokan emlegetik az alábbi  tanulságos mondatot. Ez annyit tesz, hogy amennyiben nem a te birtokodban van a Privát kulcs, elvesztheted a kriptovalutád felett az uralmat. Nem mindegy, hogy a tulajdonos birtokolja (non-custodial) a Privát kulcsot, vagy esetleg egy másik személy/vállalat (custodial). Ezért mi hiszünk abban, hogy a legbiztonságosabb módszer ha non-custodial tárcákat használunk. Továbbá a bányászat nem az egyetlen lehetőség, amivel kriptopénzeket lehet keresni, illetve működtetni egy blokkláncot. A staking ugyanezt a célt szolgálja, és mindössze annyit kell tenni a jutalomért, hogy egy bizonyos összeget adott ideig tárolsz a kriptotárcádban. Jól hangzik ugye ? A staking egyszerű dolog: egy meghatározott mennyiségű érmét kell tárolnod egy egyedi tárcában, melyet kifejezetten staking céljára használsz. Az érméket persze nem költheted el, azok le vannak kötve egy meghatározott időre. Megpróbálhatod ugyan átverni a rendszert, de azzal az érmék elvesztését kockáztatod. A tárolásért viszont jutalmat kapsz, ugyanúgy, mint ha bányásznál. A bányászathoz képest az egyik fő különbség, hogy nincs szükséged bányászati eszközökre, csak egy tárcára (gépre), benne egy adott mennyiségű érmével. Emiatt tehát ez a megoldás környezetbarátabb, olcsóbb, hiszen nem fogyaszt annyi elektromos áramot, mint a bányászat. A staking hasonlítható ahhoz is, mint amikor a bankba beteszed a pénzed betétként, és kamatot kapsz utána. Ennek a kamatnak mértéke attól függ, hogy mennyi időre kötöd le a pénzed. Minél hosszabb időre, annál nagyobb a kamat. Tesztünk kitöltésével megtudhatod, melyik az a tárca ami a legjobban kielégíti az igényeidet és még bevételt is termel Neked. Töltsd ki most, hogy akár már ma hozamra tehess szert.</b>"
  var x = document.getElementById("oursolution");
  if (x.innerHTML === text2) {
    x.innerHTML = text1;
  } else {
    x.innerHTML = text2;
  }
}

function changeOurSolutioneng(){
  var text1="<b>Our goal was to create an interface for beginners and helps advanced users find the most suitable wallet. For this some questions need to be answered to assess the need needs on the basis of which we offer wallets. We strived to Our offer also includes free, easy-to-use wallets get them to help novice cryptos and also to be more advanced those with knowledge will also find their favorite. We're testing by filling out and accepting offers, more about our users we are trying to take down an hourly load, as the range of wallets is now available it is on a wide spectrum and it is not even certain where we know let's start with the big offer.</b>"
  var text2="<b>The following instructive sentence is mentioned by many in the cryptographic world. This means that if you do not own the Private Key, you may lose control of your cryptocurrency. It doesn't matter if the owner owns (non-custodial) the Private Key or possibly another person / company (custodial). Therefore, we believe that the safest method is to use non-custodial wallets. Furthermore, mining is not the only way to earn cryptocurrencies or operate a blockchain. Staking serves the same purpose, and all you have to do for the reward is store a certain amount in your cryptocurrency for a certain amount of time. Sounds good, right? Staging is simple: you need to store a certain amount of coins in a unique wallet that you use specifically for staking. Of course, you can’t spend the coins, they are tied down for a set period of time. You can try to trick the system, but you risk losing coins. However, you get a reward for storing it, just as you would for a miner. One of the main differences from mining is that you don't need mining tools, just a wallet (machine) with a certain amount of coins in it. For this reason, this solution is more environmentally friendly and cheaper, as it does not consume as much electricity as mining. The staking is similar to when you put your money in the bank as a deposit and you get interest afterwards. The amount of this interest depends on how long you commit your money. The longer you spend, the higher your interest rate. By completing our test, you can find out which portfolio best suits your needs and even generates revenue for you. Fill it out now so you can get a return today.</b>"
  var x = document.getElementById("oursolution");
  if (x.innerHTML === text2) {
    x.innerHTML = text1;
  } else {
    x.innerHTML = text2;
  }
}