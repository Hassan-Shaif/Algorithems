// the task
//For a fibonacci sequence starting at 0 and 1 add up all the values below 1,000,000.
//A Fibonacci sequence is an infinite series of numbers that is created by adding the last two numbers in the series
//A series would start with the numbers 0 and 1 in place, followed by 1 (0+1), 2 (1+1), 3 (1+2), 5 (3+2), etc.

//0 1 1 2 3 5 8 13 21...

//Pseudocode
    //1-define three variables to hold on the last two numbers of the series and the x to switch the values
    //2- for loop to access the numbers of the series


//code
var x;
var n1=0;
var n2=1;
for(var i=0;i<8;i++){
    console.log(n1);
    x=n1+n2;
    n1=n2;
    n2=x;
}

//diagram
    //1-for loop will print numbers starting with 0
    //2- n1 will print numbers 0
    //3- n1 and n2 should increase be 1 every iteration we do that with the helping of x
    //4- the loop will go again but now n1 will be 1 instead of 0 and n2 will still 1 this time.........
