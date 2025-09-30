const container = document.querySelector('.container');
const gridButton = document.createElement('button');
const big = document.querySelector('.big');

gridButton.textContent = "Change Number of Grid";
big.insertBefore(gridButton, big.children[1]);

gridButton.addEventListener('click', () =>{
    const size = parseInt(prompt("Choose grid size (1-64):"));
    if (isNaN(size) || size <1 || size > 64){
        alert("Please enter valid grid size");
    }
    createGrid(size);
});

createGrid(16);
function createGrid(size){
    container.innerHTML = "";
    const squareSize = 700/size;

    for (let i = 0; i < size * size; i++){
    const square = document.createElement('div');
    square.classList.add("square");
    square.style.width = `${squareSize}px`;
    square.style.height = `${squareSize}px`;

    square.addEventListener('mouseenter', ()=>{
        square.classList.add("hovered");
    });
    container.appendChild(square);
}
}