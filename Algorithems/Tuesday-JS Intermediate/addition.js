// the task

//Add all the values between 200 and 2700 (inclusively) that are divisible by 3 or 5, but not both 3 and 5.
//To solve this task you might want to use the modulus operator.


//Pseudocode
//1-for loop to print numbers from 200 to 2700
//2-if statement to check the number that divisible by 3 or 5, but not both 3 and 5
//3-sum those numbers and print them




//code
var sum=0;
for(var i = 200 ; i <=2700 ; i++ ){
    if(i % 3 ==0 && i % 5 != 0){
       sum+=i;
    }else if (i % 3 != 0 && i %5 == 0){
        sum+=i;
    }
}
console.log(sum);


//diagram

    //1- the loop will bring all numbers between 200 and 27000
    //2-if statement will filter the numbers that divisible by 3 or 5, but not both 3 and 5
    //3-result will be printed