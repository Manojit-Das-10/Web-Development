let countValue = document.querySelector('#Counter');

let increment = () =>{
    // get the value form UI
    let value = parseInt(countValue.innerText);
    value = value + 1;
    // Set the value onto UI
    countValue.innerText = value;
}

let decrement = () =>{
    // get the value form UI
    let value = parseInt(countValue.innerText);
    value = value - 1;
    // Set the value onto UI
    countValue.innerText = value;
}