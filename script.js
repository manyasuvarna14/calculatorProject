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
        isScientific ? "none" : "grid";

    document.getElementById("scientificButtons").style.display =
        isScientific ? "grid" : "none";
}
