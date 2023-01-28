const score: Array<number> = []
const names: Array<string> = []

function identityOne(val:boolean |number): boolean | number {
    return val
}

function identityTwo(val:any): any {
    return val
}

//generic function
function identityThree<Type>(val: Type): Type {
    return val
}

//identityThree("3")

//You can define your own type and lock it to the type
function identityFour<T>(val:T):T{
    return val
}

interface Bootle{
    brand:string,
    type: number
}

// identityFour<Bootle>({})

function getSearchProducts<T>(products:T[]):T {
    //do some database operations
    const myIndex = 3
    return products[myIndex]
}

//The comma in the function below is used to state the type as generic specifically

// Use of arrow function to pass generic typ format
const getMoreSearchProducts = <T,>(products:T[]): T =>{
    //do some database operations
    const myIndex = 3
    return products[myIndex] 
}