function menu() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

//Question page "next" and "back" button event
$(document).ready(function () {
  $("#question0").validate({
    rules: {
      question0date: "required",
      
    },
    messages: {
      question0date: "Enter your year of birth!",
    },
    errorElement : 'div',
    errorLabelContainer: '.errorTxt'
  });
});


$(document).ready(function () {
  $("#question1").validate({
    rules: {
      inCountry: "required",
      
    },
    messages: {
      inCountry: "Enter the country where you live!",
    },
    errorElement : 'div',
    errorLabelContainer: '.errorTxt'
  });
});

$(document).ready(function () {
  $("#question2").validate({
    rules: {
      Exprerience: "required",
    },
    messages: {
      Exprerience: "Indicate how proficient you are in the subject!",
    },
    errorElement : 'div',
    errorLabelContainer: '.errorTxt'
  });
});

$(document).ready(function () {
  $("#question3").validate({
    rules: {
      safety: "required",
    },
    messages: {
      safety: "Specify the level of security you want!",
    },
    errorElement : 'div',
    errorLabelContainer: '.errorTxt'
  });
});

$(document).ready(function () {
  $("#question4").validate({
    rules: {
      Centralised: "required",
    },
    messages: {
      Centralised: "Specify whether it should be centralized.",
    },
    errorElement : 'div',
    errorLabelContainer: '.errorTxt'
  });
});

$(document).ready(function () {
  $("#question5").validate({
    rules: {
      frequency: "required",
    },
    messages: {
      frequency: "Specify how often you would use your wallet!",
    },
    errorElement : 'div',
    errorLabelContainer: '.errorTxt'
  });
});

$(document).ready(function () {
  $("#question6").validate({
    rules: {
      UsedFor: "required",
    },
    messages: {
      UsedFor: "Specify what you would use your wallet for!",
    },
    errorElement : 'div',
    errorLabelContainer: '.errorTxt'
  });
});

function question0next() {
  document.getElementById("question0").style.display = "none";
  document.getElementById("question1").style.display = "flex";
  document.getElementById("progressbarpart1").style.backgroundColor = "#00e091";
  document.getElementById("progressnumber0").style.display = "none";
  document.getElementById("progressnumber1").style.display = "block";
}

function question1next() {
  document.getElementById("question1").style.display = "none";
  document.getElementById("question2").style.display = "flex";
  document.getElementById("progressbarpart1").style.backgroundColor = "#00e091";
  document.getElementById("progressnumber1").style.display = "none";
  document.getElementById("progressnumber2").style.display = "block";
}

function question1back() {
  document.getElementById("question1").style.display = "none";
  document.getElementById("question0").style.display = "flex";
  document.getElementById("progressbarpart1").style.backgroundColor = "#ffffff00";
  document.getElementById("progressnumber1").style.display = "none";
  document.getElementById("progressnumber0").style.display = "block";
}

function question2next() {
  document.getElementById("question2").style.display = "none";
  document.getElementById("question3").style.display = "flex";
  document.getElementById("progressbarpart2").style.backgroundColor = "#00e091";
  document.getElementById("progressnumber2").style.display = "none";
  document.getElementById("progressnumber3").style.display = "block";
}

function question2back() {
  document.getElementById("question2").style.display = "none";
  document.getElementById("question1").style.display = "flex";
  document.getElementById("progressbarpart1").style.backgroundColor = "#ffffff00";
  document.getElementById("progressnumber2").style.display = "none";
  document.getElementById("progressnumber1").style.display = "block";
}

function question3next() {
  document.getElementById("question3").style.display = "none";
  document.getElementById("question4").style.display = "flex";
  document.getElementById("progressbarpart3").style.backgroundColor = "#00e091";
  document.getElementById("progressnumber3").style.display = "none";
  document.getElementById("progressnumber4").style.display = "block";
}

function question3back() {
  document.getElementById("question3").style.display = "none";
  document.getElementById("question2").style.display = "flex";
  document.getElementById("progressbarpart2").style.backgroundColor = "#ffffff00";
  document.getElementById("progressnumber3").style.display = "none";
  document.getElementById("progressnumber2").style.display = "block";
}

