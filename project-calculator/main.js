const object_1 = document.getElementById('object_1');
const object_2 = document.getElementById('object_2');
const object_3 = document.getElementById('object_3');
const object_4 = document.getElementById('object_4');

function addition(a, b) {
    return a + b;
}

function subtraction(a, b) {
    return a - b;
}

function multiplication(a, b) {
    return a * b;
}

function division(a, b) {
    if (b == 0) alert('Nie można dzielić przez zero')
    return a / b;
}

function modulo(a, b) {
    return a % b;
}

function score() {
    let o1 = Number(object_1.value);
    let o3 = Number(object_3.value);
    let equation = String(object_2.value);

    if (equation == "") object_4.value = "Brak danych";
    else if (equation == "+") object_4.value = addition(o1, o3);
    else if (equation == "-") object_4.value = subtraction(o1, o3);
    else if (equation == "*") object_4.value = multiplication(o1, o3);
    else if (equation == "/") object_4.value = division(o1, o3);
    else if (equation == "%") object_4.value = modulo(o1, o3);
}
