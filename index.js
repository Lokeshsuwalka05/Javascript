// a();
// // b();
// // function statementn aka function declaration
// function a(){
//   console.log("Hello, World!");
// }
// // function expression
// var b=function(){
//   console.log("This is function b.");
// }

// //anonymous function
// //but this is not a valid anonymous function
// // function(){
// //   console.log("This is an anonymous function.");
// // }

// //to write an anonymous function, you can assign it to a variable
// var c = function() {
//   console.log("This is an anonymous function.");
// };
// c();
// //named function expression
// var d = function xyz() {
//   console.log("This is a named function expression.");
// };
// d();

// //parameters and arguments
// function e(param1, param2) {//these are parameters
//   console.log("Parameter 1:", param1);
//   console.log("Parameter 2:", param2);
// } 
// e("Hello", "World");//these are arguments

// //first-class functions akd first-class citizens
// //we can pass functions as arguments, return them from other functions, and assign them to variables
// //passing a function as an argument
// function firstClassFunction(fn) {
//   fn();
//   console.log("Executing the passed function:");
// }
// firstClassFunction(function() {
//   console.log("This is a first-class function.");
// });


// //arrow functions

// function x(){

//     for(var i=1;i<=5;i++){
//      function y(i){
//       setTimeout(function(){
//         console.log(i);
//       },i*1000);
//      }
//        y(i);

//      }

// }
// x();
// function test(){
//   let count=0;
//   document.getElementById("ClickMe").addEventListener("click", function xyz() {
//     console.log("Button Clicked!",count++);
//   });

// }
// test();
// function sayBye() {
//   console.log("Bye!");
// }
// sayBye();
// function greet(name, callback) {
//   console.log("Hi " + name);
//   callback(); // calling the callback function
// }

// greet("Lokesh", sayBye);

// function issue(){
//   setTimeout(function(){console.log("HI i am ghost and i have trust issues")},5000);
// }
// issue();

//this code is for blocking the main thread

// let start=new Date().getTime();
// console.log(start);
// end=start+10000;
// while(start!=end){
//      start=new Date().getTime();

// }

// const radius=[1,2,3,4,5];
// function double(x){
//   return x*2;
// }
// function binary(x){
//    let temp="";
//    while(x>0){
//       temp=x%2+temp;
//       x=Math.floor(x/2);
//    }
//    return temp;
// }

// const output=radius.map(binary);
// console.log(output);

// let arr=[5,3,10,4,1,5,6,4];

// function logic(x){
//   return x%2===0;
// }
// let output=arr.filter(logic);
// console.log(output);

// let output=arr.reduce(function(acc,curr){
//   acc=acc+curr;
//   return acc;


// },0);

// let maxvalue=arr.reduce(function(currmax,curr){
//   if(curr>currmax){
//     currmax=curr;
//   }
//   return currmax;
// },arr[0]);

// console.log(maxvalue);

// const users =[

// { firstname: "akshay", LastName: "saini", age: 26 },

// { firstname: "donald", LastName: "trusp", age: 75 },

// { firstname: "elon", LastName: "musk", age: 50 },

// { firstname: "deepika", LastName: "padukone", age: 26 },
// ];

//acc={26:2,75:1,50:1}

// const output=users.reduce(function(acc,curr){
//   if(curr.age<30){
//     acc.push(curr.firstname);
//   }
//   return acc;

// },[]);

// const output=users.reduce(function(acc,curr){
//   if(acc[curr.age]){
//     acc[curr.age]+=1;

//   }
//   else{
//     acc[curr.age]=1;

//   }
//   return acc;
// },{});
// console.log(output);



// Create our own promise
// const cart=["shoes","pants","kurta"];
// const promise=createorder(cart);//orderId;



// promise
//   .then(function (orderId){
//          console.log(orderId);
//          return orderId;
//    })
//   .then(function (orderId){
//          return ProceedToPayments(orderId)

//    })
//   .then(function(paymentInfo){
//           console.log(paymentInfo);
//           return showOrderSummary(paymentInfo);
//   })
//   .then(function(summary){
//          console.log(summary);
//          return updateWallet(summary);

//   })
//   .then(function(wallet){
//          console.log(wallet);
//   })
//   .catch(function(err){
//          console.log(err.message);
//   });

// //crating our own createorder function
// function createorder(cart){
//   const pr=new Promise(function(resolve,reject){

//        if(validatecart(cart)){
//         const orderId="12345";
//           if(orderId){
//             setTimeout(function(){
//                 resolve(orderId);
//             },5000);
//           }


//        }
//        else{
//         const err=new Error("cart is not valid");
//         reject(err);
//        }





//   });


//   return pr;
// }
// function ProceedToPayments(orderId){
//    return new Promise(function(resolve,reject){
//         return resolve("Payment Successfull");
//    })
// }
// function showOrderSummary(paymentInfo){
//     return new Promise(function(resolve,reject){
//       resolve("total amount is 500rs");
//     })
// }
// function updateWallet(summary){
//    return new Promise(function(resolve,reject){
//        resolve("balance is 500");
//    })
// }

// function validatecart(cart){
//   return true;
// }


// Learn about promise apis and did interview questions

// async function->always returns a Promise

// async function getdata(){
//   return "Javascript";
// }
// getdata().then((res)=>console.log(res));

// const p1 = new Promise(function (resolve, reject) {
//   setTimeout(() => resolve("p1 gets resolve"), 20000);
// })
// const p2 = new Promise(function (resolve, reject) {
//   setTimeout(() => resolve("p2 gets resolve"), 10000);
// })

// async function handlePromise() {
//   const val1 = await p1;
//   console.log(val1);
//   const val2 = await p2;
//   console.log(val2);

// }
// handlePromise();

// const API_URL="https://api.github.com/users/Lokeshsuwalka05";

// async function handlePromise(){
//      const data=await fetch(API_URL);
//      const jsonvalue=await data.json();
     
//      // fetch(API_URL).then((res)=>res.json()).then((data)=>console.log(data));
//      console.log(jsonvalue);
// }
// handlePromise();

// //basically fetch function itself is a promise and gives us  a response
// //this response is in the readable stream
// //if you want to convert this readable stream into json then you have to use data.json



//call,apply and bind method

let student1={
  firstname:"lokesh",
  lastname:"suwalka",
  printfullname:function(hometown,state){
    console.log(this.firstname+" "+this.lastname+" "+hometown+" "+state);
  }
}
let student2={
    firstname:"lokesh",
    lastname:"suwalka"
}
student1.printfullname.call(student2,"bhilwara","rajasthan");
student1.printfullname.apply(student2,["bhilwara","rajasthan"]);
let print=student1.printfullname.bind(student2,"bhilwara","rajasthan");
print();
 

//array destructuring
const a=[1,2,3,4];
const b=a[0];
const [x,,z]=a;
console.log(x,z);

//object destructuring

const user = {
  id: 1,
  profile: {
    username: 'lokesh',
    email: 'lokesh@example.com'
  }
};

const {
  id:userid,
  profile: { username, email }
} = user;
console.log(username, email,userid); // lokesh, lokesh@example.com



//rest operator

const [first,...rest]=[1,2,3,4];

const arr1=[1,2,3,4];
const arr=[...arr1,2,3,4];
console.log(arr);

const user1= {
  id: 1,
  profile: {
    username: 'lokesh',
    email: 'lokesh@example.com'
  }
};

const user2={...user1,city:'bhilwara'};
console.log(user2.profile.username);




