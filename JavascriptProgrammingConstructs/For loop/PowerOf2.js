function powerOf2(n){
    let value=1;
    for (var i = 0; i <= n; i++) {
        console.log("2^" + i + " = " + value);
        value = value*2;
    }    
}
powerOf2(4);