function question4next() {
  document.getElementById("question4").style.display = "none";
  document.getElementById("question5").style.display = "flex";
  document.getElementById("progressbarpart4").style.backgroundColor = "#00e091";
  document.getElementById("progressnumber4").style.display = "none";
  document.getElementById("progressnumber5").style.display = "block";
}

function question4back() {
  document.getElementById("question4").style.display = "none";
  document.getElementById("question3").style.display = "flex";
  document.getElementById("progressbarpart3").style.backgroundColor = "#ffffff00";
  document.getElementById("progressnumber4").style.display = "none";
  document.getElementById("progressnumber3").style.display = "block";
}

function question5next() {
  document.getElementById("question5").style.display = "none";
  document.getElementById("question6").style.display = "flex";
  document.getElementById("progressbarpart5").style.backgroundColor = "#00e091";
  document.getElementById("progressnumber5").style.display = "none";
  document.getElementById("progressnumber6").style.display = "block";
}

function question5back() {
  document.getElementById("question5").style.display = "none";
  document.getElementById("question4").style.display = "flex";
  document.getElementById("progressbarpart4").style.backgroundColor = "#ffffff00";
  document.getElementById("progressnumber5").style.display = "none";
  document.getElementById("progressnumber4").style.display = "block";
}
//next button need to be changed
function question6submit() {
  document.getElementById("progressbarpart6").style.backgroundColor = "#00e091";
  document.getElementById("question6").style.display = "none";
  document.getElementById("Wallets").style.flexDirection = "row";
  document.getElementById("Wallets").style.width = "100%";
  var x = window.matchMedia("(min-width: 1000px)")
  if (x.matches) {
    document.getElementById("walletplace1").style.height = "100%";
    document.getElementById("walletplace2").style.height = "100%";
    document.getElementById("walletplace3").style.height = "100%";
    document.getElementById("walletplace4").style.height = "100%";
    document.getElementById("walletplace5").style.height = "100%";
  }
  document.getElementById("Wallets").style.justifyContent = "stretch";
  document.getElementById("Refresh").style.display = "Block";
  document.getElementById("Recommendtxt").style.display = "Block";
  
}

function question6back() {
  document.getElementById("question6").style.display = "none";
  document.getElementById("question5").style.display = "flex";
  document.getElementById("progressbarpart5").style.backgroundColor = "#ffffff00";
  document.getElementById("progressbarpart6").style.backgroundColor = "#ffffff00";
  document.getElementById("progressnumber6").style.display = "none";
  document.getElementById("progressnumber5").style.display = "block";
}

function TestRestart() {
  location.reload();
}

//Binance
//If the user prefer CEX it should be recommendend
//If the user has some experience greater than 2 point it should be recommendend
//US citizen recommend BinanceUS
//dont want to spend money on hardware wallet
//dont want to own his/her private key
//If the user would like to use daily/weekly basis wallet
//if the user would like to trade,hold,stake with lower APY
//If the user prefer credit/debit card for invest
//native token (feature)

//Coinbase
//If the user prefer CEX it should be recommendend
//If the user has less experience than 2 point it should be recommendend
//dont want to spend money on hardware wallet
//dont want to own his/her private key
//If the user would like to use daily/weekly/monthly basis wallet
//if the user would like to trade,hold
//If the user prefer credit/debit card for invest

//Crypto.com
//If the user prefer CEX it should be recommendend
//If the user has less experience than 2 point it should be recommendend
//dont want to spend money on hardware wallet
//dont want to own his/her private key
//If the user would like to use daily/weekly/monthly basis wallet
//if the user would like to trade,hold,stake with lower APY (NFT capability)
//If the user prefer credit/debit card for invest
//native token (feature)

//Cex.IO
//If the user prefer CEX it should be recommendend
//If the user has some experience greater than 2 point it should be recommendend
//dont want to spend money on hardware wallet
//dont want to own his/her private key
//If the user would like to use daily/weekly basis wallet
//if the user would like to trade,hold,stake with lower APY
//If the user prefer credit/debit card for invest

