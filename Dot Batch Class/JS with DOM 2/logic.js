
// document.addEventListener('click',function(){
//     console.log('I clicked the website');
// })

// function eventFunction(){
//     console.log('I have clicked on the document');
// }

// document.addEventListener('click',eventFunction);

// document.removeEventListener('click',eventFunction);

// let content =  document.querySelector('#para');

// content.addEventListener('click',function(event){
//     console.log(event);
// }) 

// let links = document.querySelectorAll('a');
// let thirdlink = links[1];
// thirdlink.addEventListener('click',function(event){
//     event.preventDefault();
//     console.log('Maja aa gaya');
// })

// let myDiv = document.createElement('div');

// function paraStatus(event){
//     console.log('Para'+ event.target.textContent);
// }
// myDiv.addEventListener('click',paraStatus);

// for(let i=0; i<=100; i++){
//     let newElement = document.createElement('p');
//     newElement.textContent = 'This is para ' + i;

//     myDiv.appendChild(newElement);
// }
// document.body.appendChild(myDiv);

let element = document.querySelector('#wrapper');

element.addEventListener('click',function(event){
    if(event.target.nodeName === 'SPAN'){
        console.log('You click on ' + event.target.textContent);
    }
})