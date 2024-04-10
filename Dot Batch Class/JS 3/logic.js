// console.log(Math.random());
// console.log(Math.round(1.5));
// String types:
// primitive
let lastName = ' Babbar ';
// object
let lastName1 = new String ('madboy');
// let message = 'This is my foster messagae';
// let words = message.split(' ');
// console.log(words);
// let message = 
// `${lastName} is 
// my foster
// messagae`;
// console.log(message);
// Date and Time
// let date = new Date('June 20 1998 7:16');
// let date1 = new Date(1902 , 11 , 20, 9);
// date1.setFullYear(2003);
// console.log(date1);
 

// Array is JS
// Primitive data types
// let number = [1,2,4,5];
// // // Add element in the end
// // number.push(9);
// // Add element in the begin
// // number.unshift(67);
// // Add element in the middle
// // number.splice(2,0,'a','b');
// console.log(number);
// // console.log(number.indexOf(90));
// // if(number.indexOf(4) != -1)
// //     console.log("Present");
// // else
// //     console.log("Not Present");
// console.log(number.includes(5));

// Reference Data type Insertion


// let courese = [
//     {no:1 , name:'love'},
//     {no:2, name:'mani'}
// ];
// // console.log(courese);

// // let cour = courese.find(function(cour){
// //     return cour.name == 'love';
// // })

// let cour = courese.find(cour => cour.name === 'love');
// console.log(cour);
//  Removing  element
// let numbers = [2,3,4,5,6,7];
// //Remove from the end
// // numbers.pop();
// // Remove from the begin
// // numbers.shift();
// // Remove from the middle
// numbers.splice(3,1);
// console.log(numbers);

// Emptying the array
// let numbers = [2,3,4,5,6,7];
// let number2 = numbers;
// // numbers = [];
// // numbers.length = 0;
// numbers.splice(0,numbers.length);
// console.log(numbers);
// console.log(number2);

// let first = [1,3,4];
// let second = [5,6,7];
// // combining
// let combined = first.concat(second);
// console.log(combined);
// // slicing
// let sliced = combined.slice(2,4);
// console.log(sliced);

// // Spread Operator
// let first = [1,2,3,4];
// let second = [5,6,7,8];
// let combined = [...first,'a',...second,'b'];
// console.log(combined);
// let another = [...combined];
// console.log(another);

// let arr = [10,20,30,40,50];
// for of loop
// for(let value of arr){
//     console.log(value);
// }

// for each loop
// arr.forEach(function(num){
//     console.log(num); 
// });

// arrow function
// arr.forEach(num => console.log(num));

// joining
// let arr = [10,20,30,40,50];
// const joined = arr.join(' , ');
// console.log(joined);

// split
// let msg = 'This is manojit this side';
// let parts = msg.split(' ');
// console.log(parts);
// let joined = parts.join('_');
// console.log(joined);

// Sorting
// let arr = [30,20,5,10,90,1];
// arr.sort();
// console.log(arr);
// arr.reverse();
// console.log(arr);

// Filtering
// let num = [1,3,-3,5,-2,-9];
// let filtered = num.filter(function(value){
//     return value <  0;
// });
// console.log(filtered);

// // Mapping
// let num = [7,8,9,10,11];
// let items = num.map(function(value){
//     return 'student_no '+value;
// });
// console.log(items);
// let item = num.map(value => 'student_no '+value);
// console.log(item); 

let number = [1,3,-6,-9];
let fili = number.filter(value => value >=0);
// let items = fili.map(function(num){
//     return {value:num};
// });
// console.log(items);
// let item = fili.map(num =>({value:num}));
// console.log(item);
// Chaining
let item = number.filter(value => value >=0).map(num =>({value:num}));
console.log(item);

