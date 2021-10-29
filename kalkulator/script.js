const number = document.querySelectorAll(".number");

number.forEach ((number) => {
    number.addEventListener("click", (event) => {
        inputNumber(event.target.value);
        updateScreen(currentNumber);
    });
});

const calculatorScreen = document.querySelector(".calculator-screen")

const updateScreen = (number) => {
    calculatorScreen.value = number;
};

let prevNumber = "";
let calculator = "";
let currentNumber = "0";

const inputNumber = (number) => {
    if (currentNumber === "0") {
        currentNumber = number;
    } else {
        currentNumber += number;
    }
};