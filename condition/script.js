// if else condtion 


// let age = 18;

// if(age>=20){
//     console.log("you are minor");
// }else{
//     console.log("You are not minor");
// }

// let age = 20;

// let category = age <=18 ? "Minor" : "Adult";
// console.log(category);








// let score = 10;

// if(score >= 90 ){
//     grade = "A+"
// }else if(score >=80){
//     grade = "A"
// }else if(score >=70){
//     grade = "B+"

// }else if(score >=60){
//     grade = "B"

// }else if(score >=50){
//     grade = "C+"

// }else if(score >=40){
//     grade = "C"
// }else{
//     grade = "Fail";
// }

// console.log(grade);


// let username = "john123";
// let password = "1234";




// if(username === "john12334" && password==="1234"){
//     console.log("Welcome to dashboard");
// }else{
// console.log("Username or password incorrect");
// }


// const isLogin = false;
// const userRole = "user";
// if(isLogin){
//     if(userRole === "admin"){
//         console.log("Welcome admin full access granted !");
//     }else{
//         console.log("Welcome limied access granted ");
//     }
// }else{
//         console.log("Please login first");
//     }




// swtich case statement 



// let date = 10;
 
// switch (date) {
//   case 0:
//   console.log("Sunday");
//     break;
//   case 1:
// console.log("monday");
//     break;
//   case 2:
//    console.log("Tuesday");
//     break;
//   case 3:
//  console.log("Wednesday");
//  break;

//   case 4:
//    console.log("Thursday");
//    break;
    
//   case 5:
//    console.log("Friday");
//    break;
//   case  6:
//    console.log("Saturday");
//    break;
//    default: 
//      console.log("Invalid day");
// }




// const isMember = false;
// const cartTotal  = 3000;

// let discount;

// if(isMember && cartTotal >=2000){
//     discount = "20% off";
// }else if(isMember && cartTotal >=1000){
//     discount = "10% off"
// }else if(!isMember &&  cartTotal>=3000){
//     discount = "5% off"
// }else {
//     discount = "No discount"
// }

// console.log(discount)



// console.log(1)
// console.log(2)
// console.log(3)
// console.log(4)
// console.log(5)
// console.log(6)
// console.log(7)
// console.log(8)
// console.log(9)
// console.log(10)

// for loop , while loop , do-while loop , for in , for - of, forEach 

// for(initialization; condtion; update){
//     // block to run 
// }


// for(let i = 1; i<=10; i++){
//     console.log(i);
// }

// while(condition){
//     // code to repeat 
// }


// let count = 1;
// while(count <=5){
//     console.log(count);
//     count++;
// }


// let username = "";
// let password = "";

// while(username !=="john" || password !=="1234"){
//     username = prompt("Enter usename");
//     password = prompt("Enter password");

//     if(username !=="John" && password !=="1234"){
//         console.log("Try again !");
//     }
// }
// console.log("Welcome to dashboard");

// do - while loop 

// let i = 1;
// do{
//     console.log(i)
//     i++;

// }while(i>=10)


// for(let i = 1; i<=10; i++){
//     if(i===5)
//         continue;

//     console.log(i);

// }





// for(let i = 1; i<=5; i++){
//     for(let j = i; j<=10; j++){
//         console.log(`${i} * ${j} = ${i * j}`);
//     }
// }


// for(let i = 1; i<=15; i++){
//     if(i%3===0){

//         continue;
//     }
//     console.log(i);
// }

// for(let i = 10; i<=10; i++){
//     for(let j=1; j<=10; j++){
//         console.log(`${i} * ${j} = ${i  * j}`)
//     }
// }

for(let i = 1; i<=5; i++){
    let row = "";
    for(let j = 5; j>=1; j++){
        row = row + "*"; '/n'
    }
    console.log(row)
}