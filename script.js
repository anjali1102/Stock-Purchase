var initialPrice = document.querySelector("#initial-price");
var stockQuantity = document.querySelector("#quantity-stocks");
var currentPrice = document.querySelector("#current-price");
var submitBtn = document.querySelector("#submit");
var outputBox = document.querySelector("#output-box");
submitBtn.addEventListener("click", submitHandler);

function submitHandler() {
  var ip = initialPrice.value;
  var qty = stockQuantity.value;
  var curr = currentPrice.value;

  calculateProfitAndLoss(ip, qty, curr);
}

function calculateProfitAndLoss(initial, quantity, current) {
  if (initial > current) {
    //loss here
    var loss = (initial - current) * quantity;
    var lossPercentage = (loss / initial) * 100;
    outputBox.style.color = "red";

    showOutput(
        `Hey the loss is ${loss} and the percent is ${lossPercentage}%`
    );
  }else if( initial<current){
    //profit here
    var profit = (current - initial) * quantity;
    var profitPercentage = (profit / initial) * 100;
    outputBox.style.color = "green";

    showOutput(
      `Hey the profit is ${profit} and the percent is ${profitPercentage}%`
    );
  } else {
    showOutput(`No pain no gain AND no Gain no pain`);
    outputBox.style.color="black";
  }
}
function showOutput(message) {
  outputBox.innerHTML = message;
}
