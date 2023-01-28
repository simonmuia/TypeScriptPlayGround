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
