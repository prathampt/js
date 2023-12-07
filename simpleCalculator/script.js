function add() {
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    document.getElementById("answer").innerText = String(num1 + num2);
    document.getElementById("symbol").innerText = "+";
    console.log(num1);
}

function multiply() {
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    document.getElementById("answer").innerText = String(num1 * num2);
    document.getElementById("symbol").innerText = "*";
}

function subtract() {
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    document.getElementById("answer").innerText = String(num1 - num2);
    document.getElementById("symbol").innerText = "-";
}

function divide() {
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    if (num2 !== 0) {
        document.getElementById("answer").innerText = String(num1 / num2);
        document.getElementById("symbol").innerText = "/";
    } else {
        document.getElementById("answer").innerText = "Cannot divide by zero";
        document.getElementById("symbol").innerText = "/";
    }
}
