console.log("Lets start");

// Object create
// let rectangle = {
//     length: 1,
//     breadth: 2,

//     draw: function(){
//         console.log('drawing rectangle');
//     }
// };

// Factory function
// function createRectangle(length,breadth){
//     return rectangle = {
//         length,
//         breadth,

//         draw: function(){
//             console.log('drawing rectangle');
//         }
//     };
// }

// let rectangle1 = createRectangle(5,4);

// camelcase - numberOfStudent
// constructor funtion -> pascal notation --> "first letter is capital" ex: NumberOfStudent
// constructor funtion -> prop/methods --> intialize/define
// function Rectangle(len,bre){
//     this.length = len;
//     this.breadth = bre;
//     this.draw = function(){
//         console.log('this is a rectangle');
//     }
// }



// object creation using constructor functions
// let rectangleObject = new Rectangle(4,6);
// rectangleObject.color = 'Red';
// console.log(rectangleObject);
// delete rectangleObject.color;
// console.log(rectangleObject);


// let Rect = new Function('len','bre',
//     `this.length = len;
//      this.breadth = bre;
//      this.draw = function(){
//      console.log('this is a rectangle');
//      }`
// )


// let rectangle2 = {
//     length: 2,
//     breadth: 3,

//     draw: function(){
//         console.log('drawing rectangle');
//     }
// };

// primitive types
// let a = 10;
// let b = a;
// console.log('Before increment a is '+a);
// console.log('Before increment b is '+b);
// a++;
// console.log('After increment a is '+a);
// console.log('After increment b is '+b);

// Reference types
// let a = {value:10};
// let b = a;
// console.log('Before increment a is '+a.value);
// console.log('Before increment b is '+b.value);
// a.value ++;
// console.log('Before increment a is '+a.value);
// console.log('Before increment b is '+b.value);

// pass by value concept
// let a = 10;
// function inc(a){
//     a++;
//  }
// inc(a);
// console.log(a);

// pass by reference concept
// let a = {value:10};
// function inc(a){
//     a.value++;
//  }
// inc(a);
// console.log(a.value);


let rectangle = {
    length:2,
    breadth:4
};
// for in loop
// for(let key in rectangle)
// {
//     // console.log(key);
//     console.log(key,rectangle[key]);
// }

// for of loop
// for(let key of Object.entries(rectangle))
// {
//     console.log(key);
// }

// if('color' in rectangle){
//     console.log('Present');
// }
// else{
//     console.log('Absent');
// }

// Object Cloning
let src = {
    a:10,
    b:20,
    c:30
};
// let dest = {};
// // Iterative cloning
// // for(let key in src){
// //     dest[key] = src[key];
// // }

// // Assign cloning
// let src2 = {value:34};
// let dest = Object.assign({},src,src2);

// spread Cloning
let dest = {... src};

console.log(dest);
src.a++; 
console.log(dest);
