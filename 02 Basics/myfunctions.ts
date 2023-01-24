

// const addTwo = (num:number) => {
//     return num +2
// }

// addTwo(5);

// const getUpper = (val: string) => {
//     return val.toUpperCase()
// }

// getUpper("TERS")


// const signUpUser = (name: string, email: string, isPaid: boolean) =>{
// }

// const loginUser = (name: string, email: string, isPaid: boolean = false) => {}

// loginUser("simon", "simonmuia38@gmail.com")

//better way of writing functions

// const getValue = (myVal: number): boolean => {
//     if(myVal >5){
//         return true
//     }

//     return true
// }


// const getHello = (s: string): string =>{
//     return "Hello"
// }

//const heros = ["thor", "spiderman", "ironman"]

// const heros = [1,2,3]

// heros.map((hero):string =>{
//     return `hero is ${hero}`
// })

const consoleError = (errmsg: string): void => {
    console.log(errmsg);    
}

const handleError = (errmsg: string):never =>{
    throw new Error("");
    
}

export{}