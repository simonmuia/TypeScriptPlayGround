"use strict";
// class User {
//  public email: string;
//   name: string;
//   private readonly city: string=""
//   constructor(email: string, name: string) {
//     this.email = email;
//     this.name = name;
//     this.city
//   }
// }
//Classes
//Getters and setters
class User {
    constructor(email, name) {
        this.email = email;
        this.name = name;
        //Protected, is accessible to any child class
        this._courseCount = 1;
        this.city = "Nairobi";
    }
    deleteToken() {
        console.log("Token deleted");
    }
    //gets any property(both private and public)
    get getAppleEmail() {
        return `apple${this.email}`;
    }
    get courseCount() {
        return this._courseCount;
    }
    //setter doesn't have any return type
    set courseCount(courseNum) {
        if (courseNum <= 1) {
            throw new Error("Course count should be more than 1");
        }
        this._courseCount = courseNum;
    }
}
//Inheritance
//Inheriting classes cannot acquire private properties of parent class
class SubUser extends User {
    constructor() {
        super(...arguments);
        this.isFamily = true;
    }
    changeCourseCount() {
        this._courseCount = 4;
    }
}
const simon = new User("s@s.com", "Simon");
simon.email;
// simon.deleteToken()
