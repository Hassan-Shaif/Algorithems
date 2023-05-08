//the task

//Given any array X, for example [1,-2,4,1], remove the negative numbers, so that the output becomes: [1,4,1].

//Pseudocode
    //1-for loop to access the index of x
    //2- if statement to check if index negative or not
    //3-print the result

//code

var x=[1,-2,4,1];
var y =[];
for(let i = 0;i < x.length;i++){
    if(x[i] > 0){
       y=x[i];
    }
    console.log(y);
}

//diagram

    //1- for loop to access indexes of x
    //2-if statement to check if the number is positive and ignore the negative numbers
    //3-print the result
