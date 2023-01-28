"use strict";
function detectTypes(val) {
    if (typeof val === "string") {
        return val.toLowerCase();
    }
    return val + 3;
}
//Handling null value in functions
function provideId(id) {
    if (!id) { //perform check to throw and error to avoid misuse of the value inputs
        console.log(`Please provide ID`);
        return;
    }
    id.toLowerCase();
}
//"In" operator narrowing
function isAdminAccount(account) {
    //narrowing using "in" property
    if ("isAdmin" in account) {
        return account.isAdmin;
    }
}
//Example of Instanceof
function logValue(x) {
    if (x instanceof Date) { //checks whether x is an instance of Date std function
        console.log(x.toUTCString());
    }
    else {
        console.log(x.toUpperCase());
    }
}
//specify type of value
function isFish(pet) {
    return pet.swim !== undefined;
}
//allocate the type
function getFood(pet) {
    if (isFish(pet)) {
        pet;
        return "fish food";
    }
    else {
        pet;
        return "bird Food";
    }
}
