let numArray = new Array()
for(let count = 0 ; count <10 ; count++)
{
    let randomNumber =(Math.floor(Math.random() * 100) % 900) + 100
    numArray.push(randomNumber)
}
console.log("The Generated numbers are "+numArray);
numArray.sort()
console.log(`The 2nd largest value is ${numArray[8]}`);
console.log(`The 2nd smallest value is ${numArray[1]}`);