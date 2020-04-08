var bill = 0.0;
var numOfPeople = 1;
var percentage = 15;
var totalTip;
var tipPerPerson;
var totalWithTip;

function tip() {
  document.getElementById("percentage").innerHTML = `${percentage}%`;
}
function split() {
  document.getElementById("num-of-people").innerHTML = numOfPeople;
}

function calculate() {
  tip();
  split();
  totalTip = (bill * percentage) / 100;

  tipPerPerson = totalTip / numOfPeople;
  document.getElementById("result-tip").innerHTML = `$ ${parseFloat(
    tipPerPerson
  ).toFixed(2)}`;

  totalWithTip = tipPerPerson + bill / numOfPeople;
  document.getElementById("result-total").innerHTML = `$ ${parseFloat(
    totalWithTip
  ).toFixed(2)}`;
}

document.getElementById("bill").addEventListener("keyup", function(e) {
  if (event.keyCode === 13) {
    bill = document.getElementById("bill").value;
    calculate();
  }
});

document.getElementById("bill").addEventListener("focusout", function() {
  bill = document.getElementById("bill").value;
  calculate();
});

document.getElementById("num-of-people").innerHTML = numOfPeople;

document.getElementById("add-people").addEventListener("click", function() {
  if (numOfPeople < 50) {
    numOfPeople++;
  } else {
    numOfPeople = 50;
  }
  calculate();
});
document.getElementById("minus-people").addEventListener("click", function() {
  if (numOfPeople > 1) {
    numOfPeople--;
  } else {
    numOfPeople = 1;
  }
  calculate();
});

document.getElementById("add-percent").addEventListener("click", function() {
  if (percentage < 100) {
    percentage++;
  } else {
    percentage = 100;
  }
  calculate();
});
document.getElementById("minus-percent").addEventListener("click", function() {
  if (percentage > 0) {
    percentage--;
  } else {
    percentage = 0;
  }
  calculate();
});

calculate();
