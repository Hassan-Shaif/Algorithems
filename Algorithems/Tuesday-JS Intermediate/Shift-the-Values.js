//the task
//Given any array X, for example [2,1,6,4,-7], create an algorithm that shifts each number by one to the front.
//When your program is done the output for array [2,1,6,4,-7] should be [-7,4,6,1,2].



//Pseudocode
    //1-new arr to receive the value of x
    //1-for loop to loop through arr elements  from backward
    //2-push the value in the new array

//code
var x = [2,1,6,4,-7];
var y =[];

for (var i = x.length - 1; i >= 0; i--){
    y.push(x[i])
}
console.log(y);

//diagram

    //1- the loop will print the number starting from the last element
    //2-they will be pushed in the new array
    //3-result will be printed on console