// 1.) ---------------------

//write down mistakes on front of flash cards (logging/writing down mistakes so you can start looking for patterns in mistakes)
//write a function to console log last value in array
function logLast(arr) {
  //Your code here:
  console.log(arr[2])
}

logLast(['dog', 'cat', 'bat']); //logs 'bat'

// 2.) ---------------------

//write a function to console log numbers 0 - 10
function logTen() {
  for (var i = 0; i <= 10; i++) {
    console.log(i);
  }
}

logTen(); //logs numbers 0 - 10

// 3.) ---------------------

//write a function to console log values of an array
function logArr(arr) {
  for (var i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

logArr(['dog', 'cat', 'bat']); //logs 'dog', 'cat', 'bat'


// 4.) ---------------------

function logArrI(arr) {
  for (var i = 0; i < arr.length; i++) {
    console.log(i);
  }
}

//LOGS OUT THE INDEX NUMBER FOR EACH ITERATION

logArrI(['dog', 'cat', 'bat']); //logs 0, 1, 2

// 5.) ---------------------

function sumZeroToTen(arr) {
  var sum = 0;
  for (var i = 0; i <= 10; i++) {
    sum += i;
  }
  return sum;
}
// ONCE IT ADDS A NUMBER, IT STORES THE ITERATION VALUE IN THE SUM. AND FOR EVERY NEXT
// ITERATION, IT ADDS THE PREVIOUS VALUE ALL THE WAY UP TILL 10 (0+1+2+3+4+5+6+7+8+9+10)
sumZeroToTen(); //55

// 6.) ---------------------

function sumArr(arr) {
  var sum = 0;
  for (var i = 0; i < arr.length; i++) {
    sum += arr[i]
  }
  return sum;
}

//IT IS ITERATING THROUGH THE ARRAY AND ADDING THE VALUE OF EVERY I (ARR[I]) TO SUM

sumArr([1, 2, 3, 4, 5]); //15

// 7.) ---------------------

function sumArrI(arr) {
  var sum = 0;
  for (var i = 0; i < arr.length; i++) {
    sum += i;
  }
  return sum;
}

//THIS IS TAKING INTO CONSIDERATION THE NUMBER OF INDICES IN THE ARRAY, NOT CONSIDERIN
// VALUES AT EACH INDEX, AND ITERATING THROUGH TO THE LENGTH OF THE ARRAY

sumArrI([10, 20, 30, 40, 50]); //10
//(0 + 1 + 2 + 3 + 4, aka the i values)

// 8.) ---------------------

function logValOrI(arr) {
  for (var i = 0; i < arr.length; i++) {
    if (i > arr[i]) {
      console.log(i);
    } else {
      console.log(arr[i]);
    }
  }
}

// ITERATING THROUGH THE ARRAY, AND COMPARING WHETHER THE INDEX IS GREATER THAN THE VALUE.
// IF THE INDEX IS GREATER THAN THE VALUE, WE PRINT THE INDEX 

logValOrI([10, 5, 3, 1, 0]); //logs: 10, 5, 3, 3, 4

// 9.) ---------------------

function forEachLog(arr) {
  arr.forEach(function(val) {
    console.log(val);
  })
}

// USES THE ADVANCED ARRAY METHOD OF FOREACH, AND CONSOLE.LOGS EVERY INDEX VALUE

forEachLog(['dog', 'cat', 'bat']); //logs 'dog', 'cat', 'bat'

// 10.) ---------------------

function forEachSum(arr) {
  var sum = 0;
  arr.forEach(function(val) {
    sum += val;
  })
  return sum;
}

// THIS LOOPS OVER EVERY INDEX AND BASICALLY TAKES THE VALUE OF EACH INDEX AND ADDS IT TO SUM//, WHICH IS 0.

forEachSum([1, 2, 3, 4, 5]); //15





















