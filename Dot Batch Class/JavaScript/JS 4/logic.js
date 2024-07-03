// console.log('Hello guys');

// function run(){
//     console.log('running');
// }
// // function call or invoke
// run(); 

// //Named function assignment
// let person = function walk(){
//     console.log('walking');
// }
// person();

// //Anonumous function assignment
// let person2 = function(){
//     console.log('walking');
// }
// person2();



// let man = person;
// man();

// let x = 1;
// x = 'a';
// console.log(x);

// function sum(a,b){
//     let total = 0;
//     for(let value of arguments)
//     {
//         total = total + value;
//     }
//     return total;
// }
// // console.log(sum(1,3));
// // console.log(sum(1,));
// // console.log(sum());
// // console.log(sum(1,3,45,5));
// let ans = sum(1,2,3,4,5,6);
// console.log(ans);

// Rest operator
// function sum(num,value,...args){
//     console.log(args);
// }
// sum(1,2,3,4,5,6);

// function interest(p,r=6,y=10){
//     return p*r*y/100;
// }
// console.log(interest(1000)) 
// // Bad practice -> hack
// console.log(interest(1000,8,undefined)) 

// Getter & Setter

// let person = {
//     fName:'Manojit',
//     lName:'Das',
//     get fullName(){
//         return `${person.fName} ${person.lName}`;
//     },
//     set fullName(value){
//         if(typeof value !== String){
//             throw new Error("this is not a string");
//         }
//         let parts = value.split(' ');
//         this.fName = parts[0];
//         this.lName = parts[1];
//     }
// };
// // console.log(person);
// // function fullName(){
// //     return `${person.fName} ${person.lName}`;
// // }
// // person.fullName = 'Rahul Kumar';
// try{
//     person.fullName = true;

// }
// catch(e){
//     alert(e);
// }
// console.log(person.fullName);

// Scope -> lifetime of a variable
// {
//     var a = 20;
//     console.log(a);
// }
// console.log(a);

// function walk(){
//     var a = 8;
// }
// // a can't use because it is outside of the function
// console.log(a);

// Reducing array
let arr = [-1,-2,-4,5];
// let total = 0;
// for(let value of arr){
//     total += value;
// }
// console.log(total);
let sum = arr.reduce((accumulator , currentValue) => accumulator + currentValue,0);
console.log(sum);

