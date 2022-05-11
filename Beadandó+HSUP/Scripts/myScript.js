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
//if the user would like to trade,hold,stake with lower APY
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
