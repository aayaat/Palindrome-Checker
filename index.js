function palindrome(str) {

    // allow only alphabets and numbers
    const regex = /[^a-zA-Z0-9]/gi
    
    str = str.toLowerCase();

    // replace all non-alphanumeric characters with an empty string 
    str = str.replace(regex, "");

    // turn the string into an array
    const strArray = Array.from(str);
    
    let reverseStr = "";
    for (let index = strArray.length - 1; index >= 0; index-=1) {
        reverseStr += strArray[index];
    }
    
    if (str === reverseStr) {
        return true
    } else {
        return false;
    }
}
  
  
console.log(palindrome("racecar")); 
console.log(palindrome("RaceCar")); 
console.log(palindrome("2A3*3a2")); 
console.log(palindrome("2A3 3a2")); 
console.log(palindrome("2_A3*3#A2")); 
console.log(palindrome("Abu Turaab")); 