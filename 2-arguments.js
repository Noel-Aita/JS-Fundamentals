
// Get the command-line arguments passed to the script, starting from index 2
// (The first two items are the path to Node.js and the script file itself)
const args = process.argv.slice(2);

// to see if there are no arguments
if (args.length === 0) {
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
