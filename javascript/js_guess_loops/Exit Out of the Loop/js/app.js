const main = document.querySelector('main');
const randomNumber = getRandomNumber(10);
let message;

function getRandomNumber(upper) {
  return Math.floor( Math.random() * upper ) + 1;
}

for ( let i = 1; i <= 10; i++ ) {
  let guess = prompt('I am thinking of a number between 1 and 10. What is it?');
  // Terminates loop if user guesses number 
  if ( parseInt(guess) === randomNumber ) {
    message = `It took you ${i} tries to guess the number ${randomNumber}!`;
    break;
  }
  message = `You did not guess the number. It was ${randomNumber}.`;
}

main.innerHTML = `<h1>${message}</h1>`;

// Conditional statement to give players hints about the number to guess

// const main = document.querySelector('main');
// const randomNumber = getRandomNumber(10);
// let message;
// let guess = prompt(`Guess a number between 1 and 10.`);

// function getRandomNumber(upper) {...}

// for ( let i = 9; i >= 1; i-- ) {
//   if ( +guess > randomNumber ) {
//     guess = prompt(`Guess a lower number. You have ${i} more tries.`);
//   } else if ( +guess < randomNumber) {
//     guess = prompt(`Guess a higher number. You have ${i} more tries.`);
//   } else if ( +guess === randomNumber ) {
//     message = `You guessed the number! It was ${randomNumber}.`;
//     break;
//   }
//   message = `You did not guess the number. It was ${randomNumber}.`;
// }

// main.innerHTML = `<h1>${message}</h1>`;