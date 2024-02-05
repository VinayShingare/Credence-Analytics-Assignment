//Assignment First

function Assignment1() {
    let assignment1 = document.querySelector(".box1");

   assignment1.addEventListener("click", function(){

        let day = prompt("Enter a day of the week:");
    
        day = day.toLowerCase();
    
        if (day === "monday" || day === "tuesday" || day === "wednesday" || day === "thursday" || day === "friday") {
            alert(day + " is a weekday.");
        } else if (day === "saturday" || day === "sunday") {
            alert(day + " is a weekend day.");
        } else {
            alert("Invalid input. Please enter a valid day of the week.");
        }
    
})
}
Assignment1()

//Assignment Second

function Assignment2() {
   let assignment2 = document.querySelector(".box2") ;

   assignment2.addEventListener("click", function(){

   let num1 = prompt("Enter first number");
   let num2 = prompt("Enter second number");
   let num3 = prompt("Enter third number");

   if (num1 > num2 && num1 > num3) {
      alert("Number first is greatest : " + num1);
   } 
   else if(num2 > num1 && num2 > num3){
      alert("Number second is greatest : "+ num2);
   }
   else {
      alert("Number third is greatest : "+ num3);
   }
   })
}
Assignment2()

//Assignment Third

function Assignment3() {
    let assignment3 = document.querySelector(".box3");

    assignment3.addEventListener("click", function(){

        let number1 = parseFloat(prompt("Enter first number"));
        let number2 = parseFloat(prompt("Enter Second number"));
        let Operators = prompt("Enter operator(either +, -, / or *)");

        let result;
        
        if (Operators == "+") {
          alert(result = number1 + number2);  
        }
        else if (Operators == "-") {
            alert(result = number1 - number2);  
          }
        else if (Operators == "/") {
            alert(result = number1 / number2);
          }
        else if (Operators == "*") {
            alert(result = number1 * number2); 
          }
        else {
           alert("Input Valid Operators");
        }
    })
}
Assignment3()

//Assignment Fourth

function Assignment4() {
    let assignment4 = document.querySelector(".box4");

    assignment4.addEventListener("click", function convertTemperature() {
        const temp = parseFloat(prompt("Enter tempreture"));
        const unit = prompt("Enter tempreture unit(either Celcius or Fehrenhiet")
    
        if (unit == "C" ,"c", "celcius") {
            convertedTemp = (temp * 9/5) + 32;
            alert(convertedTemp + " Fehrneheit");
        }
         else if(unit == "F", "f", "fehrnehiet") {
            convertedTemp = (temp - 32) * 5/9;
            alert(convertedTemp + " Celcius");
        }
        else{
           alert("Enter correct Tempreture")  
        }   
    }
    
 ) 
}
Assignment4()

//Assignment Fifth

function Assignment5() {
    
    let assignment5 = document.querySelector(".box5");

    assignment5.addEventListener("click", function(){


       let number1 = parseInt(prompt("Enter a number first: "));
       let number2 = parseInt(prompt("Enter a number second: "))

       if (number1 > 0) {
           alert("The first number is positive");
       }
       else if(number2 > 0){
           alert("The second number is positive");
       }
       else if (number1 == 0 && number2 == 0) {
         alert("The first and second number is zero");
       }
       else {
           alert("The both number are same");
       }
    })
}
Assignment5()

//Assignment Sixth

function Assignment6() {
    let assignment6 = document.querySelector(".box6");

    assignment6.addEventListener("click", function () {

            let input = prompt("Enter a string:");
        
            input = input.toLowerCase();
        
            const vowelsRegex = /[aeiou]/g;
        
            const vowelsArray = input.match(vowelsRegex);
        
            if (vowelsArray) {
                const numberOfVowels = vowelsArray.length;
                alert("The number of vowels in the string is: " + numberOfVowels);
            } 
            else {
                alert("No vowels found in the string.");
            }
        
    })
}
Assignment6()

//Assignment Seventh

function Assignment7() {
   let assignment7 = document.querySelector(".box7");

   assignment7.addEventListener("click", function () {
     
    let input = prompt("Enter a string:");

    input = input.toLowerCase();

    let letterCount = {};

    for (let i = 0; i < input.length; i++) {
        let char = input[i];

        if (/[a-z]/.test(char)) {
           
            letterCount[char] = (letterCount[char] || 0) + 1;
        }
    }

    let result = "Occurrences of each letter:\n";
    for (let letter in letterCount) {
        result += letter + ": " + letterCount[letter] + " , ";
    }
    alert(result);
   })
}
Assignment7()

//Assignment Eighth

function Assignment8() {
    let assignment8 = document.querySelector(".box8");

    assignment8.addEventListener("click", function(){

    const number = prompt("Enter a number: ");

     if(number % 2 == 0) {
        alert("The number is even.");
     }
     else {
        alert("The number is odd.");
     }
    })
}
Assignment8()

//Assignment Ninth

function Assignment9() {
    let assignment9 = document.querySelector(".box9");

    assignment9.addEventListener("click", function(){
        
            let input = prompt("Enter elements for the array (separated by commas):");
        
            let elements = input.split(",");
        
            let firstElement = elements[0];
            let lastElement = elements[elements.length - 1];
        
            alert("First element: " + firstElement + "\nLast element: " + lastElement);

        
    })
}
Assignment9()

