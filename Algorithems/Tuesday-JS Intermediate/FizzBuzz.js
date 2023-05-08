//the task
//Create an algorithm that inserts the numbers from 1 to 135 into an array,
//while replacing the values that are divisible by 3 with the word "Fizz",
//the numbers that are divisible by 5 with the word "Buzz",
//and the numbers that are divisible with 3 and 5 with the word "FizzBuzz".
//Your output should look like [1,2,'Fizz',4,'Buzz',5,'Fizz',7,8,...]


//Pseudocode
    //1-for loop to insert number from 1 to 135
    //2- if statement to check if numbers are not divisible by 3 and 5
    //3- else if statement to check if numbers are  divisible by 3 and replacing the number with string "Fizz"
    //4-else if statement to check if numbers are  divisible by 5 and replacing the number with string "Buzz"
    //5-else if statement to check if numbers are  divisible by 3 and 5 replacing the number with string "FizzBuzz"
    //4-print the result

//code
var x=[] ;
for(var i = 1 ; i < 136 ; i++){
    if(i % 3 != 0 && i % 5 != 0){
        x=i;
    }else if( i % 3 ==0 && i % 5 != 0){
        x = "Fizz";
    }else if( i % 5 ==0 && i % 3 !=0){
        x = "Buzz";
    }else if (i % 3 == 0 && i % 5 == 0){
        x="FizzBuzz";
    }

console.log(x);
}

//diagram

//1-for loop will insert number from 1 to 135
//2-if statement will check if number are not divisible by 3 and 5 and print them in x array if not
//3-else if statement to check if number divisible by 3 or 5 or by both and replacing them with string
//4-print the number in a new array x.