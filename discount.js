const price = 11200;
if (price >= 5000){
    // 10% Discount
    const discount= price * 10/100;
    const  payAmount= price - discount;
    console.log(payAmount);

}
else{
    console.log(price)
}