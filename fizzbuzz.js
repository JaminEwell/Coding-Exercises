/*Write a script that logs to the console the numbers from 1 to 100.
Refactor the script to log “FIZZ” for multiples of 3.
Continue to refactor the script to log “BUZZ” for multiples of 5.
Refactor once more to log “FIZZBUZZ” for multiples of 3 and 5.*/


/* 
declare variable to store output of while loop
declare variable equal to limit 
Declare count variable
create loop that counts to the limit, starting from 1
if the number is divisible by 3, print fizz
if number is divisible by 5, print Buzz
if number is divisible by 3 and 5, print FizzBuzz
if it is not print the number.
*/
var limit = 100;
var count = 1;
var result;
while (count < limit){
  if((count % 3) === 0) {
    result = "Fizz";
  }
  else if ((count % 5) === 0) {
    result = "Buzz";
  }
    else {
    result = count;
  }
  console.log(result);
  count++;  
}