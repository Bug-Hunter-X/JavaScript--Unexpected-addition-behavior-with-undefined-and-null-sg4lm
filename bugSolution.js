function foo(a, b) {
  // Handle undefined and null values explicitly
  const numA = typeof a === 'undefined' ? 0 : a;
  const numB = typeof b === 'undefined' ? 0 : b;
  //Using the Nullish Coalescing Operator
  const numC = a ?? 0;
  const numD = b ?? 0;

  return numA + numB; //or numC + numD
}

console.log(foo(undefined, 1)); // 1
console.log(foo(null, 1)); // 1
console.log(foo(undefined, undefined)); //0
console.log(foo(null, null)); //0