//BitMEX placeholder info/ old one cex
//If the user prefer CEX it should be recommendend
//If the user has some experience greater than 2 point it should be recommendend
//dont want to spend money on hardware wallet
//dont want to own his/her private key
//If the user would like to use daily/weekly basis wallet
//if the user would like to trade,hold,stake with lower APY
//If the user prefer credit/debit card for invest

//Ledger
//If the user prefer Private keys it should be recommendend
//If the user has some experience greater than 2 point it should be recommendend
//If the user would like to use Weekly/Monthly/HODL basis wallet
//if the user would like to hold,stake with lower APY
//If the user prefer credit/debit card for invest

//Trezor
//If the user prefer Private keys it should be recommendend
//If the user has some experience greater than 2 point it should be recommendend
//If the user would like to use Weekly/Monthly/HODL basis wallet
//if the user would like to hold,stake with lower APY
//If the user prefer credit/debit card for invest

// Binance
// Bitmex
// Cexio
// Coinbase
// Cryptocom
// Ledger
// Trezor

//Binance profile
BinancePOINTS = 0;
BinanceExperiance = 2;
BinanceSecurity = 2;
BinanceCentralised = 1;
BinanceDaily = 1;
BinanceWeekly = 1;
BinanceMonthly = 0;
BinanceLessoften = 0;
BinanceHOLD = 1;
BinanceEarning = 1;
BinanceNFT = 0;
BinanceMultiprotocoll = 0;
BinanceSwaping = 0;
BinanceLayer1token = 0;
//Bitmex profile
BitmexPOINTS = 0;
BitmexExperiance = 2;
BitmexSecurity = 2;
BitmexCentralised = 1;
BitmexDaily = 1;
BitmexWeekly = 1;
BitmexMonthly = 0;
BitmexLessoften = 0;
BitmexHOLD = 1;
BitmexEarning = 1;
BitmexNFT = 0;
BitmexMultiprotocoll = 0;
BitmexSwaping = 0;
BitmexLayer1token = 0;
//Cexio profile
CexioPOINTS = 0;
CexioExperiance = 2;
CexioSecurity = 2;
CexioCentralised = 1;
CexioDaily = 1;
CexioWeekly = 1;
CexioMonthly = 0;
CexioLessoften = 0;
CexioHOLD = 1;
CexioEarning = 1;
CexioNFT = 0;
CexioMultiprotocoll = 0;
CexioSwaping = 0;
CexioLayer1token = 0;
//Coinbase profile
CoinbasePOINTS = 0;
CoinbaseExperiance = 2;
CoinbaseSecurity = 2;
CoinbaseCentralised = 1;
CoinbaseDaily = 1;
CoinbaseWeekly = 1;
CoinbaseMonthly = 0;
CoinbaseLessoften = 0;
CoinbaseHOLD = 1;
CoinbaseEarning = 1;
CoinbaseNFT = 0;
CoinbaseMultiprotocoll = 0;
CoinbaseSwaping = 0;
CoinbaseLayer1token = 0;
//Cryptocom profile
CryptocomPOINTS = 0;
CryptocomExperiance = 2;
CryptocomSecurity = 2;
CryptocomCentralised = 1;
CryptocomDaily = 1;
CryptocomWeekly = 1;
CryptocomMonthly = 1;
CryptocomLessoften = 0;
CryptocomHOLD = 1;
CryptocomEarning = 1;
CryptocomNFT = 1;
CryptocomMultiprotocoll = 0;
CryptocomSwaping = 0;
CryptocomLayer1token = 0;
//Ledger profile
LedgerPOINTS = 0;
LedgerExperiance = 3;
LedgerSecurity = 1;
LedgerCentralised = 2;
LedgerDaily = 0;
LedgerWeekly = 1;
LedgerMonthly = 1;
LedgerLessoften = 1;
LedgerHOLD = 1;
LedgerEarning = 1;
LedgerNFT = 0;
LedgerMultiprotocoll = 0;
LedgerSwaping = 0;
LedgerLayer1token = 0;
//Trezor profile
TrezorPOINTS = 0;
TrezorExperiance = 3;
TrezorSecurity = 1;
TrezorCentralised = 2;
TrezorDaily = 0;
TrezorWeekly = 1;
TrezorMonthly = 1;
TrezorLessoften = 1;
TrezorHOLD = 1;
TrezorEarning = 1;
TrezorNFT = 0;
TrezorMultiprotocoll = 0;
TrezorSwaping = 0;
TrezorLayer1token = 0;

