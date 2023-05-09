//the task

//Return the length of the longest word in the provided sentence.
//Your response should be a number. For these algorithms you are allowed to use the split() method.
//findLongestWord("The quick brown fox jumped over the lazy dog")should return a number.
//findLongestWord("The quick brown fox jumped over the lazy dog")should return 6.
//findLongestWord("May the force be with you") should return 5.


//Pseudocode

//-We will create a function to take string and variable to hold the character number of the longest word
//-we will create an array to hold every single word in a string
//- We will create a for loop to loop through each word in words array
//- We will create another loop to loop through each character in evey word to be able to count the length of every word
//- if statement to check which word has the longest length and assign it to max
//- max will be returned


//code
function findLongestWord(star){

var max = 0;
var words = star.split(" ")
for (var i =0 ; i < words.length; i++){
  for(var j = 0 ; j < words[i].length; j++){
     if(words[i].length > max){
          max = words[i].length
        }
      }
   }
 return max;
}
console.log(findLongestWord("May the force beeeeeeeeeeeeeeeeee with you"));

//diagram
//1- The function will take a string
//2-The string will be split into words and stored in array(words)
//3-first for loop will loop inside the words array starting with first word (i=0)
//4- second loop will loop through each character in the first word starting with first character(when j = 0)
//5- if statement will check if the length of the first word(i = 0) > max which is zero here. and assign the length value of
//-the first word to max. Max here equal the length of first word.
//6- the first loop will go again (when i = 1) and take the second word
//7-second loop will loop through each character in the second word starting with first character(when j = 0)
//8- if statement will check if the length of the second word(i = 1) > max which is the length of first word here,
//-and assign the length value of the second word to max if its length > than first word length.
//-...............the loop will take again the next word and the process will be the same until the last word
//-Max value will be always updated if there is any other word that has length bigger than the existing one.
