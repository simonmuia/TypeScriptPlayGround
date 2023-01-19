// const User = {
//   name: "Simon",
//   email: "simonmuia@gmail.com",
//   isActive: true,
// };

// const createUser = ({ name: string, isPaid: boolean }) => {};
// //how to handle objects in functions calls
// let newUser = {name:"simon", isPaid: false, email: "s@ttm.com"}
// createUser(newUser)

// //WHat happens when a functions returns an object

// const createCourse = ():{name: string, price: number}=>{
//     return { name:"reactjs", price: 399}
// }

//Type alliases in Objects

// type User = {
//   name: string;
//   email: string;
//   isActive: boolean;
// };

// const createUser = (user: User): User => {
//     return {name: "", email: "", isActive: true}
// };

// createUser({name: "", email: "", isActive: true})

//readonly for a variable declared
// type User = {
//     readonly _id: string
//     name: string
//     email: string
//     isActive: boolean
//     credCardNumber?: number  //optional variable
// }

// let myUser: User = {
//     _id: "12345",
//     name:'h',
//     email:"h@h.vom",
//     isActive: false,
// }

// myUser.name = "Simon";

// myUser.email = "simon@gmal.com"


// type cardNumber = {
//     cardNumber: string,
// }

// type cardDate = {
//     cardDate:string
// }

// type cardDetails = cardNumber & cardDate & {
//     cvv : number
// }




export {};
