
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

let wadda1 = new Promise(function(resolve,reject){
    setTimeout(() => {
        console.log('SetTimeOut1 Started');
    }, 5000);
    resolve(true);
})

let output = wadda1.then(() => {
    let wadda2 = new Promise(function(resolve,reject){
        setTimeout(() => {
            console.log('SetTimOut2 Started');
        }, 3000);
        resolve('wadda 2 resolved');
    })
    return wadda2;
})

output.then((value) => console.log(value));