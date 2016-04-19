var result = "";

for (var counter = 1; counter < 1001; counter++) {
	if (counter % 3 === 0) {
		result += "Fizz";
	}
	if (counter % 5 === 0) {
		result += "Buzz";
	} 
	if (result === "") {
		result = counter;
	}
	console.log(result);
	result = "";
}