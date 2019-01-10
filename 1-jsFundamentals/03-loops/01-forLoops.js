//For Loops

for (var i = 0; i < 10; i++) {
    console.log(i)
}

for (var i = 0; i <=20; i +=2) {
    console.log(i)
}

for (let i =10; i > -1;i --) {
    console.log(i)
}

for (let i =0; i > -25;i -=2 ) {
    console.log(i)
}

let word1 = "Milk";
let word2 = word.split('')
let wordL = word.length

for(let x = 0; x < wordL; x += 1) {
    console.log(word2[x])
}

let str = "name"

for (let i = 0; i < str.length; i++){
    console.log(str.charAt(i))
}

let str = "name"

for (var i = 1; i < str.length; i++){
    console.log(str[i])
}

var sum = 0;

for (var i = 1; i <= 50; i++) {
    sum += i
}
console.log(sum);