function WalletsOrder(
  BinancePOINTS,
  BitmexPOINTS,
  CexioPOINTS,
  CoinbasePOINTS,
  CryptocomPOINTS,
  LedgerPOINTS,
  TrezorPOINTS
) {
  var tohide = document.getElementsByClassName("walletlogoimg");
  for (var i = 0; i < tohide.length; i++) {
    tohide[i].style.display = "none";
  }

  Points = [
    { name: "binance", value: BinancePOINTS },
    { name: "bitmex", value: BitmexPOINTS },
    { name: "cexio", value: CexioPOINTS },
    { name: "coinbase", value: CoinbasePOINTS },
    { name: "cryptocom", value: CryptocomPOINTS },
    { name: "ledger", value: LedgerPOINTS },
    { name: "trezor", value: TrezorPOINTS },
  ];
  Points.sort(function (x, y) {
    return y.value - x.value;
  });
  var First = Points[0].name + "1";
  var Second = Points[1].name + "2";
  var Third = Points[2].name + "3";
  var Fourth = Points[3].name + "4";
  var Fifth = Points[4].name + "5";

  var vFirst = Points[0].value;
  var vSecond = Points[1].value;
  var vThird = Points[2].value;
  var vFourth = Points[3].value;
  var vFifth = Points[4].value;

  document.getElementById(First).style.display = "block";
  document.getElementById(Second).style.display = "block";
  document.getElementById(Third).style.display = "block";
  document.getElementById(Fourth).style.display = "block";
  document.getElementById(Fifth).style.display = "block";
}

function question1getanswer() {
  
  var Country = inCountry.value;
  //Binance us href
  console.log(BinancePOINTS);
  if (Country == "United States") {
    BinancePOINTS--;
  }
  console.log(BinancePOINTS);
  WalletsOrder(
    BinancePOINTS,
    BitmexPOINTS,
    CexioPOINTS,
    CoinbasePOINTS,
    CryptocomPOINTS,
    LedgerPOINTS,
    TrezorPOINTS
  );
}

function question1getanswerBack() {
  
  var Country = inCountry.value;
  //Binance us href
  console.log(BinancePOINTS);
  if (Country == "United States") {
    BinancePOINTS++;
  }
  console.log(BinancePOINTS);
  WalletsOrder(
    BinancePOINTS,
    BitmexPOINTS,
    CexioPOINTS,
    CoinbasePOINTS,
    CryptocomPOINTS,
    LedgerPOINTS,
    TrezorPOINTS
  );
}

function question2getanswer()
{
  radio1 = document.getElementById("question2radio1");
  radio2 = document.getElementById("question2radio2");
  radio3 = document.getElementById("question2radio3");
  radio4 = document.getElementById("question2radio4");
  if (radio1.checked) {
    var Experiance = 1;
  }
  if (radio2.checked) {
    var Experiance = 2;
  }
  if (radio3.checked) {
    var Experiance = 3;
  }
  if (radio4.checked) {
    var Experiance = 4;
  }

  if (Experiance <= 2) {
    BitmexPOINTS++;
    CoinbasePOINTS++;
    CryptocomPOINTS++;
    TrezorPOINTS++;
  } else {
    BinancePOINTS++;
    LedgerPOINTS++;
    CexioPOINTS++;
  }
  
  WalletsOrder(
    BinancePOINTS,
    BitmexPOINTS,
    CexioPOINTS,
    CoinbasePOINTS,
    CryptocomPOINTS,
    LedgerPOINTS,
    TrezorPOINTS
  );
}

