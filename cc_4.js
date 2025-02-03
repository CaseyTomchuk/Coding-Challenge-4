// Task 1: If Statements
let purchaseAmount = 160;

if (purchaseAmount > 150) {
    discountPurchase = purchaseAmount / 2
    console.log(`Final amount after discount: $${discountPurchase}`);
} // if this purchase amount is > 150 then I will create a new variable that is the half the purchase amount and log it to the console
else {
    console.log(`Final amount: $${purchaseAmount}`);
} //if there is no discount, I will just log the original purchase amount

// Task 2: For Loop
let sales = [140,113,125,132,110];

let sum = 0;
for (let i = 0; i < sales.length; i++) {     
    sum += sales[i];
}  //let i = 0 sets the index to start at 0. As long as i is less than the amount of items left in the array, the loop will repeat, running sum+=sales[i]
console.log(`The reported sales figures are: ${sales} and the total sales adds up to: $${sum}`); //note: wasn't sure how to make each item in the sales array appear with a $

// Task 3: While Loop
let stock = 10;
while (stock >= 0) {
    updatedStock = stock-- //As long as the stock is greater than or equal to 0, the stock will be subtracted by 1
    console.log(`Updated stock: ${updatedStock}`);
};

// Task 4: Do...While Loop
let responses = 0;
do {
    responses++ // incriments the number of responses by 1
    console.log(`Responses: ${responses}`) // outputs the number of responses
}
while (responses<3); // repeats the process as long as there are less than 3 responses

// Task 5: For...In Loop
let employee = {
    Name: "Alice",
    Position: "Manager",
    Salary: 75000
};
for (let key in employee) //key would define elements like name or position, and employee represents the text inside, such as "Alice." the "in" keyword is used for iteration
{
    console.log(`${key}: ${employee[key]}`) 
}

// Task 6: For...Of Loop
let products = ["Hammer", "Nail", "Drill"];
for (let item1 of products) { 
    console.log(`Product: ${item1}`);
} //item1 represents the current iteration of the products array, for each item in the array the process is iterated

// Task 7 forEach() method
let orders = [110,120,130];
orders.forEach(function1); //For each item in the array, execute a function that logs/iterates the next item in the array

function function1(orders) {
    console.log(`Order: ${orders}`)
};