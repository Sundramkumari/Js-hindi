const user={
    username:"Rishu",
    price:999,

    welcomeMessage: function(){
        console.log(`${this.username} , welcome to website`);
        // console.log(this);
    }
}
user.welcomeMessage()
user.username="Raj"
user.welcomeMessage()

// console.log(this);




// function chai(){
//     let username="parashar"
//     console.log(this.username);
// }
// chai()


// const chai=function(){
//     let username="hites"
//     console.log(this.username);
// }

const chai= () => {
    let username="hites"
    console.log(this);
}

// chai()

// const addTwo =(num1, num2) => {           //@@@@@@@ EXPLICIT RETURN
//     return num1 + num2
// }
// const addTwo =(num1, num2) => num1 + num2    //@@@@@ IMPLICIT RETURN

// const addTwo = (num1, num2) => (num1 + num2)

const addTwo=(num1, num2) =>({username: "shivam"})

console.log(addTwo(3, 4))


const  myArray =[5, 2, 6, 4, 9]

myArray.forEach(function () {})
//or
myArray.forEach(() => {}) //Arrow function
//or
