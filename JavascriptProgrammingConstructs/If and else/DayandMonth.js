function dateCheck(date){
    if (date>=new Date("March 20") && date<=new Date("June 20")){
        console.log("True");
    }else{
        console.log("False");
    }
}
dateCheck(new Date("October 11"));
dateCheck(new Date("May 5"));