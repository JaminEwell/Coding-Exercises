/*
Line art program.
- draw a horizontal line of a specified length
- draw two parallel horizontal lines of the same length and some specified distance apart
*/
function drawHorizontalLine(length) {
  var str = '';
  for(var i = 0 ; i < length ; i++){
    str += '*';
  }
  return str;  
}

function drawVerticalLine(length) {
  
}

function drawTwoParallelHorizontalLines(length, distApart){ 
  var horizLine = drawHorizontalLine(length);
  var verticalSpacer = '';
  for(var i = 0 ; i < distApart ; i++){
    verticalSpacer += '\n';
  }
  return horizLine + verticalSpacer + horizLine;
}

function drawTwoParallelVerticalLines(length, distApart){ 
  
}

function drawBox(height, width) {
  // draw the top as a horizontal line
  // draw sides of box as a series of parallel vertical lines of length 1 and the correct distance apart to create one row of the side
  // draw the bottom as a horizontal line 
}