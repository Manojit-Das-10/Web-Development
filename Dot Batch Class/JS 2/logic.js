console.log("Lets start");

// Object create
let rectangle = {
    length: 1,
    breadth: 2,

    draw: function(){
        console.log('drawing rectangle');
    }
};

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
function Rectangle(len,bre){
    this.length = len;
    this.breadth = bre;
    this.draw = function(){
        console.log('this is a rectangle');
    }
}

// object creation using constructor functions
let rectangleObject = new Rectangle(4,6);
rectangleObject.color = 'Red';
console.log(rectangleObject);
delete rectangleObject.color;
console.log(rectangleObject);


// let rectangle2 = {
//     length: 2,
//     breadth: 3,

//     draw: function(){
//         console.log('drawing rectangle');
//     }
// };