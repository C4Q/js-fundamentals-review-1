//3 steps: first copy, then take away pieces, then try to do whole thing from memory
//while doing first copy add comments for what everthing does

//following week, code from scatch again

//write down mistakes on front of flash cards (logging/writing down mistakes so you can start looking for patterns in mistakes)
//write a function to console log last value in array
function logLast(arr) {
  //Your code here:
  console.log(arr.length - 1)
}

logLast(['dog', 'cat', 'bat']); //logs 'bat'


//write a function to console log numbers 0 - 10
function logTen() {
  for(var i = 0; i <= 10; i++) {
    //Your code here:
    console.log(i)
  }
}

logTen(); //logs numbers 0 - 10

//write a function to console log values of an array
function logArr(arr) {
  for(var i = 0; i < arr.length; i++) {
    //Your code here:
    console.log(arr[i])
  }
}

logArr(['dog', 'cat', 'bat']); //logs 'dog', 'cat', 'bat'

//write a function to console log i based on length of array
function logArrI(arr) {
  for(var i = 0; i < arr.length; i++) {
    //Your code here:
    console.log(i)
  }
}

logArrI(['dog', 'cat', 'bat']); //logs 0, 1, 2

//write a function to sum numbers 0 - 10
function sumZeroToTen(arr) {
  var sum = 0;
  for(var i = 0; i <= 10; i++) {
    //Your code here:
    sum += i
  }
  return sum;
}

sumZeroToTen(); //55

//write a function to sum an array
function sumArr(arr) {
  var sum = 0;
  for(var i = 0; i < arr.length; i++) {
    //Your code here:
    sum += arr[i]
  }
  return sum;
}

sumArr([1, 2, 3, 4, 5]); //15

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

//if i is greater than the value in the array, log i, otherwise log the array val
function logValOrI(arr) {
  for(var i = 0; i < arr.length; i++) {
    //Your code here:
    if(i <= arr[i]) {
      console.log(i)
    } else {
      console.log(arr[i])
    }
  }
}

logValOrI([10, 5, 3, 1, 0]); //logs: 10, 5, 3, 3, 4

//write a function to log each value in an array, using forEach (do not use a for loop)
function forEachLog(arr) {
  arr.forEach(function(val) {
    //Your code here:
    console.log(val)
  })
}

forEachLog(['dog', 'cat', 'bat']); //logs 'dog', 'cat', 'bat'

//write a function to sum each value in an array, using forEach (do not use a for loop)
function forEachSum(arr) {
  var sum = 0;
  arr.forEach(function(val) {
   //Your code here:
   sum += val
  })
  return sum;
}

forEachSum([1, 2, 3, 4, 5]); //15
