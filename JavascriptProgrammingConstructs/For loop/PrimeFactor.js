let number = 14
for (let i = 2; i <= number; i++) {
    let isPrime = 1;
    
    for (let j = 2; j < i; j++) {
      let remainder = i % j;
      if (remainder == 0) {
        isPrime--;
        break;
      }
    }
    if (isPrime) {
      while (number % i == 0) {
        console.log(i);
        number = number / i;
      }
    }
  }