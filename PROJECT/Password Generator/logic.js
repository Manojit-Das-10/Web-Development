const inputSlider = document.querySelector("[data-lengthSlider]");
const lengthDisplay = document.querySelector("[data-lengthNumber]");
const passwordDisplay = document.querySelector("[data-passwordDisplay]");
const copyBtn = document.querySelector("[data-copy]");
const copyMsg = document.querySelector("[data-copyMsg]");
const uppercaseCheck = document.querySelector("#uppercase");
const lowercaseCheck = document.querySelector("#lowercase");
const numbersCheck = document.querySelector("#numbers");
const symbolsCheck = document.querySelector("#symbols");
const indicator = document.querySelector("[data-indicator]");
const generateBtn = document.querySelector(".generateButton");
const allCheckBox = document.querySelectorAll("input[type=checkbox]");
const symbols = '~`!@#$%^&*()_-+={[}]|:;"<,>.?/';

let password = "";
let passwordLength = 10;
let checkCount = 1;
handleSlier();
// strength color gray by default

// Set passwordLength
function handleSlier(){
    inputSlider.value = passwordLength;
    lengthDisplay.innerText = passwordLength;
}

// Indicator
function setindicator(color){
    indicator.style.backgroundcolor = color;
    // shadow
    indicator.style.boxShadow = `0px 0px 12px 1px ${color}`;
}

// Random Integer
function getRndInterger(){
    Math.floor(Math.random() * (max-min)) + min;
}

function generateRandomNumber(){
    return getRndInterger(0,9);
}

function generateLowerCase(){
   return String.fromCharCode(getRndInterger(97,123));
}

function generateUpperCase(){
    return String.fromCharCode(getRndInterger(65,91));
}

function generateSymbol(){
    const randNum = getRndInterger(0,symbols.length());
    return symbols.charAt(randNum);
}

// Checkbox
function calcStrength(){
    let hasUpper = false;
    let hasLower = false;
    let hasNum = false;
    let hasSym = false;
    if (uppercaseCheck.checked) hasUpper = true;
    if (lowercaseCheck.checked) hasLower = true;
    if (numbersCheck.checked) hasNum = true;
    if (symbolsCheck.checked) hasSym = true;
  
    if (hasUpper && hasLower && (hasNum || hasSym) && passwordLength >= 8) {
      setIndicator("#0f0");
    } 
    else if (
      (hasLower || hasUpper) &&
      (hasNum || hasSym) &&
      passwordLength >= 6) {
      setIndicator("#ff0");
    } 
    else {
      setIndicator("#f00");
    }

}

function copyContent(){
    
}