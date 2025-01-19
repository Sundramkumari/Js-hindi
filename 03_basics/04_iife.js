//  Immediately Invoked Function Expression  (IIFE)

// function chai(){
//     console.log(`DB CONNECTED`);
// }
// chai()

(function chai() {
    //named iife
    console.log(`DB CONNECTED`);
})();

// ( () => {
    //simple iife
//     console.log(`DB CONNECTED TWO`);
// })()

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
})('Anjali')
