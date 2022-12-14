function checkPalindrome(no1,no2) {
    let number = no1
    let reverse = 0
    while (number > 0) {
       let remainder =Math.round(number%10)
        reverse = (reverse*10) + remainder
        number = Math.round(number/10)
    }
    if (reverse == no2) {
        console.log("Number is palindrome");
    } else {
        console.log("Number is not palindrome");
    }
}

checkPalindrome(101,101)

