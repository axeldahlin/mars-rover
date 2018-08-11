const canvas = document.querySelector('#canvas');



const boardSide = window.innerHeight * 0.8;
const squareSide = boardSide / 10;
canvas.width = boardSide;
canvas.height = boardSide;
canvas.style.marginTop = (window.innerHeight * 0.1) + 'px';

var ctx = canvas.getContext('2d');





function drawBoard(squareSide) {
    const cols = 10;
    const rows = 10;
    for (let i = 0; i < cols; i++) {


        
        

        for (let j = 0; j < rows; j++) {
            let x = i * squareSide;
            let y = j * squareSide;
            
            cellColor = 'blue';

           


          




            ctx.beginPath();
            ctx.lineWidth = "4";
            ctx.strokeStyle = "black";
            ctx.fillStyle = cellColor;
            ctx.fillRect(x, y, squareSide, squareSide);
            ctx.rect(x, y, squareSide, squareSide);

            ctx.stroke();




        }
       

    }
    

}

drawBoard(squareSide);