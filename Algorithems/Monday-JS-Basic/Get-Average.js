//the task
    //Given an array X, write a program that will return the average value of all elements in the array. For example,
     //for array X = [2,1,3] your output should be 2.

 //Pseudocode
    //1- difine a variable called aver
    //2-for loop to sum the array's elements
    //3-aver=sum/the numbers of elements
    //5-print the result

 //code

var x = [2,1,3];
var sum = 0;
var aver = 0;
for (var i = 0 ; i < x.length ; i++){
    sum +=x[i];
}

aver = sum/(x.length);

console.log(aver);

//diagram

    //1- the loop will add all the x indexes to sum
    //2-average = the sum of elements / the numbers of elements
    //3-print the result