let name = "Vicky";
let accountBalance = 0;

// console.log(`My name is ${name} and account Balance is ${accountBalance}`)  

// console.log(name)

let newName = new String("Lucky")
    // console.log(newName)

// console.log(Math)

let date = new Date();
// console.log(date.toLocaleDateString())

timestamp = Date.now();
// console.log(timestamp)

// array function **********************
let count = [1, 2, 3, 4]

newcount = count.slice(0, 3); //include first not include last and doesn't effect on orignal array
// console.log(newcount)

// latestcount = count.splice(0, 3); //include first and last but also effect on orignal array 
// console.log(latestcount)

// console.log(count);

combinearr = count.concat(newcount);
// console.log(combinearr);

spredarr = [...count, ...newcount]; //spread operator 
// console.log(spredarr)