var averageNum = function(array) { 
	var arr1 = 0;
	for(var i = 0; i < array.length; i++) {
		arr1 += array[i];
	}
	var arrAverage = arr1 / array.length;
	return arrAverage;
};

averageNum([5,6,7,5,7]);


var assert = function(expected, actual, testName) {
	if (expected === actual) {
		console.log("passed!!");
	}  else  {
		console.log("failed!!" + testName);
	}
};

assert(6, averageNum([5,6,7,5,7]), "myTest");