function question2getanswerBack()
{
  radio1 = document.getElementById("question2radio1");
  radio2 = document.getElementById("question2radio2");
  radio3 = document.getElementById("question2radio3");
  radio4 = document.getElementById("question2radio4");
  if (radio1.checked) {
    var Experiance = 1;
  }
  if (radio2.checked) {
    var Experiance = 2;
  }
  if (radio3.checked) {
    var Experiance = 3;
  }
  if (radio4.checked) {
    var Experiance = 4;
  }

  if (Experiance <= 2) {
    BitmexPOINTS--;
    CoinbasePOINTS--;
    CryptocomPOINTS--;
    TrezorPOINTS--;
  } else {
    BinancePOINTS--;
    LedgerPOINTS--;
    CexioPOINTS--;
  }
  
  WalletsOrder(
    BinancePOINTS,
    BitmexPOINTS,
    CexioPOINTS,
    CoinbasePOINTS,
    CryptocomPOINTS,
    LedgerPOINTS,
    TrezorPOINTS
  );
}

function question3getanswer() {
  //1=I want private key
  //2=CEX
  radio1 = document.getElementById("question3radio1");
  radio2 = document.getElementById("question3radio2");
  if (radio1.checked) {
    var Security = 1;
  }
  if (radio2.checked) {
    var Security = 2;
  }

  if (Security == 1) {
    LedgerPOINTS++;
    TrezorPOINTS++;
  } else {
    BinancePOINTS++;
    BitmexPOINTS++;
    CexioPOINTS++;
    CoinbasePOINTS++;
    CryptocomPOINTS++;
  }

  WalletsOrder(
    BinancePOINTS,
    BitmexPOINTS,
    CexioPOINTS,
    CoinbasePOINTS,
    CryptocomPOINTS,
    LedgerPOINTS,
    TrezorPOINTS
  );
  return Security;
}

function question3getanswerBack() {
  //1=I want private key
  //2=CEX
  radio1 = document.getElementById("question3radio1");
  radio2 = document.getElementById("question3radio2");
  if (radio1.checked) {
    var Security = 1;
  }
  if (radio2.checked) {
    var Security = 2;
  }

  if (Security == 1) {
    LedgerPOINTS--;
    TrezorPOINTS--;
  } else {
    BinancePOINTS--;
    BitmexPOINTS--;
    CexioPOINTS--;
    CoinbasePOINTS--;
    CryptocomPOINTS--;
  }

  WalletsOrder(
    BinancePOINTS,
    BitmexPOINTS,
    CexioPOINTS,
    CoinbasePOINTS,
    CryptocomPOINTS,
    LedgerPOINTS,
    TrezorPOINTS
  );
  return Security;
}

function question4getanswer() {
  //1=yes
  //2=no
  radio1 = document.getElementById("question4radio1");
  radio2 = document.getElementById("question4radio2");
  radio2 = document.getElementById("question4radio3");
  if (radio1.checked) {
    var Centralised = 1;
  }
  if (radio2.checked) {
    var Centralised = 2;
  }
  if (Centralised==1) {
    BinancePOINTS++;
    BitmexPOINTS++;
    CexioPOINTS++;
    CoinbasePOINTS++;
    CryptocomPOINTS++;
  } 
  if(Centralised==2) {
    //ide kellenek majd a dapps-os walletok, mint a exodus, terra station, metamask
  }
  else {
    TrezorPOINTS++
    LedgerPOINTS++
  }

  WalletsOrder(
    BinancePOINTS,
    BitmexPOINTS,
    CexioPOINTS,
    CoinbasePOINTS,
    CryptocomPOINTS,
    LedgerPOINTS,
    TrezorPOINTS
  );
}

function question4getanswerBack() {
  //1=yes
  //2=no
  radio1 = document.getElementById("question4radio1");
  radio2 = document.getElementById("question4radio2");
  if (radio1.checked) {
    var Centralised = 1;
  }
  if (radio2.checked) {
    var Centralised = 2;
  }
  if (Centralised==1) {
    BinancePOINTS--;
    BitmexPOINTS--;
    CexioPOINTS--;
    CoinbasePOINTS--;
    CryptocomPOINTS--;
  } else {
    TrezorPOINTS--
    LedgerPOINTS--
  }

  WalletsOrder(
    BinancePOINTS,
    BitmexPOINTS,
    CexioPOINTS,
    CoinbasePOINTS,
    CryptocomPOINTS,
    LedgerPOINTS,
    TrezorPOINTS
  );
}

