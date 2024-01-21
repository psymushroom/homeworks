// перший спосіб

function drawTriangle(height, symbol) {
   let i = 1;

    while (i <= height) {
        let row = '';
        let j = 1;

        while (j <= i) {
            row += symbol;
            j++;
        }

        console.log(row);
        i++;
    }
}

drawTriangle(5, "*");




// другий спосіб

function drawTriangle(height, symbol) {
for (var i = 1; i <= height; i++) {
	let row = '';
	
	for (var j = 1; j <= i; j++){
	row += symbol;
}
	console.log(row);
	}
}

drawTriangle(5, "*");
