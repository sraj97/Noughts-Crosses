let xMoves = [];
let oMoves = [];
let userClick = 0;

let reset = document.querySelector(".reset");

const cells = document.querySelectorAll(".cell");
const winningCombination = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]


for (let i = 0; i < cells.length; i++) {
    cells[i].addEventListener("click", (event) => {
        if (userClick % 2 === 0){
            event.target.classList.add("xMove")
            xMoves.push(i)
        } else {
            event.target.classList.add("oMove");
            oMoves.push(i);
        }
        userClick ++;
        winner(winningCombination, xMoves)
        winner(winningCombination, oMoves)

        if (userClick === 9){
            setTimeout(function(){
                alert("It's a draw")
                }, 250);
            setTimeout(function(){
                location.reload();
                }, 250);
        }
    });
    
}

function winner(winningCombination, movesArray){
    for (let i = 0; i < winningCombination.length; i++) {
      let count = 0
      for (let j = 0; j < winningCombination[i].length; j++) { 
        if (movesArray.includes(winningCombination[i][j])){
          count++
            if(count === 3){
            setTimeout(function(){
                alert("You Win!");
                }, 250); 
            setTimeout(function(){
                location.reload();
                }, 250); 
            return true;  
            }      
        }
      }

    }
}



const resetFunction = () => {
    reset.addEventListener("click", () => {
        location.reload();
    })
}

resetClick = resetFunction();


