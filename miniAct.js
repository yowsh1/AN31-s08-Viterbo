/*Mini-Activity: Create a calculator that simulate the +, -, *, /. 

For example: 100 + 25 = 125

Use html and CSS to design or create your calculator

Based on the user input, the calculator should perform the corresponding operation and display the result.

If the user tries to divide by zero, display a special error message: "Error: Division by zero is not allowed."

If the user enters an invalid operation, display an error message: "Invalid operation. Please use +, -, *, or /."

Validate that the user inputs numbers. If not, display an error message: "Invalid input. Please enter valid numbers.*/

function calculate() {
    let number1 = Number(document.getElementById('number1').value);
    let operator = document.getElementById('operator').value.trim(); 
    let number2 = Number(document.getElementById('number2').value);
    let result;


    if (isNaN(number1) || isNaN(number2)) {
        document.getElementById('result').innerText = "Invalid input. Please enter valid numbers.";
        return;
    }


    if (operator === "+" || operator === "-" || operator === "*" || operator === "/") {
        // Perform calculation based on the valid operator
        if (operator === "+") {
            result = number1 + number2;
        } else if (operator === "-") {
            result = number1 - number2;
        } else if (operator === "*") {
            result = number1 * number2;
        } else if (operator === "/") {
            if (number2 === 0) {
                result = "Error: Division by zero.";
            } else {
                result = number1 / number2;
            }
        }
        document.getElementById('result').innerText = "Result: " + result;
    } else {
        document.getElementById('result').innerText = "Invalid operator. Please enter +, -, *, or /.";
    }
}




		

