var sumAlternateArray = function (array) {
	var result = array[0];
	

	for (var i = 1; i < array.length; i++) {
		
		//if index is even then subtract array index
     	if ( array[i] % 2 === 0){
		    result += array[i];   
		    //if index is odd then add array index
	    }  if (array[i] % 2 === 1) {
	          	  result -= array[i];
           }
	}
	
	return result;
};


sumAlternateArray([1,2,3,4,5]);   //logs -1