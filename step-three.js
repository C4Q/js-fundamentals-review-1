//**** i changed the name of some of the functions bc i am lazy (theyre marked w an asterisk)**

//write a function to console log last value in array
function logLast (arr) {
  for(var i = 0; i <arr.length; i++) {
    console.log(arr.length - 1)
  }
}
logLast(['dog', 'cat', 'bat']); //logs 'bat'

//write a function to console log numbers 0 - 10
function logTen () {
  for(var i = 0; i <= 10; i++) {
    console.log(i)
  }
}
logTen(); //logs numbers 0 - 10

//write a function to console log values of an array
function logArr(arr) {
  for(var i = 0; i < arr.length; i++) {
    console.log(arr[i])
  }
}
logArr(['dog', 'cat', 'bat']); //logs 'dog', 'cat', 'bat'

//write a function to console log i based on length of array
//***
function logI (arr) {
  for(var i = 0; i < arr.length; i++) {
    console.log(i)
  }
}
logArrI(['dog', 'cat', 'bat']); //logs 0, 1, 2

//write a function to sum numbers 0 - 10
//***
function sumZtoT () {
  var sum = 0
  for(var i = 0; i <= 10; i++) {
    sum += i
  }
  console.log(sum)
}
sumZeroToTen(); //55

//write a function to sum an array
function sumArr(arr) {
  var sum;
  for(var i = 0; i < arr.length; i++) {
    sum += arr[i]
  }
  console.log(sum)
}
sumArr([1, 2, 3, 4, 5]); //15

//write a function to sum i based on length of an array
//***
function sumI (arr) {
  var sum;
  for(var i = 0; i < arr.length; i++) {
    sum += i
  }
  console.log(sum)
}
sumArrI([10, 20, 30, 40, 50]); //10

//if i is greater than the value in the array, log i, otherwise log the array val
function logValOrI (arr){
  for(var i = 0; i < arr.length; i++) {
    if (i <= arr[i]) {
      console.log(i)
    } else {
      console.log(var[i])
    }
  }
}
logValOrI([10, 5, 3, 1, 0]); //logs: 10, 5, 3, 3, 4

//write a function to log each value in an array, using forEach (do not use a for loop)
function forEachLog(arr) {
  arr.forEach(function(val) {
    console.log(val)
  }
}
forEachLog(['dog', 'cat', 'bat']); //logs 'dog', 'cat', 'bat'

//write a function to sum each value in an array, using forEach (do not use a for loop)
function forEachSum(arr) {
  var sum = 0;
  arr.forEach(function(val) {
    sum += val;
  })
  return sum
}
forEachSum([1, 2, 3, 4, 5]); //15
