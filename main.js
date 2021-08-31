
    
const form = document.getElementById("form");
const button = document.getElementById("check-input");

//RESPONSES: using the id to assign constants to criteria responses in index.html
const isAll = document.getElementById("evalOne");
const isSingleSpec = document.getElementById("evalTwo");
const isSingleNum = document.getElementById("evalThree");
const isNumSpec= document.getElementById("evalFour");
const isNotSingle = document.getElementById("evalFive");
const isSpecial = document.getElementById("evalSix");
const isNumbers = document.getElementById("evalSeven");
const isFalse = document.getElementById("evalEight");
const isTrue = document.getElementById("evalNine");

// HIDES ALL RESPONSES
hideAll();
function hideAll() {
    isAll.style.display = "none";
    isSingleSpec.style.display = "none";
    isSingleNum.style.display = "none";
    isNumSpec.style.display = "none";
    isNotSingle.style.display = "none";
    isSpecial.style.display = "none";
    isNumbers.style.display = "none";
    isFalse.style.display = "none";
    isTrue.style.display = "none";
};

// CLEARS the form 2.5sec after submission
function clearForm() {
    setTimeout(function() {
        form.reset();
        hideAll();
    }, 2500);
};

// PREVENT THE DEFAULT BEHAVIOR OF THE BUTTON AND CALL CRITERIA EVALUATION FUNCTION
button.addEventListener('click', function(e) {
    e.preventDefault();
    
});
button.addEventListener('click', evalString);



// EVALUATE THE STRING AGAINST CRITERIA
function evalString(str) {
    
    str = document.getElementById("isogramText").value;

    // Use a For Loop to check the string for special char, spaces and numbers prior to evaluating the string using isIsogram()
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
                // If any condition is met, the users gets an alert and the form resets after 3sec
                // Otherwise, the users input meets the requirement and isIsogram() is called.

    for (let i = 0; i < str.length - 1; i++){
        let specialChar = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/
        let numbers = /\d/
        
        if(specialChar.test(str) && numbers.test(str) && str.indexOf(' ') >= 1 ){
            hideAll();
            isAll.style.display = "block";
        
        }else if(str.indexOf(' ') >= 1 && specialChar.test(str)){
            hideAll();
            isSingleSpec.style.display = "block";
            
            
        }else if(str.indexOf(' ') >= 1 && numbers.test(str)){
            hideAll();
            isSingleNum.style.display = "block";
            
            
        }else if(specialChar.test(str) && numbers.test(str)){
            hideAll();
            isNumSpec.style.display = "block";
            
            
        }else if(str.indexOf(' ') >= 0){
            hideAll();
            isNotSingle.style.display = "block";
            
            
        }else if(specialChar.test(str)) {
            hideAll();
            isSpecial.style.display = "block";
            
            
        }else if(numbers.test(str)) {
            hideAll();
            isNumbers.style.display = "block";

        }
        else {
            isIsogram();
        }     
        clearForm();
    };
    
};    

// DETERMINING IF THE STRING IS AN ISOGRAM
function isIsogram(str) {
    var str = document.getElementById("isogramText").value;

    // create an empty array for comparison to letters array
    var newLetters = [];
    var letters = str.toLowerCase().split('');

    // Use ForEach() to iterate over each substring in the letters array and compare it to the newLetters array.
        // if the substring does not exist(indexOf -1) in the newLetters array, then add it.
    letters.forEach(function(item, i, arr){
        if (newLetters.indexOf(item) === -1) {
            newLetters.push(item);
        }
    });

    // Compare the length the arrays
        // If they are strictly equal, then the word IS an isogram
        // Else, the length is not strictly equal, then the word is NOT an isogram
            //WHY? Substrings that repeat, will not have an index of -1 and not be added to newLetters array, 
                // resulting in newLetters.length < letter.length
    if(newLetters.length === letters.length) {
        // return true;
        hideAll();
        isTrue.style.display = "block";
        isTrue.style.color = "#00FF2A";  
    }else {
        // return false;
        hideAll();
        isFalse.style.display = "block";
        isFalse.style.color = "#FF1919";
    }
    clearForm();
    
};


    




