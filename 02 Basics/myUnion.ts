let score: number | string = 33

score = 44;

score = "55"
// Union of types
type User = {
    name: string;
    id: number;
}

type Admin = {
    username: string;
    id: number;
}

let simon:User | Admin = {name:"simon", id:334}

simon = {username:"sm", id:334}

// const getDbId = (id:number | string){
//     console.log(`DB id is : ${id}`);;
    
// }

// getDbId(3)
// getDbId("3")

// const getDbId = (id:number | string)=>{
    
//     if(typeof id ==="string"){
//         id.toLowerCase()
//     }
// }

// const data: number[] = [1,2,3,4,5];
// const data2: string[]= ["1","2","3"]
// const data3: (string | number)[]=["1","2",3]

let SeatAllotment: "aisle" | "Middle" | "window";
SeatAllotment = "aisle";
