function menu() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

//Question page "next" and "back" button event

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

Binance
Bitmex
Cexio
Coinbase
Cryptocom
Ledger
Trezor
//Binance profile
let BinancePOINTS = 0;
let BinanceExperiance = 2;
let BinanceSecurity = 2;
let BinanceCentralised = 1;
let BinanceDaily = 1;
let BinanceWeekly = 1;
let BinanceMonthly = 0;
let BinanceLessoften = 0;
let BinanceHOLD = 1;
let BinanceEarning = 1;
let BinanceNFT = 0;
let BinanceMultiprotocoll = 0;
let BinanceSwaping = 0;
let BinanceLayer1token = 0;

//Bitmex profile
let BitmexPOINTS = 0;
let BitmexExperiance = 2;
let BitmexSecurity = 2;
let BitmexCentralised = 1;
let BitmexDaily = 1;
let BitmexWeekly = 1;
let BitmexMonthly = 0;
let BitmexLessoften = 0;
let BitmexHOLD = 1;
let BitmexEarning = 1;
let BitmexNFT = 0;
let BitmexMultiprotocoll = 0;
let BitmexSwaping = 0;
let BitmexLayer1token = 0;
//Cexio profile
let CexioPOINTS = 0;
let CexioExperiance = 2;
let CexioSecurity = 2;
let CexioCentralised = 1;
let CexioDaily = 1;
let CexioWeekly = 1;
let CexioMonthly = 0;
let CexioLessoften = 0;
let CexioHOLD = 1;
let CexioEarning = 1;
let CexioNFT = 0;
let CexioMultiprotocoll = 0;
let CexioSwaping = 0;
let CexioLayer1token = 0;

//Coinbase profile
let CoinbasePOINTS = 0;
let CoinbaseExperiance = 2;
let CoinbaseSecurity = 2;
let CoinbaseCentralised = 1;
let CoinbaseDaily = 1;
let CoinbaseWeekly = 1;
let CoinbaseMonthly = 0;
let CoinbaseLessoften = 0;
let CoinbaseHOLD = 1;
let CoinbaseEarning = 1;
let CoinbaseNFT = 0;
let CoinbaseMultiprotocoll = 0;
let CoinbaseSwaping = 0;
let CoinbaseLayer1token = 0;
//Cryptocom profile
let CryptocomPOINTS = 0;
let CryptocomExperiance = 2;
let CryptocomSecurity = 2;
let CryptocomCentralised = 1;
let CryptocomDaily = 1;
let CryptocomWeekly = 1;
let CryptocomMonthly = 1;
let CryptocomLessoften = 0;
let CryptocomHOLD = 1;
let CryptocomEarning = 1;
let CryptocomNFT = 1;
let CryptocomMultiprotocoll = 0;
let CryptocomSwaping = 0;
let CryptocomLayer1token = 0;
//Ledger profile
let LedgerPOINTS = 0;
let LedgerExperiance = 3;
let LedgerSecurity = 1;
let LedgerCentralised = 2;
let LedgerDaily = 0;
let LedgerWeekly = 1;
let LedgerMonthly = 1;
let LedgerLessoften = 1;
let LedgerHOLD = 1;
let LedgerEarning = 1;
let LedgerNFT = 0;
let LedgerMultiprotocoll = 0;
let LedgerSwaping = 0;
let LedgerLayer1token = 0;
//Trezor profile
let TrezorPOINTS = 0;
let TrezorExperiance = 3;
let TrezorSecurity = 1;
let TrezorCentralised = 2;
let TrezorDaily = 0;
let TrezorWeekly = 1;
let TrezorMonthly = 1;
let TrezorLessoften = 1;
let TrezorHOLD = 1;
let TrezorEarning = 1;
let TrezorNFT = 0;
let TrezorMultiprotocoll = 0;
let TrezorSwaping = 0;
let TrezorLayer1token = 0;



function question1getanswer() {
  var Country= inCountry.value
  var City= inCity.value
  
  //Binance us href

}

