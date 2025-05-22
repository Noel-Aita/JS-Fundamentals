const args = process.argv.slice(2);     // Get command-line arguments
const size = Number(args[0]);           // Convert first argument to a number

if (args[0] === undefined || isNaN(size)) {
  console.log("Missing size");          // Handle missing or invalid input
} else {
  for (let i = 0; i < size; i++) {      // Outer loop controls the number of rows
    let row = "";                       // Start with an empty row for each line
    for (let j = 0; j < size; j++) {    // Inner loop controls the number of columns
      row += "X";               // Add "C is fun" with a space
    }
    console.log(row);            // Print the row, removing the trailing space
  }
}
