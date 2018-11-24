/**
 * Given a array of numbers representing a credit card number calculates luhns sum
 * @param {Array<Number>} numbers - array of numbers representing a credit card number
 */
function luhnSum(numbers) {
  let sum = 0;
  let doubleNextDigit = false;

  for (let i = numbers.length - 1; i >= 0; i--) {
    let digit = numbers[i];

    if (doubleNextDigit) {
      digit *= 2;
    }

    sum += digit > 9 ? (digit % 10) + 1 : digit;

    doubleNextDigit = !doubleNextDigit;
  }

  return sum;
}

/**
 * Validates a credit card number using luhns algorithm
 * @param @param {Array<Number>} numbers - array of numbers representing a credit card number
 */
function validCreditCard(numbers) {
  return luhnSum(numbers) % 10 === 0;
}

// find missing number in credit card 4003 010X 8064 9623
for (let i = 0; i <= 9; i++) {
  const numbers = [4, 0, 0, 3, 0, 1, 0, i, 8, 0, 6, 4, 9, 6, 2, 3];
  if (validCreditCard(numbers) === true) {
    console.log(`Missing number is ${i}`);
    console.log(numbers.join(""));
  }
}
