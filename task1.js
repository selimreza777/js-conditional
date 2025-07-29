/***

Free Drinks
    - Burger more than 500tk: free Coke
    - Else Coke: 30tk
*/

let bergerPrice = 450;
let cokePrice = 0;

if (bergerPrice > 500) {
  cokePrice = 0;
  console.log("You get a free coke!")
}
else {
  cokePrice = 30;
  console.log(" coke price 30tk")
}
console.log("cokePrice:" + cokePrice + "taka");