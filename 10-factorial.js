const args = process.argv.slice(2);
const num1 = Number(args[0]) 

function factorial(n) {
  if (n === 0 || n === 1) {
    return 1; // 0! and 1! are both 1

  }

  return n * factorial(n - 1); // Recursive case
}

console.log(factorial(num1)); 
