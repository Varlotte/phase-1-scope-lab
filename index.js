// Write your solution in this file!
var customerName = "bob";
//the one and only time I use var, to get global scope for bob
const leastFavoriteCustomer = "joe";
//global scope for joe

function upperCaseCustomerName() {
  customerName = customerName.toUpperCase();
}
//function that accesses customerName and uppercases it

function setBestCustomer() {
  bestCustomer = "not bob";
}
//declares a global variable inside a function assigning it to be "nob bob"

function overwriteBestCustomer() {
  bestCustomer = "maybe bob";
}
//changes bestCustomer to maybe bob

function changeLeastFavoriteCustomer() {
  return (leastFavoriteCustomer = "anyone but joe");
}
//try to change that const
