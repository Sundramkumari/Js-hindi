// const tinderUser=new Object()  Singleton object

const tinderUser={}  //Non singleton object

tinderUser.id="123abc"
tinderUser.name="Sundram"
tinderUser.isLoggedIn=false

// console.log(tinderUser);

const regularUser={
    email:"skp@gmail.com",
    fullname:{
        userfullname:{
            firstname:"sundram",
            lastname:"kumari"
        }
    }
}
// console.log(regularUser.fullname.userfullname.firstname)

const obj1={1: "a", 2: "b"}
const obj2={3: "a", 4: "b"}
const obj4={5: "a", 6: "b"}

 // const obj3={obj1, obj2}
// const obj3=Object.assign({}, obj1, obj2, obj4)

const obj3={...obj1, ...obj2}
// console.log(obj3)
const users=[
    {
        id: 1,
        email: "sk@gmail.com"
    },
    {
        id: 1,
        email: "sk@gmail.com"
    },
    {
        id: 1,
        email: "sk@gmail.com"
    },
]
users[1].email
// console.log(tinderUser)

// console.log(Object.keys(tinderUser))
// console.log(Object.values(tinderUser))
// console.log(Object.entries(tinderUser))

// console.log(tinderUser.hasOwnProperty('isLogged'))

const course={
    coursename:"js in english",
    price:"999",
    courseInstructor:"AShukla"
}

//course.courseInstructor
const {courseInstructor: instructor}= course
// console.log(courseInstructor)
console.log(instructor)

// const navbar = ({company}) => {    DESTRUCTURING CONCEPT

// }
// navbar(company = "ashukla")

// {
//    "name" :"sk",
//    "coursename" : "js in hindi",
//     "price" :"free"
// }

[
    {},
    {},
    {}
]