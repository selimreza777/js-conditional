// Multileve condition 
const rent = 4000;
const age = 42;

if (rent >= 5000) {
  // 10% discount 
  const discount = rent * 10 / 100;
  const payAmount = rent - discount;
  console.log(payAmount)

}
else if (rent > 5000) {
  // 5%discount
  const discount = rent * 10 / 100;
  const payAmount = rent - discount;
  console.log(payAmount);
}
else if (age <= 50) {
  // 50% discount 
  const discount = rent * 50 / 100;
  const payAmount = rent - discount;
  console.log(payAmount);
}
else {
  console.log('you go')
}