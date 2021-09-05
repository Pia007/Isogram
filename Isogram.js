// File solely used to test function

// THE CHALLENGE
// An isogram is a word that has no repeating letters, consecutive or non-consecutive. 
// Implement a function called isIsogram that determines whether a string that contains only letters is an isogram (returns true or false). 
// Assume the empty string is an isogram. Ignore letter case. 
// EXAMPLES: 
    // isIsogram("Dermatoglyphics") returns true 
    // isIsogram("aba") returns false 
    // isIsogram("moOse") returns false // -- ignore letter case


function isIsogram(str) {

    // Determine the length of the string and assigned to variable lengthOfString
    let lenthOfString = str.length;

    // Use split() method to split the string into an array of substrings and return a new array 
        // (without changing the orignal array) assigned to variable strArray
    let strArray = str.split('');

    // Use sort() method to sort the split string in alphabetical and ascending order by default 
    strArray.sort();

    // Use a For Loop to check the string for special char, spaces and numbers as well as evaluate the array for duplicate substrings
        // Starting at index 0, as long as the index is less than the length of the string minus 1, add 1 to the index and continue the loop
            // assign variables to regex expression for special characters and numbers
        // IF any character in the string matches the regex pattern for special characters, numbers and has a space after the first character, the string will not be evaluated
            // ELSE IF CONDITONS:
                // STRING WILL NOT BE EVALUATED IF:
                    //  string has a space after the 1st character and at least one special character.
                    //  string has a space after the 1st character and at least one number.
                    //  string has and at least one special character and at least one number.
                    //  string has a space after the 1st character.
                    //  string has at least one number.
                    //  string has at least one special character.
                    //  array contains substrings that repeat; therefore; the string is NOT an isogram
    // Otherwise, the string contains characters that do not repeat and IS an isogram.


    for (let i = 0; i < lenthOfString - 1; i++){
        let specialChar = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/
        let numbers = /\d/
        if(specialChar.test(str) && numbers.test(str) && str.indexOf(' ') >= 1 ){
            return "Try Again - " + str + " is not a single word and has atleast one number and special character. "
        }else if(str.indexOf(' ') >= 1 && specialChar.test(str)){
            return "Try Again - " + str + " is not a single word and has atleast one special character."   
        }else if(str.indexOf(' ') >= 1 && numbers.test(str)){
            return "Try Again - " + str + " is not a single word and has atleast one number."        
        }else if(specialChar.test(str) && numbers.test(str)){
            return "Try Again - " + str + " has atleast one special character and number."    
        }else if(str.indexOf(' ') >= 0){
            return "Try Again - " + str + " is not a single word."
        }else if(specialChar.test(str)) {
            return "Try Again - " + str + " has atleast one special charcter."
        }else if(numbers.test(str)) {
            return "Try Again - " + str + " has atleast one numbers."
        }else if(strArray[i] == strArray[i + 1]) {
            return  "False - " + str + " is not an isogram.";
        }
    };
    return "True - " + str  + " is an isogram.";
}

// Testing the Function
console.log(isIsogram("Dermatoglyphics"));
console.log(isIsogram("aba"));
console.log(isIsogram("moOse"));
console.log(isIsogram(" "));
console.log(isIsogram("FUN% HOME"));
console.log(isIsogram("Reskill Americans"));
console.log(isIsogram("12@ LOP"));
console.log(isIsogram("JavaScript"));
console.log(isIsogram("Python"));
console.log(isIsogram("Pyt#hon"));
console.log(isIsogram("hap34"));
console.log(isIsogram("hap 34 &"));
console.log(isIsogram("ha306"));
console.log(isIsogram("realistic"));