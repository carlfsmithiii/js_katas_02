/* NOTE: part of this assignment is to avoid arithmetic operations 
 * after defining "add".  I have attempted to stay as close to the assignment as 
 * possible while accounting for negative numbers
 */


const add = function (a, b) {
    return a + b;
}

/*
 * The instructions are to avoid built-in arithmetic operators or functions
 * and instead use the 'add' function defined above.
 */
function multiply(a, b) {
    let product = 0;
    let b_is_negative = false;
    let iterationTarget = b;
    if (b < 0) {
        b_is_negative = true;
        iterationTarget = -b;
    }
    for (let i = 0; i < iterationTarget; i++) {
        product = add(product, a);
    }
    // If b is negative, then the product must be replaced with its additive inverse.
    if (b_is_negative) {
        product = -product;
    }
    return product;
}

/*
 * power(a, b) => return a^b
 * I used division to account for the possibility of a negative b
 */
const power = (a, b) => {
    let result_of_power = 1;
    let iterationTarget;
    let b_is_negative;
    if (b > 0) {
        iterationTarget = b;
        b_is_negative = false;
    } else {
        iterationTarget = multiply(b, -1);
        b_is_negative = true;
    }
    for (let i = 0; i < iterationTarget; i++) {
        result_of_power = multiply(result_of_power, a);
    }
    if (b_is_negative) {
        return 1 / result_of_power; // I was not able to avoid using division
    }
    return result_of_power;
}

function factorial(n) {
    if (n < 0) {
        return "Error: factorial is only defined for nonnegative numbers.";
    } else if (n === 0) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}

const fibonacci = function (num) {
    if (num < 0) {
        return "Error: fibonacci can only be performed on nonnegative numbers.";
    }
    if (num === 0) {
        return 0;
    } else if (num === 1) {
        return 1;
    } else {
        return add(fibonacci(add(num, -1)), fibonacci(add(num, -2)));
    }
}




/* Tests */
// Tests for add()
console.log("2 + 5 = " + add(2, 5));
console.log("2 + -5 = " + add(2, -5));
console.log("-2 + 5 = " + add(-2, 5));
console.log("-2 + -5 = " + add(-2, -5));
console.log("\n");

// Tests for multiply()
console.log("2 * 5 = " + multiply(2, 5));
console.log("2 * -5 = " + multiply(2, -5));
console.log("-2 * 5 = " + multiply(-2, 5));
console.log("-2 * -5 = " + multiply(-2, -5));
console.log("\n");

// Tests for power()
console.log("2 ** 3 = " + power(2, 3));
console.log("-2 ** 3 = " + power(-2, 3));
console.log("2 ** -3 = " + power(2, -3));
console.log("-2 ** -3 = " + power(-2, -3));
console.log("-3 ** -2 = " + power(-3, -2));
console.log("\n");

// Tests for factorial()
console.log("factorial of 5 = " + factorial(5));
console.log("\n");

// Tests for fibonacci()
console.log("fibonacci(7) = " + fibonacci(7));



// Code for GUI interface

document.querySelectorAll("input").forEach(function (a) {
    a.addEventListener("change", function () {
        let secondNumberInput = document.getElementById("second_number");
        if (this.value == "factorial" || this.value == "fibonacci") {
            secondNumberInput.disabled = true;
        } else {
            secondNumberInput.disabled = false;
        }
    })
});

let submitButton = document.querySelector("button");
submitButton.onclick = function () {
    let radio_value = document.querySelector('input[name="function_selector"]:checked').value;
    console.log(radio_value);
    let a = Number(document.getElementById("first_number").value);
    let b = Number(document.getElementById("second_number").value);
    let p = document.getElementById("solution");

    if (radio_value === "add") {
        p.textContent = add(a, b);
    } else if (radio_value === "multiply") {
        p.textContent = multiply(a, b);
    } else if (radio_value === "power") {
        p.textContent = power(a, b);
    } else if (radio_value === "factorial") {
        p.textContent = factorial(a);
    } else if (radio_value === "fibonacci") {
        p.textContent = fibonacci(a);
    }
}
