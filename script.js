let isScientific = false;

function append(value) {
    document.getElementById("result").value += value;
}

function clearResult() {
    document.getElementById("result").value = "";
}

function calculate() {
    let expression = document.getElementById("result").value;
    document.getElementById("result").value = eval(expression);
}

function toggleMode() {
    isScientific = !isScientific;

    document.getElementById("simpleButtons").style.display =
        isScientific ? "none" : "block";

    document.getElementById("scientificButtons").style.display =
        isScientific ? "block" : "none";

    document.querySelector(".toggle").innerText =
        isScientific ? "Switch to Simple" : "Switch to Scientific";
}

function scientific(func) {
    let value = document.getElementById("result").value;
    document.getElementById("result").value = eval(func + "(" + value + ")");
}

function square() {
    let value = document.getElementById("result").value;
    document.getElementById("result").value = value * value;
}

function power() {
    let value = document.getElementById("result").value;
    document.getElementById("result").value = Math.pow(value, 2);
}
