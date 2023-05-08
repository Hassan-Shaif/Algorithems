//the task

//Return an array consisting of the largest number from each provided sub-array.
//For simplicity, the provided array will contain exactly 4 sub-arrays.

//Remember, you can iterate through an array with a simple for loop, and access each member with array syntax arr[i].

//function largestOfFour(arr) {
  // You can do this!
// return arr;
//}
//largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
//Returns [5,27,39,1001]


//Pseudocode

//- We will create a function take arrays as argument
//- Create an array to hold the largest number of every single array.
//- We will create two loops, first one to loop through arrays and second one to loop through each element inside each array.
//- We will create if statement to check if an array's element > largestNumber array if true then push it inside the new aar
//- return the new array that hold the largest number of each array


//code

function largestOfFour(arrays){
var largestNumber = [0,0,0,0];
    for (let i = 0; i < arrays.length;i++){
        for ( let j = 0 ; j < arrays[i].length ; j++ ){
            if(arrays[i][j] > largestNumber[i]){
                largestNumber[i]=arrays[i][j];
            }
        }
    }
 return largestNumber;
}
console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));


//diagram
//1- The fist for loop begin with the first array (i =0)
//2- The second for loop will loop through the index of the first array starting with first index( j=0)
//3- the if statement will check if j > largestNumber index 0, and push it there if true
//4- the second loop will continue the process until the last element of the first array and find the largest number
//5- After the second loop finish looping through the first array, first loop will move to array 2(when i =1)......
//6- the process will continue until the last array
//7- the new array (largestNumber) which hold the largest number of every array will be returned.