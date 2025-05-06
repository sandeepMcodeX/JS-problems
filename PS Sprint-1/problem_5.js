
function generateFibonacci(limit) {
  if (typeof limit !== 'number' || limit < 0 ) {
    return [];
  }

  const series = [];
  let first = 0,
    second = 1;

  while (first <= limit) {
    series.push(first);
    const next = first + second;
    first = second;
    second = next;
  }

  return series;
}
console.log(generateFibonacci(5));
console.log(generateFibonacci(10));