//Activity 1 - Create a variable called "tasks" with an array of 10 task items e.g. let tasks = ['swim', 'study', 'eat']
//Using the "for" loop display the value of each of these items
//"console.log" the output, separated by a space
//Add your code below

let tasks = ['swim','study','eat',"sleep","bake a cake","jog","code","'struggle with JS'","google problems","eat food"]

for (let i = 0; i < tasks.length; i ++){
 let LiEl = document.createElement("li");
 let text = document.createTextNode(tasks[i]);
 LiEl.appendChild(text);
 document.getElementById("ulEl").appendChild(LiEl)


   console.log(tasks[i])
}
//Activity 2 - Edit the loop created above, to now calculate the sum of all the items leading up to 10. e.g. 1 + 2 + 3 = 6
//console.log your output
//Add your code 

for (let i = 0; i < 11; i++){

   i = i + 1;
  let LiEl = document.createElement("p");
  let text = document.createTextNode(i);
  LiEl.appendChild(text);
  document.getElementById("add").appendChild(LiEl)
 
  
    console.log(tasks[i])
 }



//Activity 3 - Using the tasks variable created above
//Create a loop that performs the 15 times table
//Leading up to the "length" of your tasks variable
//Add your code below

for (let i = 0; i < tasks.length; i ++){

  let ans = 15 * i;
  let LiEl = document.createElement("p");
  let text = document.createTextNode("15 x " + i + " = " + ans);
  LiEl.appendChild(text);
  document.getElementById("TimesTable").appendChild(LiEl)
 
 
    console.log(tasks[i])
 }


 
//Activity 4 - Edit your code in activity 3, by creating an array called timesTable
//And store each value of the your fifteen times table in it
//Add your code below

let timesAnswers = [];

for (let i = 0; i < tasks.length; i ++){

  let ans = 15 * i;
  timesAnswers.push(ans);
    console.log(tasks[i])
 }




//Activity 5 - Using the array you created in the Activity 4, loop through the array and print each value to the console.
//Add your code below

for (let i = 0; i < timesAnswers.length; i ++){
  let LiEl = document.createElement("p");
  let text = document.createTextNode("15 x " + i + " = " + timesAnswers[i]);
  LiEl.appendChild(text);
  document.getElementById("TimesTable2").appendChild(LiEl)


  console.log(tasks[i])
}
 


//Activty 6 - Use the .reduce() built-in method to calculate the average of the array created in Activity 4.
//Add your code below

let average = timesAnswers.reduce((total,num) => total + num) / timesAnswers.length

document.getElementById("Avr").innerHTML = average;
//Bonus Activity
//Repeat the output of what you produced in activity 6, this time by not using the .reduce function
//Add your code below

let ans = 0
for(let i = 0; i < timesAnswers.length; i++){
  ans = ans + timesAnswers[i]
}

let average2 = ans/timesAnswers.length; 
document.getElementById("Avr2").innerHTML = average2;


//Create a "for of" loop, looping through the values of your tasks variable created in activity 1
//console.log the output
//Add your code below

for(everyItsyBietsiLittleElement of tasks){
  console.log(tasks)
  let LiEl = document.createElement("li");
  let text = document.createTextNode(everyItsyBietsiLittleElement);
  LiEl.appendChild(text);
  document.getElementById("ulEl2").appendChild(LiEl)
 
  
}
//Try to replicate the above activity by using a "for in" loop instead
//Does this work? can you understand and explain why it displays what it displays?
//Add your code below

for(let everyItsyBietsiLittleElement in tasks){
  console.log(tasks)
  let LiEl = document.createElement("li");
  let text = document.createTextNode(tasks[everyItsyBietsiLittleElement]);
  LiEl.appendChild(text);
  document.getElementById("ulEl3").appendChild(LiEl)
 
  
}