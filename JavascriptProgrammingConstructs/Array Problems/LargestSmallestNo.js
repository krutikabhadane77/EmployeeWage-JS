let numArray = new Array()
for(let count = 0 ; count <10 ; count++)
{
    let randomNumber =(Math.floor(Math.random() * 100) % 900) + 100
    numArray.push(randomNumber)
}
console.log("The Generated numbers are "+numArray);
let firstLargest=numArray[0];
let secondLargest=numArray[0];
let firstSmallest=numArray[0];
let secondSmallest=numArray[0];
for (var i = 0; i < numArray.length; i++) {
    if (numArray[i] > firstLargest) {
        secondLargest = firstLargest;
        firstLargest = numArray[i];
    }else if (numArray[i] > firstLargest && numArray[i] != firstLargest) {
        secondLargest = numArray[i];
    }
    if (numArray[i] < firstSmallest) {
        secondSmallest = firstSmallest;
        firstSmallest = numArray[i];
    } else if (numArray[i] < secondSmallest && numArray[i] != firstSmallest) {
        secondSmallest = numArray[i];
    }
}
console.log("Second Largest Element: "+secondLargest);
console.log("Second Smallest Element: "+secondSmallest);