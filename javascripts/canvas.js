const canvas = document.querySelector('#canvas');



const boardSide = window.innerHeight * 0.8;
const squareSide = boardSide / 10;
canvas.width = boardSide;
canvas.height = boardSide;
canvas.style.marginTop = (window.innerHeight * 0.1) + 'px';

var ctx = canvas.getContext('2d');





function drawBoard(squareSide) {
    let i = 0;
    let j = 0;
    for (let x = 0; x <= boardSide; x += squareSide) {

        
        for (let y = 0; y <= boardSide; y += squareSide) {



            let cellColor = '#df9f71';

            if (i === rover.x && j === rover.y) {
                cellColor = 'red';

            }
            

            ctx.beginPath();
            ctx.lineWidth="4";
            ctx.strokeStyle="black";
            ctx.fillStyle= cellColor;
            ctx.fillRect(x, y, squareSide, squareSide);
            ctx.rect(x, y, squareSide, squareSide);
            
            ctx.stroke();

         

            i++;
        }
        //j++
    }
    
}

drawBoard(squareSide);