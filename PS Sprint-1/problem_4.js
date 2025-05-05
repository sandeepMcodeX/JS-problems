function isArmstrong(number) {
  const digits = number.toString().split('');
  const numDigits = digits.length;

  const sumOfPowers = digits.reduce((sum, digit) => {
    return sum + Math.pow(parseInt(digit), numDigits);
  }, 0);

  return sumOfPowers === number;
}

const number = parseInt(prompt('Enter a number: '), 10);
if (isArmstrong(number)) {
  console.log('Armstrong Number');
} else {
  console.log('Not an Armstrong Number');
}