function question5getanswer() {
  var Daily = 3;
  var Weekly = 3;
  var Monthly = 3;
  var Lessoften = 3;

  radio1 = document.getElementById("question5radio1");
  radio2 = document.getElementById("question5radio2");
  radio3 = document.getElementById("question5radio3");
  radio4 = document.getElementById("question5radio4");

  if (radio1.checked) {
    Daily = 1;
  }
  if (radio2.checked) {
    Weekly = 1;
  }
  if (radio3.checked) {
    Monthly = 1;
  }
  if (radio4.checked) {
    Lessoften = 1;
  }

  if (BinanceDaily == Daily) {
    BinancePOINTS += 1;
  }
  if (BitmexDaily == Daily) {
    BitmexPOINTS += 1;
  }
  if (CexioDaily == Daily) {
    CexioPOINTS += 1;
  }
  if (CoinbaseDaily == Daily) {
    CoinbasePOINTS += 1;
  }
  if (CryptocomDaily == Daily) {
    CryptocomPOINTS += 1;
  }
  if (LedgerDaily == Daily) {
    LedgerPOINTS += 1;
  }
  if (TrezorDaily == Daily) {
    TrezorPOINTS += 1;
  }

  if (BinanceWeekly == Weekly) {
    BinancePOINTS += 1;
  }
  if (BitmexWeekly == Weekly) {
    BitmexPOINTS += 1;
  }
  if (CexioWeekly == Weekly) {
    CexioPOINTS += 1;
  }
  if (CoinbaseWeekly == Weekly) {
    CoinbasePOINTS += 1;
  }
  if (CryptocomWeekly == Weekly) {
    CryptocomPOINTS += 1;
  }
  if (LedgerWeekly == Weekly) {
    LedgerPOINTS += 1;
  }
  if (TrezorWeekly == Weekly) {
    TrezorPOINTS += 1;
  }

  if (BinanceMonthly == Monthly) {
    BinancePOINTS += 1;
  }
  if (BitmexMonthly == Monthly) {
    BitmexPOINTS += 1;
  }
  if (CexioMonthly == Monthly) {
    CexioPOINTS += 1;
  }
  if (CoinbaseMonthly == Monthly) {
    CoinbasePOINTS += 1;
  }
  if (CryptocomMonthly == Monthly) {
    CryptocomPOINTS += 1;
  }
  if (LedgerMonthly == Monthly) {
    LedgerPOINTS += 1;
  }
  if (TrezorMonthly == Monthly) {
    TrezorPOINTS += 1;
  }

  if (BinanceLessoften == Lessoften) {
    BinancePOINTS += 1;
  }
  if (BitmexLessoften == Lessoften) {
    BitmexPOINTS += 1;
  }
  if (CexioLessoften == Lessoften) {
    CexioPOINTS += 1;
  }
  if (CoinbaseLessoften == Lessoften) {
    CoinbasePOINTS += 1;
  }
  if (CryptocomLessoften == Lessoften) {
    CryptocomPOINTS += 1;
  }
  if (LedgerLessoften == Lessoften) {
    LedgerPOINTS += 1;
  }
  if (TrezorLessoften == Lessoften) {
    TrezorPOINTS += 1;
  }

  WalletsOrder(
    BinancePOINTS,
    BitmexPOINTS,
    CexioPOINTS,
    CoinbasePOINTS,
    CryptocomPOINTS,
    LedgerPOINTS,
    TrezorPOINTS
  );
}

