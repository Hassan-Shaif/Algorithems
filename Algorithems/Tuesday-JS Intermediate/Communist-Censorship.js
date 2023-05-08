// the task
//Given the array of strings X = ['Man', 'I','Love','The','Matrix','Program'],
//replace every letter of the word Program with *, so the output would be ['Man', 'I','Love','The','Matrix','*******'].
//Then make your algorithm work for any word of your choice

//Pseudocode
    //1- function taking two arguments arr and targetword
    //2-create new arr and new string, arr to hold the new arr and string to replace the target word into stars
    //3- loop through arr
    //4-if statement to check if the index of arr is the targetword
    //5-if it is the targetword, loop through its indexes and replace them with stars and push it to the new arr
    //6- if not just push the word in the new arr



function communist(arr , targetWord){
    var result = [];
    var stars = "";
    for(let i =0 ; i < arr.length; i++){
        if(targetWord === arr[i]){
            for(let m = 0 ; m < targetWord.length;m++){
                stars += "*"
            }
            result.push(stars)

        }else{
            result.push(arr[i]);
        }
    }
 return result;
}
let X = ['Man', 'I','Love','The','Matrix','Program'];
console.log (communist(X,'Love'));


//diagram

    //1- function will take two arguments on for the arr and the other for the targetword
    //2-loop through each word inside the arr
    //3-if statement will check if the target word is inside the arr or not
    //4-if yes, loop through the target word's elements and replace them with stars and push in the new arr(result)
    //4-else push words into  new arr(result)
    //5-return result
