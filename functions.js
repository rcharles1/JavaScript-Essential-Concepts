//Pure function
function incr(num, pad) { 
	return num + pad;
} 

//Pure function
function decr(num, pad) { 
	return num - pad;
}

//High order function
function smartOperation(data, operation, pad) { 
	pad = isNaN(pad) ? 0 : pad; 
	let result = []; 
	for (const elem of data) { 
		result.push(operation(elem, pad)); 
	} 
	return result;
}

const data = [12, 3, 50];
const result = smartOperation(data, incr, 3);
console.log(result);