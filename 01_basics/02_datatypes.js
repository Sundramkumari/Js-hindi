"use strict";//treat all js code as newer version

//aleart(3+3) //we are using nodejs,not browser

//Code readability should be high

let name="sss"
let age=18
let isLoggedIn=false
let state;

//Primitive Datatypes
/*
number=>2 to power 53
bigint
string=>""
boolean=>true/false
null=>standalone value
undefined=>
symbol=>unique
*/

//object
console.log(typeof"")
console.log(typeof undefined)//undefined
console.log(typeof null)//object

const id=Symbol('123')
const anotherId=Symbol('123')
console.log(id==anotherId)