// function sayName(name , age){
//     console.log(`${name} ${age}`)
// }

// sayName("binod", 20)
// sayName("arjun")
// sayName("arjun")
// sayName("bishal")

// function expression 

// function Sum(){
//     console.log("hello");
// }

// Sum()
// function sumOfTwoNumber(a,b){
//     console.log(a+b);
// }

// let sum1 = sumOfTwoNumber(10,20);
// let sum2 = sumOfTwoNumber(10,30);
// console.log(sum1);
// console.log(sum2);

// function addLog(a,b){
// return a+b;
// }

// const s1 = addLog(10,20)
// console.log(s1);


// function calculateTotalPrice(price , quantity){
//     return price * quantity;
// }

// const item1Total = calculateTotalPrice(20, 10);
// const item2Total = calculateTotalPrice(5, 30);

// console.log(`Total price: ${item1Total + item2Total}`);

// function guestUserName(guest = "john"){
//     console.log(guest)
// }

// guestUserName("Suman");
// guestUserName();


// function Num(val1, val2, ...val ){
//     console.log(val1,val2, val);
// }

// Num(10,30,40,60,60,30,60,20,20)




// function add(a,b){
//     console.log(a+b);
// }


// add(10,30);


// const add = (a,b) => console.log(a+b)


// add(10,20);

// const square = sum => sum * sum;
// console.log(square(10));


// function processOrder(ordername , callback){
//     console.log(`Processing Order: ${ordername}`);

//     callback();
// }

// processOrder("Laptop", function(){
//     console.log("Order complete !");
// })



// function Hi(){
//  console.log("hello");
// }

// // console.log(Hi());

// const ref = Hi;
// ref()

// function add(a,b){
//     console.log(a+b)
// }

// add(10,20)
// add(10,20)
// add(10,20)



// let total = 0;

// function addTotal(amount){
 
//     return total+=amount;
// }


// console.log(addTotal(5));
// console.log(addTotal(5));
// console.log(addTotal(5));




// function square(num){
//     return num*num;
// }

// console.log(square(5));



// function isEven(num) {
//   return num % 2 === 0;
// }


// const isEven = num => num%2 === 0;


// console.log(isEven(11));


// 3. Write a function `createUser(name, role = "member")` that uses a default parameter, and call it both with and without providing a `role`.
// 4. Write a function `sumAll(...numbers)` using rest parameters that returns the sum of any number of arguments passed to it. 


function createuser(name, role = "admin"){
    console.log(`${name} is a ${role}`);
}

createuser("Ram","Member")
createuser("Ram")


// 5. Build a small "order processor" function `processOrder(itemName, quantity, callback)` that logs a processing message, then calls the `callback` function with a confirmation message like `"${quantity}x ${itemName} order confirmed!"`. Call it with a custom callback that logs the confirmation.

