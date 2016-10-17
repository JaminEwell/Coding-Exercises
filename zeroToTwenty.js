//Write a function called generateZeroToTwenty that returns an array of integers from 0 to 20, inclusive.


var generateZeroToTwenty = function (){
	var retVal = [];
	for ( var i = 0; i <= 20; i++){
		retVal.push(i);
	}
	return retVal;	
}
generateZeroToTwenty();


var assertArraysEqual = function(expected, actual, testName) {
  var areEqual = true;
  if (expected.length !== actual.length) {
    areEqual =  false;
  }
  //why a for loop here..not understand what this test
  // TIM: oh right, yeah so this is that thing we were talkig about earlier where in order to compare two arrays, you need to compare their -contents-.
  // the analogy we were using was that of 2 boxes - 
  // like, you can't say that two boxes are the same, because the can contain anything at all
  // but if the CONTENTS of the two boxes are the same,
  // then functionally/practically speaking we can say that they are effectively the same
  // that's what we are doing here
  // we are comparing the contents of each box
  // where "box" means, of course, an "array"
  for (var i=0; i<expected.length; i++) {
	if (expected[i] !== actual[i]) {
      areEqual = false;
    }
  }

  if (areEqual) {
    console.log("Passed");
  }
  else {
    console.log("Failed!!! " + testName + " Expected: " + expected + " but got: " + actual);
  }
}

assertArraysEqual(generateZeroToTwenty(),[0, 1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20], "twentyConsecutiveIntegers");
