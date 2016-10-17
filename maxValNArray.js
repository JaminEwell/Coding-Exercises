//find max value in an array


var findMaxValue = function(array) {
return Math.max.apply( Math, array);
};

findMaxValue([3,4,5]);



var assert = function(expected, actual, testName) {
	// expected = JSON.stringify(expected);
	// actual = JSON.stringify(actual);
	
	
	if (expected === actual) {
		console.log("passed!");
	}  else { 
		console.log("failed" + testName);
	}
};

assert(5, findMaxValue([3,4,5]), 'MyTest!');
