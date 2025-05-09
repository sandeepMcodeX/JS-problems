function summingDigits(num) {
    if (typeof num === 'number') {
      let sumOfDigits = 0;
      let lastDigit
    while (num != 0) {
       lastDigit = num % 10;
      sumOfDigits += lastDigit;
      num = Math.floor(num/10) ;
    }
    return sumOfDigits;
}
}
console.log(summingDigits(123));
