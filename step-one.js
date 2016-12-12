//write a function to console log last value in array
function logLast(arr) {
  console.log(arr[arr.length - 1]);
}
logLast(['dog', 'cat', 'bat']); //logs 'bat'

//Nyapals function
//write a function logLast that takes in an array an returns the last value of the array
function logLast(arr) {
  //using console.log() to print out the array, using arr.length to go to the end of the function
  // & '-1' bc the arr starts counting at 0 but .length starts counting at 1
  console.log(arr[arr.length - 1])
  //last step call function
}
//******************************************************************************
//write a function to console log numbers 0 - 10
function logTen() {
  for (var i = 0; i <= 10; i++) {
    console.log(i);
  }
}
logTen(); //logs numbers 0 - 10

//Nyapals function
//write a function log ten that logs numbers 0 - 10
function logTen() {
  //using a for loop to go through each number between 0 and 10 in increments of 1
  for (var i = 0; i <= 10; i++) {
    //console.log(i) bc as the loop goes up each number will be assigned to i
  }
}
//******************************************************************************
//write a function to console log values of an array
function logArr(arr) {
  for (var i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}
logArr(['dog', 'cat', 'bat']); //logs 'dog', 'cat', 'bat'

//Nyapals function
//write a function logArr that takes in an array and returns every value in the arr
function logArr(arr) {
  //for loop to go thru each element in the arr in incerements of 1
  for(var i = 0; i < arr.length; i ++)
  //console.log(i) bc as the loop goes up each element will be assigned to i
}
//******************************************************************************
//write a function to console log i based on length of array
function logArrI(arr) {
  for (var i = 0; i < arr.length; i++) {
    console.log(i);
  }
}
logArrI(['dog', 'cat', 'bat']); //logs 0, 1, 2

//Nyapals function
//write a function logArrI that takes in an arr & logs the position of the element in an array
function logArrI(arr) {
  //using a for loop to loop thru the arr & find the position of each element in the array
  for (var i = 0; i < arr.length; i++) {
  // console.log(i) bc as the loop goes thru each element will be assigned to i
  }
  //call your function!
}
//******************************************************************************
//write a function to sum numbers 0 - 10
function sumZeroToTen(arr) {
  var sum = 0;
  for (var i = 0; i <= 10; i++) {
    sum += i;
  }
  return sum;
}
sumZeroToTen(); //55

//Nyapals function
//write a function sumZtoT that returns the sum of the numbers 0 - 10
function sumZtoT () {
  //create a var sum that equals 0 that we will use later on
  var sum = 0
  //using a for loop to loop thru the numbers 0 - 10 in increments of 1
  for(var i = 0; i <= 10; i++) {
    //stop the loop at 10 bc we only care about 0 - 10
    //using += bc as i goes thru the loop it will save and add
  }
  //return sum
  return sum
}
//call function
//******************************************************************************
//write a function to sum an array
function sumArr(arr) {
  var sum = 0;
  for (var i = 0; i < arr.length; i++) {
    sum += 0;
  }
  return sum;
}
sumArr([1, 2, 3, 4, 5]); //15

//Nyapals function
//write a function that takes in an array and & returns the sum of the array
function sumArr(arr) {
  //create a var that we will be using later
  var sum = 0
  //use a for loop to go thru the arr in increments of 1
  for (var i = 0; i < arr.length; i ++) {
    //add sum to each element of the arr and save it so +=
    sum += 1
  }
  //return sum
  return sum
}
//call your function
//******************************************************************************
//write a function to sum i based on length of an array
function sumArrI(arr) {
  var sum = 0;
  for (var i = 0; i < arr.length; i++) {
    sum += i;
  }
  return sum;
}
sumArrI([10, 20, 30, 40, 50]); //10

//Nyapals function
//write a function that takes an arr adds up the number of elements in the array
function sumArrI(arr) {
  //create a var that will be used later
  var sum = 0;
  //use a for loop to go thru the arr and count how long it is
  for (var i = 0; i < arr.length; i++) {
  //using sum += i because we want to save the count as we go up & were counting the length of the arr not that actual numbers in the arr
    sum += i
  }
  //return sum
  return sum
}
//call your function
//******************************************************************************
//(0 + 1 + 2 + 3 + 4, aka the i values)

//if i is greater than the value in the array, log i, otherwise log the array val
function logValOrI(arr) {
  for (var i = 0; i < arr.length; i++) {
    if (i > arr[i]) {
      console.log(i);
    } else {
      console.log(arr[i]);
    }
  }
}

logValOrI([10, 5, 3, 1, 0]); //logs: 10, 5, 3, 3, 4

//Nyapals function
//write a function that takes an arr and returns the larger number between the position of the arr & the num in the array

function logVorI (arr) {
  //use a for loop to go thru the arr & see the position of the element & the number itself
  for(var i = 0; i < arr.length; i++) {
    //use an if else statement to see what number is larger
    if (i > arr[i]) {
        console.log(i)
      // using arr[i] to bracket into arr & see the num at that position
    } else {
      console.log(arr[i])
    }
  }
  //close ya brackets n stuff, you good homes
}
//******************************************************************************
//write a function to log each value in an array, using forEach (do not use a for loop)
function forEachLog(arr) {
  arr.forEach(function(val) {
    console.log(val);
  })
}

forEachLog(['dog', 'cat', 'bat']); //logs 'dog', 'cat', 'bat'

//Nyapals function
//write a function that takes an arr & logs each element in an array using for each
function forEach(arr) {
  //using the for each function
  arr.forEach(function(val) {
    //console.log bc we are print not returning
    console.log(val)
  })
}
//******************************************************************************
//write a function to sum each value in an array, using forEach (do not use a for loop)
function forEachSum(arr) {
  var sum = 0;
  arr.forEach(function(val) {
    sum += val;
  })
  return sum;
}
forEachSum([1, 2, 3, 4, 5]); //15

//Nyapals function
//write a function that takes an arr & returns the sum of the arr using for each ;/
function forEach(arr) {
  //create a var that we will be using later
  var sum = 0;
  //use foreach :)
  arr.forEach(function(val) {
    //use sum += val bc we want to save the sum & whist we go thru & continue to
    //add, go thru the loop
    sum += val
  })
  //call ya function outside of the loop
  return sum
}
//examples n stuff! 
