//the task
    //Given an array X, write a program that will remove all negative numbers and replace them with a 0. For example,
    //for array X = [2,-1,4,-3] the output of your program should be [2,0,4,0].

//Pseudocode
    //1-for loop to access the index of x
    //2- if statement to check if index negative or not
    //3-replace the negative numbers with 0
    //4-print the result


//code

var x = [2,-1,4,-3];
for(var i = 0 ; i <x.length ; i++){
    if (x[i] < 0 ){
        x[i] = 0 ;
    }
}
console.log(x);

// diagram
    //1-loop will access all elements in x
    //2-if statement will check if there is any negative value
    //3-elements with negative values will be replaced with 0
    //4-the new x array will be printed
