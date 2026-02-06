let history = "";

function append(value){
    document.getElementById("display").value += value;
}

function deleteLast(){
    let val = document.getElementById("display").value;
    document.getElementById("display").value = val.slice(0,-1);
}

function calculate(){
    let exp = document.getElementById("display").value;
    let result = eval(exp);

    history += exp + " = " + result + "<br>";
    document.getElementById("history").innerHTML = history;

    document.getElementById("display").value = result;
}

function clearAll(){
    document.getElementById("display").value = "";
    history = "";
    document.getElementById("history").innerHTML = "";
}

document.addEventListener("keydown", function(event){
    let key = event.key;

    if("0123456789+-*/.%".includes(key)){
        append(key);
    }

    if(key === "Enter"){
        calculate();
    }

    if(key === "Backspace"){
        deleteLast();
    }

    if(key === "Escape"){
        clearAll();
    }
});
