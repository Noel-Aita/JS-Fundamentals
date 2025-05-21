const args = process.argv.slice(2);

// to see if there are no arguments
if (args[0] === undefined) {
  console.log("No argument"); // thten Print this if no arguments were passed
}
// Check if there is exactly one argument
else {
  console.log(args[0]);
}