//Assignment Tenth

function Assignment10() {
    let assignment10 = document.querySelector(".box10");

    assignment10.addEventListener("click", function(){

        function sortArray() {

            let input = prompt("Enter elements for the array (separated by commas):");
        
            let elements = input.split(",");
        
            elements.sort();
        
            alert("Sorted array: " + elements.join(", "));
        }
        sortArray();   
        
    })
}
Assignment10()

//Assignment eleventh

function Assignment11() {
    let assignment11 = document.querySelector(".box11");

    assignment11.addEventListener("click", function(){

            let input = prompt("Enter a positive integer:");
            let number = parseInt(input);
        
            if (isNaN(number) || number <= 0) {
                alert("Invalid input. Please enter a positive integer.");
                return;
            }
            let sum = 0;
            for (let i = 1; i <= number; i++) {
                sum += i;
            }
            alert("The sum of natural numbers up to " + number + " is: " + sum);
        
    })
}
Assignment11()

//Assignment twelfth

function Assignment12() {
    let assignment12 = document.querySelector(".box12");

    assignment12.addEventListener("click", function(){

            let inputString = prompt("Enter a string:");
        
            let startIndexInput = prompt("Enter the starting index (0-based):");
            let startIndex = parseInt(startIndexInput);
        
            let lengthInput = prompt("Enter the length of the subset:");
            let length = parseInt(lengthInput);
        
            if (isNaN(startIndex) || isNaN(length) || startIndex < 0 || length < 0 || startIndex >= inputString.length) {
                alert("Invalid input. Please enter valid starting index and length.");
                return;
            }
        
            let subset = inputString.substr(startIndex, length);
        
            alert("Subset of the string: " + subset);
          
    })
}
Assignment12()

//Assignment Thirteenth

function Assignment13() {
    let assignment13 = document.querySelector(".box13");

    assignment13.addEventListener("click", function(){

            let inputString = prompt("Enter a string:");
        
            let conversionType = prompt("Choose conversion type:\n1. Uppercase\n2. Lowercase");
        
            let resultString;
            if (conversionType === "1") {
                resultString = inputString.toUpperCase();
            } else if (conversionType === "2") {
                resultString = inputString.toLowerCase();
            } else {
                alert("Invalid choice. Please enter either '1' for uppercase or '2' for lowercase.");
                return;
            }
        
            alert("Converted string: " + resultString);
        
    })
}
Assignment13()

//Assignment Fourteenth

function Assignment14() {
    let assignment14 = document.querySelector(".box14");

    assignment14.addEventListener("click", function(){

            let inputYear = prompt("Enter a year:");
        
            let year = parseInt(inputYear);
        
            if (isNaN(year)) {
                alert("Invalid input. Please enter a valid year.");
                return;
            }
        
            if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
                alert(year + " is a leap year.");
            } else {
                alert(year + " is not a leap year.");
            }
         
    })
}
Assignment14()

//Assignment Fifteenth

function Assignment15() {
    let assignment15 = document.querySelector(".box15");

    assignment15.addEventListener("click", function(){

            let inputString = prompt("Enter a string:");
        
            alert("String Length: " + inputString.length);
        
            let startIndexSlice = prompt("Enter the starting index for slice:");
            let endIndexSlice = prompt("Enter the ending index for slice:");
            alert("String Slice: " + inputString.slice(startIndexSlice, endIndexSlice));
        
            let startIndexSubstring = prompt("Enter the starting index for substring:");
            let endIndexSubstring = prompt("Enter the ending index for substring:");
            alert("String Substring: " + inputString.substring(startIndexSubstring, endIndexSubstring));
        
            let startIndexSubstr = prompt("Enter the starting index for substr:");
            let lengthSubstr = prompt("Enter the length for substr:");
            alert("String Substr: " + inputString.substr(startIndexSubstr, lengthSubstr));
        
            let oldSubstring = prompt("Enter the substring to replace:");
            let newSubstring = prompt("Enter the new substring:");
            alert("String Replace: " + inputString.replace(oldSubstring, newSubstring));
        
            alert("String Trim: " + inputString.trim());
        
            alert("String TrimStart: " + inputString.trimStart());
        
            alert("String TrimEnd: " + inputString.trimEnd());
        
            let padLengthStart = prompt("Enter the desired length for padStart:");
            let padCharacterStart = prompt("Enter the character for padStart:");
            alert("String PadStart: " + inputString.padStart(padLengthStart, padCharacterStart));
        
            let padLengthEnd = prompt("Enter the desired length for padEnd:");
            let padCharacterEnd = prompt("Enter the character for padEnd:");
            alert("String PadEnd: " + inputString.padEnd(padLengthEnd, padCharacterEnd));
        
            let charIndex = prompt("Enter the index to get character:");
            alert("String CharAt: " + inputString.charAt(charIndex));
        
            let charCodeIndex = prompt("Enter the index to get character code:");
            alert("String CharCodeAt: " + inputString.charCodeAt(charCodeIndex));
        
            let splitDelimiter = prompt("Enter the delimiter for split:");
            alert("String Split: " + inputString.split(splitDelimiter));

    })
}
Assignment15()