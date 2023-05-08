//the task
    //Write a program that takes an array of numbers and turns the negative values to strings.
    //For example, for array X = [1,-4,0,-1] the output should be [1,'Turing,0,'Turing'].

//Pseudocode
    //1-for loop to access the index of x
    //2- if statement to check if index negative or not
    //3-replace the negative numbers with string
    //4-print the result


//code

var x = [2,-1,4,-3];
for(var i = 0 ; i <x.length ; i++){
    if (x[i] < 0 ){
        x[i] = "'Turing'" ;
    }
}
console.log(x);

// diagram
    //1-loop will access all elements in x
    //2-if statement will check if there is any negative value
    //3-elements with negative values will be replaced with string
    //4-the new x array will be printed
