function isLeapYear(year){
    if(year % 4 == 0){
        if(year % 100 == 0){
            if(year % 400 == 0){
                return true; 
            }
            return false;
        }
        return true;
    }
    return false;
}
console.log("2008: "+isLeapYear(2008));
console.log("2100: "+isLeapYear(2100));
console.log("2000: "+isLeapYear(2000));
console.log("2005: "+isLeapYear(2005));