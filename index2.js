 let array = [ timmy = {
    prescription: "acetaminophen",
    pricePerRefill: 25,
    refills: 3,
    subscription: false,
    coupon: true,
},

 sarah = {
    prescription: "diphenhydramine",
    pricePerRefill: 50,
    refills: 1,
    subscription: true,
    coupon: false,
},

 rocky = {
    prescription: "phenylephrine",
    pricePerRefill: 30,
    refills: 5,
    subscription: true,
    coupon: true,
}];

// create a variable for patientName
  let patientName = (array) => { 
    for(let key in array) {
    return key[i];
    console.log(key[i]);

}
console.log(key[i]);
};



  // create a variable for refills
  const refills = patientName.refills;
  // create a variable for pricePerRefill
  const pricePerRefill = patientName.pricePerRefill;
  // create a variable for subscription
  const subscription = patientName.subscription;
  // create a variable for coupon
  const coupon = patientName.coupon;
  // create variables for priceBeforeDiscount
  const priceBeforeDiscount = refills * pricePerRefill;
  //Create a function for subscription
  //25% after refill total
  const subscriptionDiscount = (total, subscription) => {
    if (subscription === true) {
      return total * 0.75;
    } else {
      return total;
    }
  };
  const subDiscountedPrice = subscriptionDiscount(priceBeforeDiscount, subscription);
  //Create a function for coupons
  const couponDiscount = (subDiscount, coupon) => {
    //$10 discount after subscription discount
    if (coupon === true) {
      return subDiscount - 10;
    } else {
      return subDiscount;
    }
  }
  const finalAmount = couponDiscount(subDiscountedPrice, coupon);
  //Return and print "Your Grand total is ${finalAmount}"
  console.log(`Your Grand total is ${finalAmount}`);
  
  
  
  
  
  
  
  
  
  