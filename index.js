// 1. Declare three objects timmy, sarah, and rocky that represent patients
// 2. Have properties for each for:
//    a. prescription 
//    b. price per refill
//    c. number of refills
//    d. subscription status
//    e. coupon status

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
}

const rocky = {
    prescription: "phenylephrine",
    pricePerRefill: 30,
    refills: 5,
    subscription: true,
    coupon: true,
}

//  Declare a function calculateRefillCost that takes in a patient parameter, multiplies their pricePerRefill by their refills, and returns the result

const calculateRefillCost = function(patient) {
    const refillCost = patient.pricePerRefill * patient.refills;
    return refillCost;
};

// Declare a function applySubscriptionDiscount that takes in a totalCost parameter and a hasSubscription parameter
// If hasSubscription is true, it returns totalCost multiplied by 0.75. Otherwise, it returns totalCost

const applySubscriptionDiscount = function(totalCost, hasSubscription) {
    if (hasSubscription) {
        const discountedCost = totalCost * 0.75;
        return discountedCost;
    }
    return totalCost;
};

// Declare a function calculateFinalCost that takes in a patient parameter
// The function first calls calculateRefillCost with patient as an argument, 
// then passes the result of that function call and patient.subscription to applySubscriptionDiscount 
// It then sets the finalCost variable to the result of the applySubscriptionDiscount call
// If patient.coupon is true, it subtracts 10 from finalCost
// Finally, the function returns a string with the final cost

const calculateFinalCost = function(patient) {
    const totalCost = calculateRefillCost(patient);
    const discountedCost = applySubscriptionDiscount(
        totalCost,
        patient.subscription
    );
    let finalCost = discountedCost;
    if (patient.coupon) {
        finalCost = discountedCost - 10;
    }
    return `Your grand total is $${finalCost}.`;
};

// Call calculateFinalCost with each of our patient objects as arguments and log the results to the console

console.log(calculateFinalCost(timmy));
console.log(calculateFinalCost(sarah));
console.log(calculateFinalCost(rocky));