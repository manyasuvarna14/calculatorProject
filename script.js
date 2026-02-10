let isScientific = false;

document.addEventListener("keydown", function(event) {
    const allowed = "0123456789+-*/.";
    if (allowed.includes(event.key)) {
        append(event.key);
    } else if (event.key === "Enter") {
        calculate();
    } else if (event.key === "Backspace") {
        let box = document.getElementById("result");
        box.value = box.value.slice(0, -1);
    }
});

function append(value) {
    document.getElementById("result").value += value;
}

function clearAll() {
    document.getElementById("result").value = "";
    document.getElementById("history").innerText = "";
}

function calculate() {
    let expression = document.getElementById("result").value;
    let answer = eval(expression);

    document.getElementById("history").innerText = expression + " =";
    document.getElementById("result").value = answer;
}

function toggleMode() {
    isScientific = !isScientific;

    document.getElementById("simpleButtons").style.display =
        isScientific ? "none" : "block";

    document.getElementById("scientificButtons").style.display =
        isScientific ? "block" : "none";
}

function scientific(func) {
    let value = document.getElementById("result").value;
    let result = eval(func + "(" + value + ")");
    document.getElementById("history").innerText = func + "(" + value + ") =";
    document.getElementById("result").value = result;
}

function square() {
    let value = document.getElementById("result").value;
    document.getElementById("history").innerText = value + "² =";
    document.getElementById("result").value = value * value;
}

function power() {
    let value = document.getElementById("result").value;
    document.getElementById("history").innerText = value + "^2 =";
    document.getElementById("result").value = Math.pow(value, 2);
}
