var drawTriangle = function(){

   for(var i = 1; i < 2; i++)
   {
     for(var j = 0; j < i; j++)
      {
      var a =	console.log ("#");
      var b =	console.log ("##");
      var c =	console.log ("###");
      var d =	console.log ("####");
      var e =	console.log ("#####");
      var f =	console.log ("######");
      var g =	console.log ("#######");
      
      var resultTri = (a + b + c + d + e + f + g);	
      return resultTri;	
      }
      
    }  	
    
};

drawTriangle();



var assert = function(expected, actual, testName) {
	if(expected === actual) {
		console.log("passed!");
	} else {
		console.log("failed" + testName);
	}
};

//assert(true, drawTriangle(), "myTest");
