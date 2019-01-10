// Switch Case 

let friend = 'Sebastian';

switch (friend){
case "Zach":
    console.log("Let\'s go play ultimate!")
    break;
case "Ing":
    console.log("so are you taking me to belgium?")
    break;
case "Adam":
    console.log('I probaly have baby stuff for you to borrrow')
    break;
  default:
    console.log(`You, ${friend}, are not my friend.`)
}

let dessert = 'Pie';

switch (dessert){
case "Pie":
    console.log("Pie, pie,me oh my!")
    break;
case "Cake":
    console.log("Cake is great!")
    break;
case "Ice Cream":
    console.log('I scream for ice cream!')
    break;
  default:
    console.log(`${dessert} is not on the menu`)
}

let range= -8

switch (true) {
    case (range< 0 && range> -10):
        console.log('worked')
        break; 
    case range >= 0 || range <= -10:
console.log('also worked')
    break;
    default:
    break;
}