const boxes = document.querySelectorAll(".box");
const gameInfo = document.querySelector(".game-info");
const newGameBtn = document.querySelector(".btn");

let currentPlayer;
let gameGrid;

const winningPositons = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

// Lets create a function to initialize the game

function initGame(){
    currentPlayer = "X";
    gameGrid = ["","","","","","","","",""];
    // UI empty bhi karna bhi padega
    boxes.forEach((box,index) =>{
        box.innerText = "";
        boxes[index].style.pointerEvents = "all"; 
        // One more thing is , initialize box with css properties agian
        box.classList = `box box${index+1}`;

    });
    newGameBtn.classList.remove(".active");
    gameInfo.innerText = `Current Player - ${currentPlayer}`;
}

initGame();

// Turn Swap Function
function swapTurn(){
    if(currentPlayer === "X"){
        currentPlayer = "O";
    }
    else{
        currentPlayer = "X";
    }
    // UI update
    gameInfo.innerText = `Current Player - ${currentPlayer}`;
}

// Game Over Check function
function checkGameOver(){
    // Too do
    let answer = "";

    winningPositons.forEach((position) =>{
        // All 3 boxex should be non empty and exactly same in value
        if( (gameGrid[position[0]] !== "" || gameGrid[position[1]] !== "" || gameGrid[position[0]] !== "")
            && (gameGrid[position[0]] === gameGrid[position[1]]) && (gameGrid[position[1]] === gameGrid[position[2]])){

                // Check winner is X
                if(gameGrid[position[0]] === "X"){
                    answer = "X";
                }
                else{
                    answer = "O";
                }

                // Disable pointer event
                boxes.forEach((box) =>{
                    box.style.pointerEvents = "none";
                })

                // Now we know X/O is a winner
                boxes[position[0]].classList.add("win");
                boxes[position[1]].classList.add("win");
                boxes[position[2]].classList.add("win");
        }
    });

    // It means we have a winner
    if(answer !== ""){
        gameInfo.innerText = `Winner Player - ${answer}`;
        newGameBtn.classList.add("active");
        return;
    }

    // When there is tied
    let fillCount = 0;
    gameGrid.forEach((box) =>{
        if(box !== ""){
            fillCount++;
        }
    })

    if(fillCount === 9){
        gameInfo.innerText = "Game Tied !";
        newGameBtn.classList.add("active");
    }

}

function handleClick(index){
    if(gameGrid[index] === ""){
        boxes[index].innerHTML = currentPlayer;
        gameGrid[index] = currentPlayer;
        boxes[index].style.pointerEvents = "none";
        // Swap the turn
        swapTurn();
        // checking of anyone win
        checkGameOver();
    }
}

boxes.forEach((box, index) =>{
    box.addEventListener("click",() =>{
        handleClick(index);
    })
})

newGameBtn.addEventListener("click",initGame)