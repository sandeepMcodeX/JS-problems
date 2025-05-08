


function palindromesCheck(value) {
  if ('number' === typeof value) {
    value = value.toString();
  }
  let reversedString = value.toLowerCase().split('').reverse().join('');
  if (reversedString === value) {
    return ' it is a palindrome';
  } else {
    return ' it is not a palindrome';
  }
}
let result = palindromesCheck('12321');
console.log(result);