function question5getanswerBack() {
  var Daily = 3;
  var Weekly = 3;
  var Monthly = 3;
  var Lessoften = 3;

  radio1 = document.getElementById("question5radio1");
  radio2 = document.getElementById("question5radio2");
  radio3 = document.getElementById("question5radio3");
  radio4 = document.getElementById("question5radio4");

  if (radio1.checked) {
    Daily = 1;
  }
  if (radio2.checked) {
    Weekly = 1;
  }
  if (radio3.checked) {
    Monthly = 1;
  }
  if (radio4.checked) {
    Lessoften = 1;
  }

  if (BinanceDaily == Daily) {
    BinancePOINTS -= 1;
  }
  if (BitmexDaily == Daily) {
    BitmexPOINTS -= 1;
  }
  if (CexioDaily == Daily) {
    CexioPOINTS -= 1;
  }
  if (CoinbaseDaily == Daily) {
    CoinbasePOINTS -= 1;
  }
  if (CryptocomDaily == Daily) {
    CryptocomPOINTS -= 1;
  }
  if (LedgerDaily == Daily) {
    LedgerPOINTS -= 1;
  }
  if (TrezorDaily == Daily) {
    TrezorPOINTS -= 1;
  }

  if (BinanceWeekly == Weekly) {
    BinancePOINTS -= 1;
  }
  if (BitmexWeekly == Weekly) {
    BitmexPOINTS -= 1;
  }
  if (CexioWeekly == Weekly) {
    CexioPOINTS -= 1;
  }
  if (CoinbaseWeekly == Weekly) {
    CoinbasePOINTS -= 1;
  }
  if (CryptocomWeekly == Weekly) {
    CryptocomPOINTS -= 1;
  }
  if (LedgerWeekly == Weekly) {
    LedgerPOINTS -= 1;
  }
  if (TrezorWeekly == Weekly) {
    TrezorPOINTS -= 1;
  }

  if (BinanceMonthly == Monthly) {
    BinancePOINTS -= 1;
  }
  if (BitmexMonthly == Monthly) {
    BitmexPOINTS -= 1;
  }
  if (CexioMonthly == Monthly) {
    CexioPOINTS -= 1;
  }
  if (CoinbaseMonthly == Monthly) {
    CoinbasePOINTS -= 1;
  }
  if (CryptocomMonthly == Monthly) {
    CryptocomPOINTS -= 1;
  }
  if (LedgerMonthly == Monthly) {
    LedgerPOINTS -= 1;
  }
  if (TrezorMonthly == Monthly) {
    TrezorPOINTS -= 1;
  }

  if (BinanceLessoften == Lessoften) {
    BinancePOINTS -= 1;
  }
  if (BitmexLessoften == Lessoften) {
    BitmexPOINTS -= 1;
  }
  if (CexioLessoften == Lessoften) {
    CexioPOINTS -= 1;
  }
  if (CoinbaseLessoften == Lessoften) {
    CoinbasePOINTS -= 1;
  }
  if (CryptocomLessoften == Lessoften) {
    CryptocomPOINTS -= 1;
  }
  if (LedgerLessoften == Lessoften) {
    LedgerPOINTS -= 1;
  }
  if (TrezorLessoften == Lessoften) {
    TrezorPOINTS -= 1;
  }

  WalletsOrder(
    BinancePOINTS,
    BitmexPOINTS,
    CexioPOINTS,
    CoinbasePOINTS,
    CryptocomPOINTS,
    LedgerPOINTS,
    TrezorPOINTS
  );
}

