let food =[ 'Pecan pie', 'Shrimp','Quesadilla','Cheese cake','Hotdog'];

food.push(Pizza);

for(f in food){
    console.log(food[f]+` `+f)
}

food.splice(1,0,'Bananas');
//         (1) (2) (3)

console.log(food)

food.splice(4,1)
console.log(food);
food.pop();
console.log(food)

food.forEach(f=>{console.log(f);})

food.forEach((food, number) => {console.log(number);
    console.log(food)
}}

// Create a list with an array of movies //  my example
use for each to list
add another movie at end = push
splice 

let movie = ['Batman','The Dark Knight','The Dark Knight Rises','Batman vs. Superman'];

movie.forEach((f => {console.log(f)})

movie.push(Justice league)
movie.splice(3,1 'Superman')
console.log("********")

if (arr instanceof Array === true) {
    let revArr = arr.reverse()
    revArr.forEach(a => console.log(a))
  }

movies.forEach(f=>(console.log(f)});
