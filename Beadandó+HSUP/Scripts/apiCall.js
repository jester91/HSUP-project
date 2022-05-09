//api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Cterra-luna%2Csolana%2Cavax%2Cshiba-inu%2Cavalanche-2&vs_currencies=usd
//here comes the API call for Cryptocurreny prices from coingecko

var btc = document.getElementById("bitcoin");
var eth = document.getElementById("eth");
var luna = document.getElementById("luna");
var solana = document.getElementById("solana");
var shiba = document.getElementById("shiba");

var settings = {
  async: true,
  scrossDomain: true,
  url: "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Cterra-luna%2Csolana%2Cavax%2Cshiba-inu%2Cavalanche-2&vs_currencies=usd",
  method: "GET",
  headers: {},
};

$.ajax(settings).done(function (response) {
  console.log(response);
  btc.innerHTML = response.bitcoin.usd;
  eth.innerHTML = response.ethereum.usd;
  luna.innerHTML = response.terra-luna.usd;
  solana.innerHTML = response.solana.usd;
});
