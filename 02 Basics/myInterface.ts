interface User {
    readonly dbId: number,
    email: string,
    userId:number,
    googleId?: string,
    //adding functions in interface
//    Method 1
    // startTrail: () =>string
    // Method 2
    startTrail(): string,
    getCoupon(couponname: string, value:number) : number
}

interface User {
    githubToken: string
}

//Inheritance

interface Admin extends User {
    role:"admin" | "ta" | "learner"
}

const simon: Admin ={dbId:22, email:"example@example.com", userId: 2211,
githubToken:"github",
role: "admin",

startTrail:()=>{
    return "trail started"
},
getCoupon: (name:"simon", off:10) => {
    return 10
}

}

simon.email = "simon@gme.com"
// simon.dbId = 3434