// Calling Functions
function getSquare(number){
    return number * number;
}
getSquare(5);

// function declaration can be hoisted which means to apper below the call Return example

console.log(addNumbers(5,7));
/*...*/
function addNumbers(a,b) { return a + b; }

// A recursive function calls itself]

let timer = function (seconds){
    if (seconds > 0){
        console.log(seconds)
        return timer (seconds-1)
    } else{
        return seconds
    }
}

timer (10);