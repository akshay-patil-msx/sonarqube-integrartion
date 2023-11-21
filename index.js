// Sample JavaScript Code

// Function to calculate the square of a number
function calculateSquare(num) {
  return num * num;
}

// Function to display a message in the console
function showMessage(message) {
  console.log(message);
}

// Main program
let number = 5;
let squaredNumber = calculateSquare(number);
showMessage(`The square of ${number} is: ${squaredNumber}`);

// Loop to print numbers from 1 to 10
for (let i = 1; i <= 10; i++) {
  console.log(i);
}

// An object representing a person
let person = {
  firstName: 'John',
  lastName: 'Doe',
  age: 25,
  isStudent: false,
};

// Display person information
showMessage(`Person: ${person.firstName} ${person.lastName}, Age: ${person.age}`);

// Array of fruits
let fruits = ['Apple', 'Banana', 'Orange', 'Grapes'];

// Display each fruit in the array
fruits.forEach(fruit => {
  console.log(fruit);
});

// Conditional statement
let temperature = 28;

if (temperature > 30) {
  showMessage('It\'s a hot day!');
} else if (temperature >= 20 && temperature <= 30) {
  showMessage('The weather is pleasant.');
} else {
  showMessage('It\'s a cold day.');
}
