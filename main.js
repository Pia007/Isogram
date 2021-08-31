document.addEventListener("DOMContentLoaded", () => {
    
    const form = document.getElementById("form");
    // const eval = document.getElementById("evaluation");
    const button = document.getElementById("check-input");
    const str = document.getElementById("isogramText").value;

    //Responses
    const isAll= document.getElementById("evalOne");
    const isSingleSpec = document.getElementById("evalTwo");
    const isSingleNum = document.getElementById("evalThree");
    const isNumSpec= document.getElementById("evalFour");
    const isNotSingle = document.getElementById("evalFive");
    const isSpecial = document.getElementById("evalSix");
    const isNumbers = document.getElementById("evalSeven");
    const isFalse = document.getElementById("evalEight");
    const isTrue = document.getElementById("evalNine");
    
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
    
    button.addEventListener('click', function(e) {
        e.preventDefault();
        
    });
    button.addEventListener('click', evalString);
    
    
   
    
    function evalString(str) {
        
        str = document.getElementById("isogramText").value;
    
        // Use a For Loop to check the string for special char, spaces and numbers as well as evaluate the array for duplicate substrings
            // Starting at index 0, as long as the index is less than the length of the string minus 1, add 1 to the index and continue the loop
                // assign variables to regex expression for special characters and number
    
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
        function clearForm() {
            setTimeout(function() {
                form.reset();
                hideAll();
            }, 3000);

        };
        
         
        function isIsogram() {
            var str = document.getElementById("isogramText").value;

            // assign variable isogram to boolean true  -- funcion assumes isogram is true
            var isogram = true;

            // create empy arrays
            var newLetters = [];
            var letters = [];

            // assign count variable to the value of 0.
            var count = 0;
            
            // letters array is populated with substrings of the user's input
            letters = str.toLowerCase().split('');
        
            // For Loop
                //Check to see if the substrings in the array newLetters match any subtring in the array letters, index -1,
                    // if there is NOT a match, add the substring to the newLetters array
                        // the string IS an isogram
                    // else, isogram is false,  the match occurred more than once (index > -1) 
                        // the string is NOT an isogram
            for (let i = 0; i < letters.length - 1; i++){
                
                if(newLetters.indexOf(letters[i]) == -1) {
                    newLetters += letters[i];
                    hideAll();
                    isTrue.style.display = "block";
                    isTrue.style.color = "#00FF2A";
                }
                else {
                    isogram = false;
                    hideAll();
                    isFalse.style.display = "block";
                    isFalse.style.color = "#FF1919";
                }
                clearForm();
            };

        }
    }    
    
    

});

