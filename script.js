let num = 8; 
if (num > 0) {
    console.log("Positive");
} else if (num < 0) {
    console.log("Negative");
} else {
    console.log("Zero");
}


let day = 4;
switch (day) {
    case 1: console.log("Sunday");
     break;
    case 2: console.log("Monday");
     break;
    case 3: console.log("Tuesday");
     break; 
    default: console.log("Invalid Day");
}


console.log("Skipping 3 with continue:");
for (let i = 1; i <= 5; i++) {
    if (i === 3) continue; 
    console.log(i);
}


let globalVar = "I am global";
function testScope() {
    let localVar = "I am local";
    console.log(globalVar); 
    console.log(localVar);  
}
testScope();