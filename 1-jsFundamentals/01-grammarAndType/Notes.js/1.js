// Write a function that checks to see if all characters in a string are unique 

//Tools:
//Function with a paramter for loops and conditional split 

let allCharacters = "unique";

    function (){
        let allCharacters = unique + ", "
        console.log();
        return 
    }

// create two strings x & y for place holder , start with creating function, fat arrow function, checking = parameter name
//inside youre going to need a for loop and conditional, invoke and pass string , split the string which allows us to look at all characters
//for loop, break the string to invididual characters, console long the item which is unique
// when adding in youre stepping into the string in this case spliting it, string 

let x = "String";
let y = "racecar";

let check = (z) => {
  let unique = true;
  let broken = z.split("");
  for (i of broken) {
    for (m of broken) {
      if (i !== m && broken[i] === broken[m]) {
        unique = false;
      }
    }
  }
  if(unique){
    console.log(`${z} is unique!`);
  } else {
    console.log(`${z} is not unique!`);
  }
}

check(x);
check(y);

let x = "String";
let y = "racecar";

let check = (checking) => {
    let broken = checking.split("");
    for (item in broken) {
      for(item2 in broken){
          console.log(item, item2);
    if (broken[item]== broken[item2] && item !== item2){
          console.log("not unique");
          }
      }
    }
}
check(y);