// 1
let num = Number(prompt("Enter any number"))
if (num % 2 == 0) {
    alert("the number is even")
} else {
    alert("the number is odd")
}

// // 2 basic arithmatic
let num1 = Number(prompt("Enter any number"));
let operator = prompt("enter an arithmatic operator");
let num2 = Number(prompt("Enter any number"));

if (operator == "+") {
  let result = num1 + num2;
  alert(`${num1} + ${num2} = ${result}`);
} else if (operator == "-") {
  let result = num1 - num2;
  alert(`${num1} - ${num2} = ${result}`);
} else if (operator == "*") {
  let result = num1 * num2;
  alert(`${num1} * ${num2} = ${result}`);
} else if (operator == "/") {
  let result = num1 / num2;
  alert(`${num1} / ${num2} = ${result}`);
} else {
    alert(`you have entered an invalid operator`);
}


// 3 votin eligiblity
let age = Number(prompt("What is your Age"));
if ( age >= 18) {
    alert(`you are ${age} and eligible to vote`)
} else {
    alert(`You are ${age} and not Eliible to vote yet`)
}


// 4 for loop

for (let i = 1; i < 11; i++){
    console.log(i)
}

//5 multiplication table

const number = prompt("enter any number");
for (let i = 1; i < 13; i++){
    console.log(`${number} * ${i} = `, number * i)
}

// 6 grade checker

let score = Number(prompt(`enter your test score`));
if (score >= 70 && score == 100) {
    alert(`Excellent`);
} else if (score >= 50 && score == 69) {
    alert("Good");
} else if (score < 50 && score == 0) {
    alert(`Needs Improvement`);
} else {
    alert(`Invalid score as score can not be greater than 100 or less than 0`)
}

// 7 random let min = 20;
// Generate a random number between 1 and 5
const randomNum = Math.floor(Math.random() * 5) + 1;

// Ask the user to guess
const GuessNum = prompt("Guess a number between 1 and 5");

// Check if the guess is correct and alert the result
if (parseInt(GuessNum) === randomNum) {
  alert("You guessed right!");
} else {
  alert(`Wrong guess. The number was ${randomNum}.`);
}


// 8 fizzbuzz algorithm
for (let i = 1; i < 16; i++){
  if (i % 15 == 0) {
    console.log(`fizzbuzz`);
  } else if (i % 3 == 0) {
    console.log("fizz");
  } else if (i % 5 == 0) {
    console.log(`buzz`);
  } else {
    console.log(i);
  }
}