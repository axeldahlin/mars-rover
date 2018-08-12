const canvas = document.querySelector('#canvas');
const boardSide = window.innerHeight * 0.6;
const squareSide = boardSide / 10;

canvas.width = boardSide;
canvas.height = boardSide;
canvas.style.marginTop = (window.innerHeight * 0.1) + 'px';

const ctx = canvas.getContext('2d');

function drawBoard() {
	const cols = 10;
	const rows = 10;
	for (let i = 0; i < cols; i++) {
		for (let j = 0; j < rows; j++) {
			let x = i * squareSide;
			let y = j * squareSide;
			cellColor = '#8C1818';

			if (map[j][i] === 'X') cellColor = '#4C0D0D';
	
			if (map[j][i] === 'O') cellColor = '#7F7466';

			if (map[j][i] === 'C') cellColor = '#C2B1A4';

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