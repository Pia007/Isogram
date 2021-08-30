document.addEventListener("DOMContentLoaded", () => {
    
    
    const eval = document.getElementById("evaluation");
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
    button.addEventListener('click', isIsogram);
    
   
    
    function isIsogram(str) {
        str = document.getElementById("isogramText").value;
       
        // Determine the length of the string and assigned to variable lengthOfString
        let lenthOfString = str.length;
    
        // Use split() method to split the string into an array of substrings and return a new array 
            // (without changing the orignal array) assigned to variable strArray
        var strArray = [];
        var strArray = str.split('');
    
        // Use sort() method to sort the split string in alphabetical and ascending order by default 
        // var strArray = strArray.sort();
        // strArray = strArray.sort();

       
    
        // Use a For Loop to check the string for special char, spaces and numbers as well as evaluate the array for duplicate substrings
            // Starting at index 0, as long as the index is less than the length of the string minus 1, add 1 to the index and continue the loop
                // assign variables to regex expression for special characters and numbers
                // assign letter variable to the lowercase substring at index i
                // assign count variable to the value of 0.
            // For Loop 
                // Starting at index 0, as long as the index is less than the length of the string minus 1, add 1 to the index and continue the loop
                // if letter is strictly equal to the lowrcase character at index n, increment the count by 1  
                // if the count is equals 2 or is greater than 2, then the string is NOT a isogram 
                    // Evaluation ends
            // IF any character in the string matches the regex pattern for special characters, numbers and has a space after the first character, the string will not be evaluated
                // ELSE IF CONDITONS:
                    // STRING WILL NOT BE EVALUATED IF:
                        //  string has a space after the 1st character and at least one special character.
                        //  string has a space after the 1st character and at least one number.
                        //  string has and at least one special character and at least one number.
                        //  string has a space after the 1st character.
                        //  string has at least one number.
                        //  string has at least one special character.
        // Otherwise, the string contains characters that do not repeat and IS an isogram.
    
    
        for (let i = 0; i < lenthOfString - 1; i++){
            let specialChar = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/
            let numbers = /\d/
            var count = 0;
            letter = strArray[i].toLowerCase();

            for(var n = 0; n <= lenthOfString - 1; n ++){
                if( letter === strArray[n].toLowerCase() ) {
                    count += 1;
                }
            }
            if(count == 2 || count > 2){
                hideAll();
                isFalse.style.display = "block";
                isFalse.style.color = "#FF1919";
                
            }

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
            
            }else {
                hideAll();
                isTrue.style.display = "block";
                isTrue.style.color = "#00FF2A";
            }
        };
    }
    

});

