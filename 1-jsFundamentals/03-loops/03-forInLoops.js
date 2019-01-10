// For In Loops

var student = { name: "Harry", awesome: true, degree: "JavaScript", week:1 };

for (item in student) {
    console.log(item);
    console.log(student[item])
}

var pieArray = ['cherry', 'apple', 'chocolate', 'chicken pot'];
for (var pie in pieArray) {
    console.log(pie);
}

Let myName = "sebastian"
let str = 
var  = [];
for ()
    console.log();

    let studentName = "hArRy";
    let capName;
    for (let n in studentName){
        if (n == 0) {
            capName = studentName[n].toUpperCase();
        } else{
            capName += studentName[n].toLowerCase();
        }
    }
    console.log(capName)


    var studentName = 'hArRy';
var capName;
for (let n in studentName) {
  // console.log(studentName[n])
  if (n == 3) {
    capName = studentName[n].toUpperCase();
  } else {
    capName += studentName[n].toLowerCase();
  }
} 
console.log(capName);