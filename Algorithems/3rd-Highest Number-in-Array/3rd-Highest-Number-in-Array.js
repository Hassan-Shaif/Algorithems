//the task
//Having an array of numbers, write an algorithm that will return the 3rd highest number in the array.
//Your algorithm should do only one iteration of the array (just one for/while loop).


//Pseudocode

//-We will define three variables to hold the value of the first, second ,third highest number in the array
//-We will create a function to take an array as argument, checking for the 3rd highest number
//- We will create a for loop to check each element in the array
//- We will use an if statement to check if an index of the array > max
//- If an element is > max than max will take its value, and max2d will take max value and max3d will take max2d value.
//-Then will create an if else statement to check if the index is > max2d, and take the index value if true
//- Another if statement to check if index is > max3d and take its value if true


//Code :

var max =0;
var max2d = 0;
var max3d =0;
function thirdHighest(input){
    for (var i = 0 ; i < input.length ; i++){
        if (input[i] > max){
           max3d = max2d;
           max2d = max;
           max = input[i];
        }else if (input[i]>max2d){
            max3d = max2d;
            max2d = input[i]
        }else if (input[i] > max3d) {
            max3d = input[i]
        }

    }
return max3d;
}
console.log(thirdHighest([40,50,60,32]))


//diagram

//1- the function will take the array as an input
//2-forloop will loop through every element in the array, starting with index 0 ;
//3- index 0 will be asigned to max which represent the max number, max to max2d and max2d to max3d
//4-max2d and max3d will still 0 in the first loop
//5- the second loop will be index 1 which is > max. So, max will become 50 and max2d =40 ,whereas max3d will still 0
//6- the third loop will be index 2 which is > max too. So, max will become 60, max2d =50 , and max3d =40
//7- the loop will continue untill the last index.
