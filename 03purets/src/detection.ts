function detectTypes(val: number | string){
    if(typeof val === "string"){
        return val.toLowerCase() 
    }
    return val + 3
}

//Handling null value in functions
function provideId(id:string | null){
    if(!id){ //perform check to throw and error to avoid misuse of the value inputs
        console.log(`Please provide ID`);
        return 
    }
    id.toLowerCase()
}


// Example
// function printAll(strs: string | string[] | null) {
//     // !!!!!!!!!!!!!!!!
//     //  DON'T DO THIS!
//     //   KEEP READING
//     // !!!!!!!!!!!!!!!!
//     if (strs) {
//       if (typeof strs === "object") {
//         for (const s of strs) {
//           console.log(s);
//         }
//       } else if (typeof strs === "string") {
//         console.log(strs);
//       }
//     }
//   }

  //Handling empty string detection.


  interface User{
    name: string,
    email: string
  }

  interface Admin{
    name: string,
    email: string,
    isAdmin: boolean
  }

  //"In" operator narrowing

  function isAdminAccount(account: User | Admin){
    //narrowing using "in" property
    if ("isAdmin" in account) {
        return account.isAdmin
    }
  }

  //Example of Instanceof

  function logValue(x: Date | string) {

    if (x instanceof Date) { //checks whether x is an instance of Date std function
      console.log(x.toUTCString());
                 
    } else {
      console.log(x.toUpperCase());
                 
  
  }

}

//using type predicates
type Fish = {swim:()=>void};
type Bird = {fly:()=>void};

//specify type of value
function isFish(pet: Fish | Bird):pet is Fish{
    return (pet as Fish).swim !== undefined
}

//allocate the type
function getFood(pet:Fish | Bird){
    if (isFish(pet)) {
        pet
        return "fish food"
    } else {
        pet 
        return "bird Food"
        
    }
}


//Discriminated union example
interface Circle {
    kind: "circle"
    radius: number
}

interface Square{
    kind: "square"
    side: number
}

interface Rectangle {
    kind:"rectangle",
    length: number,
    width: number
}

type Shape = Circle | Square | Rectangle

function getTrueShape(shape:Shape) {
    if(shape.kind === "circle"){
        return Math.PI * shape.radius**2
    }
    // return shape.side*shape.side
}

//Never type example
function getArea(shape: Shape){

    switch(shape.kind){
        case "circle":
            return Math.PI * shape.radius **2
        case "square":
            return shape.side * shape.side
        case "rectangle":
            return shape.length * shape.width
        default:
            const _defaultforshape: never = shape
            return _defaultforshape
    }
}