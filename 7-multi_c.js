const args = process.argv.slice(2) // Gets command line arguments
const appearances = Number(args[0]) // Coverts the  first argument to a number
// to see if there are no arguments

//to cjeck is the argument is a valid number or not
if (isNaN(appearances)) {
     console.log("Missing number of occurrences"); // thten Print this if no arguments passed is not a number
}
else  // Check if it is a number
{
  //let text =  Number(args)
for (let i = 0; i < appearances; i++)
console.log("C is fun")
}
