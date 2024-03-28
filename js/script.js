//COLONNE E RIGHE 
var rows = 3;
var columns = 3;


//VARIABILI COUNTER E BOARD
const increaseBtn = document.getElementById("increaseBtn");
const decreaseBtn = document.getElementById("decreaseBtn");
const counterLabel = document.getElementById("counterLabel");
//CREATO UN ARRAY DEL BOARD
const board = document.getElementById("board");
const childDivs = Array.from(board.children);
console.log(childDivs);

//COUNTER
let count = 0;
//FUNC.PER NASCONDERE SING.DIV
function hideElements(arr) {
    arr.forEach(element => {
        element.style.display = 'none';
    });
}

hideElements(childDivs);

//INCREASE FUNCTION / SHOW ELEMENTS
function showElement(){
    if(count > childDivs.lenght){
        return
    }
    else{
        childDivs[count].style.display = 'block';
        count++;
       
    }
    counterLabel.textContent = count;
}
document.getElementById('increaseBtn').addEventListener('click', showElement);


//DECREASE FUNCTION / HIDE PREVIOUS ELEMENTS 
function hidePreviousElement() {
    if (count <= 0) {
        return;
    } else {
        count--;
        childDivs[count].style.display = 'none';
    }
    counterLabel.textContent = count;
}

document.getElementById('decreaseBtn').addEventListener('click', hidePreviousElement);




