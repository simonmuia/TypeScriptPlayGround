"use strict";
const score = [];
const names = [];
function identityOne(val) {
    return val;
}
function identityTwo(val) {
    return val;
}
//generic function
function identityThree(val) {
    return val;
}
//identityThree("3")
//You can define your own type and lock it to the type
function identityFour(val) {
    return val;
}
// identityFour<Bootle>({})
function getSearchProducts(products) {
    //do some database operations
    const myIndex = 3;
    return products[myIndex];
}
//The comma in the function below is used to state the type as generic specifically
// Use of arrow function to pass generic typ format
const getMoreSearchProducts = (products) => {
    //do some database operations
    const myIndex = 3;
    return products[myIndex];
};
