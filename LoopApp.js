//Activity 1 - Create a variable called "tasks" with an array of 10 task items e.g. let tasks = ['swim', 'study', 'eat']
//Using the "for" loop display the value of each of these items
//"console.log" the output, separated by a space
//Add your code below
let tasks = ["swim" , "study", "eat" , "run" ,"jump" ,"play" ,"drive" ,"fly" ,"cry" ,"sleep"]
let multiTasks = "";
for (let i = 0; i < tasks.length; i++) {
   multiTasks += tasks[i] + " ";
}
console.log(multiTasks);


//Activity 2 - Edit the loop created above, to now calculate the sum of all the items leading up to 10. e.g. 1 + 2 + 3 = 6
//console.log your output
//Add your code 
function array(arr){
    let sum = 0;
    for (let i = 0; i< arr.length; i++){
     sum += arr[i];
    }
    console.log(sum);
  }
array([8, 1, 2, 6 ,8 ,5 ,4 ,7 ,9 ,4])


//Activity 3 - Using the tasks variable created above
//Create a loop that performs the 15 times table
//Leading up to the "length" of your tasks variable
//Add your code below

let Table = "";
for (let i = 0; i < arr.length; i++) {
   multiTasks += tasks[i] + " ";
}
console.log(multiTasks);
let table = 15;
let count = 10;

for (let i = 0; i < count; i++) {
    i++;
    console.log(table, "X", i, "=", table * i);
    --i;
}



// for (let sum = 0; i < (array.length); i++) {
//     console.log(array * table)
  
// }


// let table = 15;
// let count = 10;

// for (let i = 0; i < count; i++) {
//     i++;
//     console.log(table, "X", i, "=", table * i);
//     --i;
// }

//Activity 4 - Edit your code in activity 3, by creating an array called timesTable
//And store each value of the your fifteen times table in it
//Add your code below



//Activity 5 - Using the array you created in the Activity 4, loop through the array and print each value to the console.
//Add your code below


//Activty 6 - Use the .reduce() built-in method to calculate the average of the array created in Activity 4.
//Add your code below


//Bonus Activity
//Repeat the output of what you produced in activity 6, this time by not using the .reduce function
//Add your code below

//Create a "for of" loop, looping through the values of your tasks variable created in activity 1
//console.log the output
//Add your code below

//Try to replicate the above activity by using a "for in" loop instead
//Does this work? can you understand and explain why it displays what it displays?
//Add your code below