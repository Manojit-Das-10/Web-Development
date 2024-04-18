// Adding 100 para

// const t1 = performance.now();
// for(let i=0; i<=100; i++)
// {
//     let newElement = document.createElement('p');
//     newElement.textContent = 'This is para ' + i;

//     document.body.appendChild(newElement);
// }
// const t2 = performance.now();
// console.log('This took ' + (t2-t1) + ' ms');


// // opmizinng a bit
// const t3 = performance.now();
// let myDiv = document.createElement('div');
// for(let i=0; i<=100;i++){
//     let element = document.createElement('p');
//     element.textContent = 'This is para ' + i;
//     myDiv.appendChild(element);
// }
// document.body.appendChild(myDiv);
// const t4 = performance.now();
// console.log('This took ' + (t4-t3) + ' ms');

const t1 = performance.now();
let fragment = document.createDocumentFragment();
for(let i=0; i<=100; i++){
    let newElement = document.createElement('p');
    newElement.textContent = 'This is para ' + i;

    fragment.appendChild(newElement);
}
document.body.appendChild(fragment); // 1 Reflow & 1 Repaint
const t2 = performance.now();
console.log('This took ' + (t2-t1) + ' ms');