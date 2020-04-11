var bill = 0.0;
var oldBill;
var numOfPeople = 1;
var oldNumOfPeople;
var percentage = 15;
var oldPercentage;
var totalTip;
var tipPerPerson;
var totalWithTip;

function billAmount() {
  if (isNaN(bill)) {
    bill = oldBill;
  }
  document.getElementById("bill").value = `${bill}.00`;
}

function tip() {
  if (isNaN(percentage)) {
    percentage = oldPercentage;
  }
  document.getElementById("percentage").value = `${percentage}%`;
}

function split() {
  if (isNaN(numOfPeople)) {
    numOfPeople = oldNumOfPeople;
  }
  document.getElementById("num-of-people").value = `${numOfPeople}`;
}

function calculate() {
  billAmount();
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

function saveOldInput(id) {
  return parseFloat(document.getElementById(id).value);
}

// Bill input
document.getElementById("bill").addEventListener("keyup", function() {
  if (event.keyCode === 13) {
    bill = parseFloat(document.getElementById("bill").value);
    calculate();
  }
});

document.getElementById("bill").addEventListener("focusin", function() {
  oldBill = saveOldInput("bill");
});

document.getElementById("bill").addEventListener("focusout", function() {
  bill = parseFloat(document.getElementById("bill").value);
  calculate();
});

// Percentage input
document.getElementById("percentage").addEventListener("keyup", function(e) {
  if (event.keyCode === 13) {
    percentage = parseFloat(document.getElementById("percentage").value);
    calculate();
  }
});

document.getElementById("percentage").addEventListener("focusin", function() {
  oldPercentage = saveOldInput("percentage");
});

document.getElementById("percentage").addEventListener("focusout", function() {
  percentage = parseFloat(document.getElementById("percentage").value);
  calculate();
});

// NumOfPeople input
document.getElementById("num-of-people").addEventListener("keyup", function(e) {
  if (event.keyCode === 13) {
    numOfPeople = parseFloat(document.getElementById("num-of-people").value);
    calculate();
  }
});

document
  .getElementById("num-of-people")
  .addEventListener("focusin", function() {
    oldNumOfPeople = saveOldInput("num-of-people");
  });

document
  .getElementById("num-of-people")
  .addEventListener("focusout", function() {
    numOfPeople = parseFloat(document.getElementById("num-of-people").value);
    calculate();
  });

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
