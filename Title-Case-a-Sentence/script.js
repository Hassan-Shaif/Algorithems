//the task
/*Return the provided string with the first letter of each word capitalized.
Make sure the rest of the word is in lower case.
For the purpose of this exercise, you should also capitalize on connecting words like "the" and "of".

For this algorithm, you can use the split() method.

titleCase("I'm a little tea pot")should return a string.
titleCase("I'm a little tea pot")should return "I'm A Little Tea Pot".
titleCase("sHoRt AnD sToUt") should return "Short And Stout".
*/


//Pseudocode

//-We will create a function to take string and variable to Convert string into array
//- We will create a for loop to loop through each word in words array
//- Use charAt method to get the first element of each word and slice method to get charachters of each word starting with second char
//- CONVERT FIRST LETTER TO UPPERCASE  AND THE REST TO LOWERCASE
//- USE JOIN METHOD TO CONVERT THE ARRAY INTO STRING AGAIN



//CODE
function titleCase(star){
var words = star.split(" ");

for(let i=0;i < words.length;i++){
       words[i]=words[i].charAt(0).toUpperCase() + words[i].slice(1).toLowerCase();
    }
var newStar=words.join(" ")
return newStar;
}
console.log(titleCase("i'M A liTTle tEa pOT"))

//DIAGRAM
/*
--FUNCTION WILL TAKE A STRING
-- THE STRING WILL BE CONVERTED INTO AN ARRAY
--FOR LOOP WILL LOOP THROUGH EACH WORD, STARTING WITH FIRST WORD IN ARRAY WHEN (i = 0)
--USING CHARAT METHOD TO GET THE FIRST ELEMENT OF THE FIRST WORD AND CONVERT IT TO UPPERCASE
--USING SLICE METHOD TO GET THE REST OF ELEMENTS AND CONVERT THEM TO LOWERCASE
--FOR LOOP WILL GO AGAIN WHEN (i=1) AND DO THE SAME FOR ALL WORDS IN ARRAY UNTIL THE LAST ONE
-- Create NEW VARIABLE AND CONVERT THE ARRAY INTO STRING AND PUT IT INTO THE NEW VAR
--RETURN THE NEW STRING */