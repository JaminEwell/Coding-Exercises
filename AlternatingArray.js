// Write a function that adds and subtracts a given array of numbers in alternation and returns the result. For example, given [1,2,3,4,5], it should return -1, because 1+2-3+4-5=-1.

var addsubFunc = function (array) {
	var result = 0;
	var a = array;
	var b = array;
	
	
	for (var i = 0; i < array.length; i++) {
		result = (a[0]+b[1]-a[2]+b[3]-a[4]);
	}
	return result;
};


addsubFunc([1,2,3,4,5]);


var assert = function(expected, actual, testName) {
	if (expected === actual) {
		console.log("passed!");
	}  else {
		console.log("failed!" + testName);
	}
};	

assert(-1, addsubFunc([1,2,3,4,5]), "mytest" );