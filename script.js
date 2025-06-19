window.onload = function () {
  const display = document.getElementById("display");

  window.appendValue = function (value) {
    display.value += value;
  };

  window.clearDisplay = function () {
    display.value = "";
  };

  window.deleteLast = function () {
    display.value = display.value.slice(0, -1);
  };

  window.calculate = function () {
    try {
      display.value = eval(display.value);
    } catch (error) {
      display.value = "Error";
    }
  };

  document.addEventListener("keydown", function (event) {
    const key = event.key;
    if ("0123456789+-*/.".includes(key)) {
      appendValue(key);
    } else if (key === "Enter") {
      calculate();
    } else if (key === "Backspace") {
      deleteLast();
    } else if (key.toLowerCase() === "c") {
      clearDisplay();
    }
  });
};