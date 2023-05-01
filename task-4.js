const credits = 23580;
const pricePerDroid = 3000;
let message;
let totalPrice;

const userInput = prompt('Скільки дроїдів Ви хочете купити?');

if (userInput === null) {
message = 'Скасовано користувачем!';
} else {
const quantity = Number(userInput);
totalPrice = quantity * pricePerDroid;

if (totalPrice > credits) {
message = 'Недостатньо коштів на рахунку!';
} else {
const remainingCredits = credits - totalPrice;
message = Ви купили ${quantity} дроїдів, на рахунку залишилося ${remainingCredits} кредитів.;
}
}

console.log(message);