interface User {
    readonly dbId: number,
    email: string,
    userId:number,
    googleId?: string,
    //adding functions in interface
//    Method 1
    // startTrail: () =>string
    // Method 2
    startTrail(): string
}

const simon: User ={dbId:22, email:"example@example.com", userId: 2211,
startTrail:()=>{
    return "trail started"
}}

simon.email = "simon@gme.com"
// simon.dbId = 3434