function question6getanswer() {
  var HOLD = 0;
  var Earning = 0;
  var NFT = 0;
  var Multiprotocoll = 0;
  var Swaping = 0;
  var Layer1token = 0;

  checkbox1 = document.getElementById("question6checkbox1");
  checkbox2 = document.getElementById("question6checkbox2");
  checkbox3 = document.getElementById("question6checkbox3");
  checkbox4 = document.getElementById("question6checkbox4");
  checkbox5 = document.getElementById("question6checkbox5");
  checkbox6 = document.getElementById("question6checkbox6");

  if (checkbox1.checked) {
    HOLD = 1;
  }
  if (checkbox2.checked) {
    Earning = 1;
  }
  if (checkbox3.checked) {
    NFT = 1;
  }
  if (checkbox4.checked) {
    Multiprotocoll = 1;
  }
  if (checkbox5.checked) {
    Swaping = 1;
  }
  if (checkbox6.checked) {
    Layer1token = 1;
  }

  if (BinanceHOLD == HOLD) {
    BinancePOINTS += 1;
  }
  if (BitmexHOLD == HOLD) {
    BitmexPOINTS += 1;
  }
  if (CexioHOLD == HOLD) {
    CexioPOINTS += 1;
  }
  if (CoinbaseHOLD == HOLD) {
    CoinbasePOINTS += 1;
  }
  if (CryptocomHOLD == HOLD) {
    CryptocomPOINTS += 1;
  }
  if (LedgerHOLD == HOLD) {
    LedgerPOINTS += 1;
  }
  if (TrezorHOLD == HOLD) {
    TrezorPOINTS += 1;
  }

  if (BinanceEarning == Earning) {
    BinancePOINTS += 1;
  }
  if (BitmexEarning == Earning) {
    BitmexPOINTS += 1;
  }
  if (CexioEarning == Earning) {
    CexioPOINTS += 1;
  }
  if (CoinbaseEarning == Earning) {
    CoinbasePOINTS += 1;
  }
  if (CryptocomEarning == Earning) {
    CryptocomPOINTS += 1;
  }
  if (LedgerEarning == Earning) {
    LedgerPOINTS += 1;
  }
  if (TrezorEarning == Earning) {
    TrezorPOINTS += 1;
  }

  if (BinanceNFT == NFT) {
    BinancePOINTS += 1;
  }
  if (BitmexNFT == NFT) {
    BitmexPOINTS += 1;
  }
  if (CexioNFT == NFT) {
    CexioPOINTS += 1;
  }
  if (CoinbaseNFT == NFT) {
    CoinbasePOINTS += 1;
  }
  if (CryptocomNFT == NFT) {
    CryptocomPOINTS += 1;
  }
  if (LedgerNFT == NFT) {
    LedgerPOINTS += 1;
  }
  if (TrezorNFT == NFT) {
    TrezorPOINTS += 1;
  }

  if (BinanceMultiprotocoll == Multiprotocoll) {
    BinancePOINTS += 1;
  }
  if (BitmexMultiprotocoll == Multiprotocoll) {
    BitmexPOINTS += 1;
  }
  if (CexioMultiprotocoll == Multiprotocoll) {
    CexioPOINTS += 1;
  }
  if (CoinbaseMultiprotocoll == Multiprotocoll) {
    CoinbasePOINTS += 1;
  }
  if (CryptocomMultiprotocoll == Multiprotocoll) {
    CryptocomPOINTS += 1;
  }
  if (LedgerMultiprotocoll == Multiprotocoll) {
    LedgerPOINTS += 1;
  }
  if (TrezorMultiprotocoll == Multiprotocoll) {
    TrezorPOINTS += 1;
  }

  if (BinanceSwaping == Swaping) {
    BinancePOINTS += 1;
  }
  if (BitmexSwaping == Swaping) {
    BitmexPOINTS += 1;
  }
  if (CexioSwaping == Swaping) {
    CexioPOINTS += 1;
  }
  if (CoinbaseSwaping == Swaping) {
    CoinbasePOINTS += 1;
  }
  if (CryptocomSwaping == Swaping) {
    CryptocomPOINTS += 1;
  }
  if (LedgerSwaping == Swaping) {
    LedgerPOINTS += 1;
  }
  if (TrezorSwaping == Swaping) {
    TrezorPOINTS += 1;
  }

  if (BinanceLayer1token == Layer1token) {
    BinancePOINTS += 1;
  }
  if (BitmexLayer1token == Layer1token) {
    BitmexPOINTS += 1;
  }
  if (CexioLayer1token == Layer1token) {
    CexioPOINTS += 1;
  }
  if (CoinbaseLayer1token == Layer1token) {
    CoinbasePOINTS += 1;
  }
  if (CryptocomLayer1token == Layer1token) {
    CryptocomPOINTS += 1;
  }
  if (LedgerLayer1token == Layer1token) {
    LedgerPOINTS += 1;
  }
  if (TrezorLayer1token == Layer1token) {
    TrezorPOINTS += 1;
  }

  WalletsOrder(
    BinancePOINTS,
    BitmexPOINTS,
    CexioPOINTS,
    CoinbasePOINTS,
    CryptocomPOINTS,
    LedgerPOINTS,
    TrezorPOINTS
  );
}
