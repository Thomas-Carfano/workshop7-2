const timmy = {
    prescription: "acetaminophen",
    pricePerRefill: 25,
    refills: 3,
    subscription: false,
    coupon: true,
  };
  const sarah = {
    prescription: "diphenhydramine",
    pricePerRefill: 50,
    refills: 1,
    subscription: true,
    coupon: false,
  };
  const rocky = {
    prescription: "phenylephrine",
    pricePerRefill: 30,
    refills: 5,
    subscription: true,
    coupon: true,
  };

  // Create a function to find refill total
  const refillTotal = (refill, price) => refill * price;
  const totalBefore = refillTotal(25, 3);


  //Create a function for subscription
  //25% after refill total
  const subscriptionDiscount = (total, subscription) => {
    if (subscription === true) {
      return total * 0.75;
    } else {
      return total;
    }
  };
  const subDiscountedPrice = subscriptionDiscount(totalBefore, true);


  //Create a function for coupons
  const couponDiscount = (subDiscount, coupon) => {
    //$10 discount after subscription discount
    if (coupon === true) {
      return subDiscount - 10;
    } else {
      return subDiscount;
    }
  }
  const finalAmount = couponDiscount(subDiscountedPrice, true);


  //Return and print "Your Grand total is ${finalAmount}"
  console.log(`Your Grand total is ${finalAmount}`);
  
  
  
  
  
  
  
  
  
  
  