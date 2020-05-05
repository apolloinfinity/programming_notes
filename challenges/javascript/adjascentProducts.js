const inputArray = [ 3, 6, -2, -5, 7, 3 ];
const arr = [ -23, 4, -3, 8, -12 ];

function adjacentElementsProduct(inputArray) {
	if (inputArray.length === 1) {
		return 0;
	}
	let max = inputArray[0] * inputArray[1];
	for (let i = 0; i < inputArray.length; i++) {
		let m = inputArray[i] * inputArray[i + 1];
		if (m > max) {
			max = m;
		}
	}
	return max;
}

/* 

*/
console.log(adjacentElementsProduct(inputArray));
console.log(adjacentElementsProduct(arr));
