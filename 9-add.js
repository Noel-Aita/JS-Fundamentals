const args = process.argv.slice(2);
const num1 = Number(args[0]) 
const num2 = Number(args[1])

if (isNaN(num1) || isNaN(num2)){
    console.log("Nan")
}

else{
    const Add = num1 + num2

console.log(Add)

}