let display = "";

function appendToDisplay(value) {
  display += value;
  document.getElementById("display").value = display;
}

function clearDisplay() {
  display = "";
  document.getElementById("display").value = "";
}

function calculate() {
  try {
    display = eval(display).toString();
    document.getElementById("display").value = display;
  } catch (error) {
    document.getElementById("display").value = "Error";
    display = "";
  }
}
