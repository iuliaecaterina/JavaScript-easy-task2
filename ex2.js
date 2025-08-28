
function operatii(num1, num2) {
    console.log("Addition:", num1 + num2);
    console.log("Subtraction:", num1 - num2);
    console.log("Multiplication:", num1 * num2);
    console.log("Division:", num2 !== 0 ? num1 / num2 : "Nu putem imparti la 0");
}

let nr1 = parseFloat(prompt("Introduceti primul numar:"));
let nr2 = parseFloat(prompt("Introduceti al doilea numar:"));

operatii(nr1, nr2);