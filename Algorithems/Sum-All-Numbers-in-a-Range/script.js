//The task
//We'll pass you an array of two numbers. Return the sum of those two numbers and all numbers between them.

//function sumAll(arr) {
//  return 1;
//}
//sumAll([1, 4]);

//The lowest number will not always come first.

//sumAll([1, 4]) should return a number.
//sumAll([1, 4]) should return 10.
//sumAll([4, 1]) should return 10.
//sumAll([5, 10]) should return 45.



//Pseudocode

//-We will create a function to take array and variables to hold largest and smallest index of an array,and the result
//-we will create loop to loop through indexes of array
//- We will create if statement to find the largest and smallest number in an array
//- We will create another loop to loop through the range between largest and smallest number and store the sum of
//- numbers in result


//code
function sumAll(x){
var max=0;
var min=0;
var result =0;
for(let i =0;i<x.length;i++){
    if(x[i]>max){
        min=max;
        max=x[i];
    }else if(x[i]>min){
        min=x[i];
    }
}
for( let j=min;j<=max;j++){
result+=j;
    }
return result
}
console.log(sumAll([4,1]))

//diagram
/*
--Function will take array as an argument
--for loop will start with index 0(when i =0)
--if statment will check if x[i] > max, and assign the value of x[i](i=0)to max if true and assign value of max to min
--loop will go again (when i = 1 ) and check again if x[1] > max, if true x[i] value will be assigned to max and max to min.
--At that point we will be able to determine the largest and smallest in an array
--Second loop will go through the range between largest(max) and smallest(min) numbers in array
--Starting with smallest(min) number (when j =0) and store the value in result variable
--.
--.
--loop will go forward until the largest number in array max (when j = max) and add its value to result
--the final result should be the sum of range