function getTemp(input,temp){
    let convertedTemp=0;
    switch(input){
        case 'a':{
            console.log("Converting to Fahrenheit");
            convertedTemp=(temp*(9/5)) +32;
            console.log(temp+" deg C = "+convertedTemp+" deg F");
            break;
        }
        case 'b':{
            console.log("Converting to Celcius");
            convertedTemp=((temp-32)*(5/9));
            console.log(temp+" deg F = "+convertedTemp+" deg C");
            break;
        }
    }
}
getTemp('a',Math.floor(Math.random()*100));
getTemp('b',Math.floor((Math.random()*181)+32));