//api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Cterra-luna%2Csolana%2Cavax%2Cshiba-inu%2Cavalanche-2&vs_currencies=usd
//here comes the API call for Cryptocurreny prices from coingecko

var btc = document.getElementById("bitcoin");
var eth = document.getElementById("eth");
var bnb = document.getElementById("bnb");

var settings = {
  async: true,
  scrossDomain: true,
  url: "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Cbinancecoin&vs_currencies=usd",
  method: "GET",
  headers: {},
};

$.ajax(settings).done(function (response) {
  btc.innerHTML = response.bitcoin.usd;
  eth.innerHTML = response.ethereum.usd;
  bnb.innerHTML = response.binancecoin.usd;
});
