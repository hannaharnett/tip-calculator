var bill = 0.0;
var oldBill;
var numOfPeople = 1;
var oldNumOfPeople;
var percentage = 15;
var oldPercentage;
var totalTip;
var tipPerPerson;
var totalWithTip;

function isItNaN(value, oldValue) {
  return isNaN(value) ? oldValue : value;
}

function billAmount() {
  bill = isItNaN(bill, oldBill);
  document.getElementById("bill").value = `${bill}.00`;
}

function tip() {
  percentage = isItNaN(percentage, oldPercentage);
  document.getElementById("percentage").value = `${percentage}%`;
}

function split() {
  numOfPeople = isItNaN(numOfPeople, oldNumOfPeople);
  document.getElementById("num-of-people").value = `${numOfPeople}`;
}

function calculate() {
  billAmount();
  tip();
  split();
  totalTip = (bill * percentage) / 100;

  // Add 'per person' text when splitting bill
  document.querySelectorAll(".each").forEach(function(item) {
    item.innerHTML = numOfPeople > 1 ? "per person" : "";
  });

  tipPerPerson = totalTip / numOfPeople;
  document.getElementById("result-tip").innerHTML = `$ ${parseFloat(
    tipPerPerson
  ).toFixed(2)}`;

  totalWithTip = tipPerPerson + bill / numOfPeople;
  document.getElementById("result-total").innerHTML = `$ ${parseFloat(
    totalWithTip
  ).toFixed(2)}`;
}

function saveInput(id) {
  return parseFloat(document.getElementById(id).value);
}

const inputs = document.querySelector(".calculator");
// Keyup Events
inputs.addEventListener("keyup", function(event) {
  let { target, keyCode } = event;
  if (keyCode !== 13) {
    return;
  }

  if (target.id === "bill") {
    bill = saveInput("bill");
    calculate();
  }

  if (target.id === "percentage") {
    percentage = saveInput("percentage");
    calculate();
  }

  if (target.id === "num-of-people") {
    numOfPeople = saveInput("num-of-people");
    calculate();
  }
});

// Focusin Events
inputs.addEventListener("focusin", function(event) {
  let { target } = event;
  if (!target.matches("input")) {
    return;
  }

  if (target.id === "bill") {
    oldBill = saveInput("bill");
  }

  if (target.id === "percentage") {
    oldPercentage = saveInput("percentage");
  }

  if (target.id === "num-of-people") {
    oldNumOfPeople = saveInput("num-of-people");
  }
});

// Focusout Events
inputs.addEventListener("focusout", function(event) {
  let { target } = event;
  if (!target.matches("input")) {
    return;
  }

  if (target.id === "bill") {
    bill = saveInput("bill");
    calculate();
  }

  if (target.id === "percentage") {
    percentage = saveInput("percentage");
    calculate();
  }

  if (target.id === "num-of-people") {
    numOfPeople = saveInput("num-of-people");
    calculate();
  }
});

// Button clicks
const buttons = document.querySelector(".calculator");
buttons.addEventListener("click", function(event) {
  let { target } = event;
  if (!target.matches("button")) {
    return;
  }

  if (target.id === "add-percent") {
    percentage < 100 ? percentage++ : (percentage = 100);
    calculate();
  }

  if (target.id === "minus-percent") {
    percentage > 0 ? percentage-- : (percentage = 0);
    calculate();
  }

  if (target.id === "add-people") {
    numOfPeople < 50 ? numOfPeople++ : (numOfPeople = 50);
    calculate();
  }

  if (target.id === "minus-people") {
    numOfPeople > 1 ? numOfPeople-- : (numOfPeople = 1);
    calculate();
  }
});

calculate();
