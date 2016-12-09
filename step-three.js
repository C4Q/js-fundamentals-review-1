 //write a function to console log last value in array
function logLast(arr) {
		console.log(arr[arr.length-1])
}

logLast(['dog', 'cat', 'bat']); //logs 'bat'

// --------------------------------------------------------------------------------------

//write a function to console log numbers 0 - 10
function logTen() {
  for(i=0; i <= 10; i++) {
    console.log(i)
  }
}

logTen(); //logs numbers 0 - 10

// --------------------------------------------------------------------------------------

//write a function to console log values of an array
function logArr(arr) {
  for(i=0; i < arr.length; i++) {
    console.log(arr[i])
  }
}

logArr(['dog', 'cat', 'bat']); //logs 'dog', 'cat', 'bat'

// --------------------------------------------------------------------------------------

function logArrI(arr) {
  for(i=0; i < arr.length; i++) {
    console.log(i)
  }
}

logArrI(['dog', 'cat', 'bat']); //logs 0, 1, 2

// --------------------------------------------------------------------------------------

//write a function to sum numbers 0 - 10

function sumZeroToTen(num) {
  var sum = 0;
  for(i=0; i <= 10; i++) {
    sum += i
  }
  return sum
}

sumZeroToTen(); //55

// --------------------------------------------------------------------------------------

//write a function to sum an array
function sumArr(arr) {
  var sum = 0
  for(i=0; i < arr.length; i++) {
    sum += arr[i]
  }
  return sum
}

sumArr([1, 2, 3, 4, 5]); //15

// --------------------------------------------------------------------------------------

//write a function to sum i based on length of an array
function sumArrI(arr) {
  var sum = 0;
  for(var i = 0; i < arr.length; i++) {
    //Your code here:
    sum += i
  }
  return sum;
}

sumArrI([10, 20, 30, 40, 50]); //10
//(0 + 1 + 2 + 3 + 4, aka the i values)

// --------------------------------------------------------------------------------------

//if i is greater than the value in the array, log i, otherwise log the array val
function logValOrI(arr) {
  for(i=0; i < arr.length; i++) {
    if(i > arr[i]) {
      console.log(i)
    } else {
      console.log(arr[i])
    }
  }
}

logValOrI([10, 5, 3, 1, 0]); //logs: 10, 5, 3, 3, 4

// --------------------------------------------------------------------------------------

//write a function to log each value in an array, using forEach (do not use a for loop)
function forEachLog(arr) {
  arr.forEach(function(num) {
    console.log(num)
  })
}

forEachLog(['dog', 'cat', 'bat']); //logs 'dog', 'cat', 'bat'

// --------------------------------------------------------------------------------------

function forEachSum(arr) {
  var sum = 0;
  arr.forEach(function(num) {
    sum += num
  })
  return sum
}

forEachSum([1, 2, 3, 4, 5]); //15

