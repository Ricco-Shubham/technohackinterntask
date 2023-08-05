// Get the display screen element
const display = document.getElementById("display");

// Get all the button elements
const buttons = document.querySelectorAll(".button");

let expression = "";

buttons.forEach(button => {
    button.addEventListener("click", () => {
        let value = button.textContent;

        if (value === "C") {
            display.textContent = "";
            expression = "";
        }

        else if (value === "←") {
            expression = expression.slice(0,-1);
            display.textContent = expression;
        }

        else if (value === "=") {
            try {
                let result = eval(expression);
                display.textContent = result;
                expression = result;
            } catch (error) {
                display.textContent = "Error";
            }
        }

        else {
            expression += value;
            display.textContent = expression;
        }
    });
});
