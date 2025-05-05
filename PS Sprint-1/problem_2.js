function isPrime(num) {
  if (typeof num !== 'number' || !Number.isInteger(num)) {
    return 'Please enter a valid integer.';
  }

  if (num <= 1) return 'Not a prime number';
  if (num === 2) return 'Prime number'; 
  if (num % 2 === 0) return 'Not a prime number';

  const sqrt = Math.sqrt(num);
  for (let i = 3; i <= sqrt; i += 2) {
    if (num % i === 0) return 'Not a prime number';
  }

  return 'Prime number';
}
console.log(isPrime(7)); 
console.log(isPrime(25)); 
