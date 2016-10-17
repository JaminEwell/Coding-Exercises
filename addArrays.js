

var addTwo = function (array1, array2) {
  var arr1 = array1;
  var arr2 = array2;
  
  for (var i = 0;i < array1.length; i++){
    arr1[i] += arr2[i];
  }
  return arr1;
};

addTwo([1,2,3],[4,5,6]);




var assert = function(expected, actual, testName) {
  expected = JSON.stringify(expected);
  actual = JSON.stringify(actual);
  
  
  if(expected === actual) {
    console.log("passed!") ;
  } else {
    console.log("failed " + testName) ;
      }
  
  
};

assert([5,7,9], addTwo([1,2,3],[4,5,6]), "mytest");