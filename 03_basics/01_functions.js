function sayMyName(){
    console.log("s");
    console.log("u");
    console.log("n");
    console.log("d");
    console.log("r");
    console.log("a");
    console.log("m");
}

sayMyName()

// function addTwoNumbers(number1, number2){
//     console.log(number1 + number2);
// }

function addTwoNumbers(number1, number2) {
//  let result=number1 + number2
//  return result
return number1 + number2   
}
const result = addTwoNumbers(3, 5)

// console.log("Result: ", result)

function loginUserMessage(username = "skp"){
    if(username === undefined){   // we can write also if(!username){
        console.log("Please enter a username");
        return 
    }
    return `${username} just logged in`
}
// console.log(loginUserMessage("sundram"))
// console.log(loginUserMessage("AmanAnshu"))


function calculateCartPrice(...num1){   //... => REST OR SPREAD OPERATOR   or we can write   function calculateCartPrice(val1, val2, ...num1)
    return num1
}     
console.log(calculateCartPrice(200, 400, 500,600))            

const user = {
    username: "sssa",
    price: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`)
}
// handleObject(user)
handleObject({
    username:"sam",
    price:399
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}
// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 600]));