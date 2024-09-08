const age = 60;
if(age < 13){
    // 90% Dicount
    const discount= age * 90/100;
    const payAmount = age - discount;
    console.log(payAmount);
}
else if ( age > 90){
    // 70% Discount 
    const discount = age * 75/100;
    const payAmount= Math.floor(age - discount)
    console.log(payAmount);
}
else if ( age > 60){
    // 65% Discount 
    const discount = age * 65/100;
    const payAmount= Math.floor(age - discount)
    console.log(payAmount);
}
else if ( age > 40){
    // 60% Discount 
    const discount = age * 60/100;
    const payAmount= Math.floor(age - discount)
    console.log(payAmount);
}
else if ( age > 30){
    // 55% Discount 
    const discount = age * 55/100;
    const payAmount= Math.floor(age - discount)
    console.log(payAmount);
}
else{
    console.log(age);
}