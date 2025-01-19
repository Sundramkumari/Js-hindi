// var c = 300
let a=300
if(true){
let a=10
const b=20
// var c=30
console.log("INNER: ", a);
}

// {} => for function or if else it is called as scope


//SYNTEX of for loop
// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
    
// }



console.log(a);
//console.log(b);
// console.log(c);

/* IMPORTANT:::::the global scope is very different either we are using console to print the output or
                 we are using node to print the output..  */

    
function one(){
    const username="sundram"

    function two(){
        const website="youtube"
        console.log(username);
    }
  //  console.log(website);
    two()
}
one()

if(true){
    const username="Aman"
    if(username === "Aman"){
        const website="youtube"
        console.log(username + website);
    }
    // console.log(website)
}
// console.log(username)


// +++++++++++++++++++++++++++++++++++ interesting ++++++++++++++++++++++++++++++++++
// Two Techenics in function
console.log(addone(5))

function addone(num){
    return num + 1
}


const addTwo = function(num){      // it is sometime called as expression
    return num + 2
}

addTwo(5)