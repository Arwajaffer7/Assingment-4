


  // User se color ka input lena
  var color = prompt("Enter the color of traffic signal (Red, Yellow, Green):");

  
  color = color.toLowerCase();

  // Conditions ke zariye message show karna..
  if (color === "red") {
    alert("Must Stop");
  } else if (color === "yellow") {
    alert("Ready to move");
  } else if (color === "green") {
    alert("Move now");
  } else {
    
  }

  // User se fuel ka input lena
  var fuel = prompt("Enter remaining fuel in your car (in liters):");

  // String input ko number mein convert karna
  fuel = parseFloat(fuel);

  // Fuel check karna
  if (fuel < 0.25) {
    alert("Please refill the fuel in your car");
  } else {
    alert("You have enough fuel");
  }
  var a = 4;
if (++a === 5) {
  alert("given condition for variable a is true");
}


  // 1. Marks input lena
  var subject1 = +prompt("Enter marks for Subject 1:");
  var subject2 = +prompt("Enter marks for Subject 2:");
  var subject3 = +prompt("Enter marks for Subject 3:");

  // 2. Total marks input lena
  var totalMarks = +prompt("Enter total marks:");

  // 3. Total obtained marks
  var obtainedMarks = subject1 + subject2 + subject3;

  // 4. Percentage calculate karna
  var percentage = (obtainedMarks / totalMarks) * 100;

  // 5. Grade find karna
  var grade;
  if (percentage >= 80) {
    grade = "A-one";
  } else if (percentage >= 70) {
    grade = "A";
  } else if (percentage >= 60) {
    grade = "B";
  } else {
    grade = "Fail";
  }


  document.write("<h2>Marksheet Result</h2>");
  document.write("Total Marks: " + totalMarks + "<br>");
  document.write("Marks Obtained: " + obtainedMarks + "<br>");
  document.write("Percentage: " + percentage.toFixed(2) + "%<br>");
  document.write("Grade: " + grade + "<br>");

// secrate number guess hoga 1 to 10
var secretNumber = 7;

// Asking user to guess the number
var userGuess = +prompt("Guess the secret number (from 1 to 10):");

// Checking the user's guess
if (userGuess === secretNumber) {
  alert("Bingo! Correct answer.");
} else if (userGuess === secretNumber + 1 || userGuess === secretNumber - 1) {
  alert("Close enough to the correct answer.");
} else {
  alert("Try again!");
}
// Asking user to enter a number
var number = +prompt("Enter a number to check if it's divisible by 3:");

// Checking divisibility by 3
if (number % 3 === 0) {
  alert("Yes! The number is divisible by 3.");
} else {
  alert("No, the number is not divisible by 3.");
}

// even OR odd num...

var number = +prompt("Enter a number to check if it is even or odd:");

// Checking if the number is even or odd
if (number % 2 === 0) {
  alert("The number is even.");
} else {
  alert("The number is odd.");
}

// Taking temperature as input from user
var temperature = +prompt("Enter the temperature in °C:");

// Checking temperature .
if (temperature > 40) {
  alert("It is too hot outside.");
} else if (temperature > 30) {
  alert("The weather today is normal.");
} else if (temperature > 20) {
  alert("Today’s weather is cool.");
} else {
  alert("OMG! Today’s weather is so cool.");
}

// Taking first number from user
var num1 = +prompt("Enter the first number:");

// Taking second number from user
var num2 = +prompt("Enter the second number:");

// Taking the operation (+, -, *, /, %) from user
var operation = prompt("Enter the operation (+, -, *, /, %):");

// Calculating result using if statements
if (operation === "+") {
  alert("Result: " + (num1 + num2));
} else if (operation === "-") {
  alert("Result: " + (num1 - num2));
} else if (operation === "*") {
  alert("Result: " + (num1 * num2));
} else if (operation === "/") {
  // Extra check for division by 0
  if (num2 !== 0) {
    alert("Result: " + (num1 / num2));
  } else {
    alert("Cannot divide by zero!");
  }
} else if (operation === "%") {
  alert("Result: " + (num1 % num2));
} else {
  alert("Invalid operation entered.");
}