function question2getanswer() {
  

  if (question2radio1.checked){var Experiance = 1}
  if (question2radio2.checked){var Experiance = 2}
  if (question2radio3.checked){var Experiance = 3}
  if (question2radio4.checked){var Experiance = 4}
  
  if (BinanceExperiance <= Experiance) {BinancePOINTS += 1}
  if (BitmexExperiance <= Experiance) {BitmexPOINTS += 1}
  if (CexioExperiance <= Experiance) {CexioPOINTS += 1}
  if (CoinbaseExperiance <= Experiance) {CoinbasePOINTS += 1}
  if (CryptocomExperiance <= Experiance) {CryptocomPOINTS += 1}
  if (LedgerExperiance <= Experiance) {LedgerPOINTS += 1}
  if (TrezorExperiance <= Experiance) {TrezorPOINTS += 1}

  Points=[BinancePOINTS,BitmexPOINTS,CexioPOINTS,CoinbasePOINTS,CryptocomPOINTS,LedgerPOINTS,TrezorPOINTS]

  Fist = Math.max(Points)

}

function question3getanswer() {
  //1=I want private key
  //2=CEX
  if (question3radio1.checked){var Security = 1}
  if (question3radio2.checked){var Security = 2}

  if (BinanceSecurity == Security) {BinancePOINTS +=1}
  if (BitmexSecurity == Security) {BitmexPOINTS +=1}
  if (CexioSecurity == Security) {CexioPOINTS +=1}
  if (CoinbaseSecurity == Security) {CoinbasePOINTS +=1}
  if (CryptocomSecurity == Security) {CryptocomPOINTS +=1}
  if (LedgerSecurity == Security) {LedgerPOINTS +=1}
  if (TrezorSecurity == Security) {TrezorPOINTS +=1}

 
}

function question4getanswer() {
  //1=yes
  //2=no
  if (question4radio1.checked){var Centralised = 1}
  if (question4radio2.checked){var Centralised = 2}
  
  if (BinanceCentralised == Centralised) {BinancePOINTS +=1}
  if (BitmexCentralised == Centralised) {BitmexPOINTS +=1}
  if (CexioCentralised == Centralised) {CexioPOINTS +=1}
  if (CoinbaseCentralised == Centralised) {CoinbasePOINTS +=1}
  if (CryptocomCentralised == Centralised) {CryptocomPOINTS +=1}
  if (LedgerCentralised == Centralised) {LedgerPOINTS +=1}
  if (TrezorCentralised == Centralised) {TrezorPOINTS +=1}

}

function question5getanswer() {
  var Daily = 3
  var Weekly = 3
  var Monthly = 3
  var Lessoften = 3
  if (question5radio1.checked){Daily = 1}
  if (question5radio2.checked){Weekly = 1}
  if (question5radio3.checked){Monthly = 1}
  if (question5radio4.checked){Lessoften = 1}
  
  if (BinanceDaily==Daily) {BinancePOINTS +=1}
  if (BitmexDaily==Daily) {BitmexPOINTS +=1}
  if (CexioDaily==Daily) {CexioPOINTS +=1}
  if (CoinbaseDaily==Daily) {CoinbasePOINTS +=1}
  if (CryptocomDaily==Daily) {CryptocomPOINTS +=1}
  if (LedgerDaily==Daily) {LedgerPOINTS +=1}
  if (TrezorDaily==Daily) {TrezorPOINTS +=1}

  if (BinanceWeekly==Weekly) {BinancePOINTS +=1}
  if (BitmexWeekly==Weekly) {BitmexPOINTS +=1}
  if (CexioWeekly==Weekly) {CexioPOINTS +=1}
  if (CoinbaseWeekly==Weekly) {CoinbasePOINTS +=1}
  if (CryptocomWeekly==Weekly) {CryptocomPOINTS +=1}
  if (LedgerWeekly==Weekly) {LedgerPOINTS +=1}
  if (TrezorWeekly==Weekly) {TrezorPOINTS +=1}

  if (BinanceMonthly==Monthly) {BinancePOINTS +=1}
  if (BitmexMonthly==Monthly) {BitmexPOINTS +=1}
  if (CexioMonthly==Monthly) {CexioPOINTS +=1}
  if (CoinbaseMonthly==Monthly) {CoinbasePOINTS +=1}
  if (CryptocomMonthly==Monthly) {CryptocomPOINTS +=1}
  if (LedgerMonthly==Monthly) {LedgerPOINTS +=1}
  if (TrezorMonthly==Monthly) {TrezorPOINTS +=1}

  if (BinanceLessoften==Lessoften) {BinancePOINTS +=1}
  if (BitmexLessoften==Lessoften) {BitmexPOINTS +=1}
  if (CexioLessoften==Lessoften) {CexioPOINTS +=1}
  if (CoinbaseLessoften==Lessoften) {CoinbasePOINTS +=1}
  if (CryptocomLessoften==Lessoften) {CryptocomPOINTS +=1}
  if (LedgerLessoften==Lessoften) {LedgerPOINTS +=1}
  if (TrezorLessoften==Lessoften) {TrezorPOINTS +=1}

}

