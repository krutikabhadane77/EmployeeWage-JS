let sum=0
for(a=1;a<=5;a++){
    let x=Math.floor(Math.random() * 100);
    sum=sum+x;
}
console.log("Sum: "+sum);
console.log("Avg: "+(sum/5));