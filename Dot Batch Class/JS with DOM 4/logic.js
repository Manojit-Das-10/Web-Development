
// let meraPromise1 = new Promise(function(resolve,reject){
//     setTimeout(() => {
//         console.log('I am inside promise 1');
//     }, 5000);
//     reject(new Error ('bhao error hu mai'))
//     // resolve(16266998);       
// })

// meraPromise1.then((value) => {console.log(value)});

// meraPromise1.catch((Error) => {console.log('Recieved an error')});

// // let meraPromise2 = new Promise(function(resolve,reject){
// //     setTimeout(() => {
// //         console.log('I am inside promise2');
// //         resolve(1998);       
// //         reject(new Error ('bhao error hu mai'))
// //     }, 3000);
// // })

// console.log('Pehla');

// Promise
// let wadda1 = new Promise(function(resolve,reject){
//     setTimeout(() => {
//         console.log('SetTimeOut1 Started');
//         resolve(true);
//     }, 1000);
// })

// let output = wadda1.then(() => {
//     let wadda2 = new Promise(function(resolve,reject){
//         setTimeout(() => {
//             console.log('SetTimOut2 Started');
//             resolve('wadda 2 resolved');
//         }, 10000);
//     })
//     return wadda2;
// })

// output.then((value) => console.log(value));

// Async await

// async function mano(){
//     return "Manojit";
// }
// console.log(mano());

// async function utility(){

// let delhiWeather = new Promise((resolve,reject) =>{
//     setTimeout(() =>{
//         resolve('Delhi is too hot');
//     },2000);
// })

// let goaWeather = new Promise((resolve,reject) =>{
//     setTimeout(() =>{
//         resolve('Goa is too cool');
//     },5000);
// });
// let dW = await delhiWeather;
// let gW = await goaWeather;

// return [dW,gW];
// }

// console.log(utility());

// let obj = {
//     heading:'head'
// };
// async function utility(){
//     let content = await fetch('https://jsonplaceholder.typicode.com/posts/1');
//     let output = await content.json();
//     console.log(output);
// }
// utility();

// async function healper(){

//     let options = {
//         method: 'POST',
//         body: JSON.stringify({
//             title: 'Manojit',
//             body: 'Coder',
//             userId: 77777,
//         }),
//         headers: {
//         'Content-type': 'application/json; charset=UTF-8',
//         },
//     };

//     let content = await fetch('https://jsonplaceholder.typicode.com/posts',options);
//     let response = content.json();
//     return response;
// }

// async function utility(){
//     let ans = await healper();
//     console.log(ans);
// }
// utility();

function init() {
    let name = "Manojit Das"; // name is a local variable created by init
    function displayName() {
        console.log(name); // use variable declared in the parent function
    }
    return displayName;
}
let a = init();
a();


function makeFunc() {
    const name = "Mozilla";
    function displayName() {
      console.log(name);
    }
    return displayName;
  }
  
  const myFunc = makeFunc();
  myFunc();
  