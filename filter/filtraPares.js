function filtraPares(arr)  {
	return arr.filter(callback);
}

function callback(item) {
	return item % 2 === 0;
}

const meuArray = [1, 3, 55, 33, 26, 52]

console.log (filtraPares(meuArray));