function question6getanswer() {
  var HOLD = 0
  var Earning = 0
  var NFT = 0
  var Multiprotocoll = 0
  var Swaping = 0
  var Layer1token = 0

  if (question6checkbox1.checked){HOLD = 1}
  if (question6checkbox2.checked){Earning = 1}
  if (question6checkbox3.checked){NFT = 1}
  if (question6checkbox4.checked){Multiprotocoll = 1}
  if (question6checkbox5.checked){Swaping = 1}
  if (question6checkbox6.checked){Layer1token = 1}
  
  if (BinanceHOLD == HOLD) {BinancePOINTS +=1}
  if (BitmexHOLD == HOLD) {BitmexPOINTS +=1}
  if (CexioHOLD == HOLD) {CexioPOINTS +=1}
  if (CoinbaseHOLD == HOLD) {CoinbasePOINTS +=1}
  if (CryptocomHOLD == HOLD) {CryptocomPOINTS +=1}
  if (LedgerHOLD == HOLD) {LedgerPOINTS +=1}
  if (TrezorHOLD == HOLD) {TrezorPOINTS +=1}

  if (BinanceEarning == Earning) {BinancePOINTS +=1}
  if (BitmexEarning == Earning) {BitmexPOINTS +=1}
  if (CexioEarning == Earning) {CexioPOINTS +=1}
  if (CoinbaseEarning == Earning) {CoinbasePOINTS +=1}
  if (CryptocomEarning == Earning) {CryptocomPOINTS +=1}
  if (LedgerEarning == Earning) {LedgerPOINTS +=1}
  if (TrezorEarning == Earning) {TrezorPOINTS +=1}

  if (BinanceNFT == NFT) {BinancePOINTS +=1}
  if (BitmexNFT == NFT) {BitmexPOINTS +=1}
  if (CexioNFT == NFT) {CexioPOINTS +=1}
  if (CoinbaseNFT == NFT) {CoinbasePOINTS +=1}
  if (CryptocomNFT == NFT) {CryptocomPOINTS +=1}
  if (LedgerNFT == NFT) {LedgerPOINTS +=1}
  if (TrezorNFT == NFT) {TrezorPOINTS +=1}

  if (BinanceMultiprotocoll == Multiprotocoll) {BinancePOINTS +=1}
  if (BitmexMultiprotocoll == Multiprotocoll) {BitmexPOINTS +=1}
  if (CexioMultiprotocoll == Multiprotocoll) {CexioPOINTS +=1}
  if (CoinbaseMultiprotocoll == Multiprotocoll) {CoinbasePOINTS +=1}
  if (CryptocomMultiprotocoll == Multiprotocoll) {CryptocomPOINTS +=1}
  if (LedgerMultiprotocoll == Multiprotocoll) {LedgerPOINTS +=1}
  if (TrezorMultiprotocoll == Multiprotocoll) {TrezorPOINTS +=1}

  if (BinanceSwaping == Swaping) {BinancePOINTS +=1}
  if (BitmexSwaping == Swaping) {BitmexPOINTS +=1}
  if (CexioSwaping == Swaping) {CexioPOINTS +=1}
  if (CoinbaseSwaping == Swaping) {CoinbasePOINTS +=1}
  if (CryptocomSwaping == Swaping) {CryptocomPOINTS +=1}
  if (LedgerSwaping == Swaping) {LedgerPOINTS +=1}
  if (TrezorSwaping == Swaping) {TrezorPOINTS +=1}

  if (BinanceLayer1token == Layer1token) {BinancePOINTS +=1}
  if (BitmexLayer1token == Layer1token) {BitmexPOINTS +=1}
  if (CexioLayer1token == Layer1token) {CexioPOINTS +=1}
  if (CoinbaseLayer1token == Layer1token) {CoinbasePOINTS +=1}
  if (CryptocomLayer1token == Layer1token) {CryptocomPOINTS +=1}
  if (LedgerLayer1token == Layer1token) {LedgerPOINTS +=1}
  if (TrezorLayer1token == Layer1token) {TrezorPOINTS +=1}

}