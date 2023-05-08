//the task
    //Given an array X, write a program that would find the maximum value of the array.
    //Your program should work also work with negative values (eg. X = [2,-3,-1]) and zero.

//Pseudocode
     //1- difine a variable called max and give it the value of the first element in the array
    //2-for loop to access the numbers in the array
    //3-if statement to check if the x index value is bigger then max or not
    //4-if its true than change max value  if not go to the loop again until the last element.
    //5-print the result


//code

var  x = [-2,-3,-5,-6,-4];
var max = x[0];
for(i=0;i<x.length;i++){
    if (max < x[i]){
        max = x[i];
}
}
console.log(max);

//diagram
    //1-max value will be the first index of x
    //2-loop go through x indexes
    //3-if statement will check if there is any new value bigger than max
    //4-print the result
