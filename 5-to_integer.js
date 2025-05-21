/*
// Get the command-line arguments passed to the script, starting from index 2
// (The first two items are the path to Node.js and the script file itself)
const args = process.argv.slice(2);

// to see if there are no arguments
if (args === 0) {
  console.log("No argument"); // thten Print this if no arguments were passed
}
// Check if there is exactly one argument
else if (args.length === 1) {
  console.log("Argument found"); // then print this if one argument was passed
}
// Otherwise it means more than one argument was passed
else {
  console.log("Arguments found"); // so print this if two or more arguments were passed
}

*/

const args = process.argv.slice(2);

// to see if there are no arguments
if (args[0] === undefined){

}
//to cjeck is the argument is a valid number or not
else if (isNaN(Number(args[0]))) {
    
     console.log("Not a number"); // thten Print this if no arguments were passed
}
// Check if it is a number
else  
{
  console.log("My number: ",Number(args[0]))
}