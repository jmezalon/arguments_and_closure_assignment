// # Exercises


// just uncomment each console.log() to see if my solutions are correct!


// 1. Create two functions: `double` and `square`.
// `double` should take a number and return the number times two.

const double = (num) => {
 return num * 2
}

// `square` should take a number and return the number squared.

const square = (num) => {
 return num * num
}
//  * Create a third function `doubleSquare` that uses both of the functions to return a number that is first doubled and then squared.

// the long way of solving it

// const double = (num) => {
//   return num * 2
// }
// const square = (num) => {
//   return num * num
// }

const doubleSquare = (num) => {
  let x = 0
  x += double(num);
  return square(x);
}

// console.log(doubleSquare(3));
//
//
// 2. Create a function `classyGreeting` that takes as input the strings `firstName`  and `lastName`,
// and returns a string with a greeting using the two.

const classyGreeting = (firstName, lastName) => {
  return ("hello my name is " + firstName + " " + lastName)
}
//console.log(classyGreeting("Max", "Mezalon"))

// with Carolina's help using backtics to make it shorter and more concise

const classyGreet = (firstName, lastName) => {
  return (`you could also call me ${lastName}, ${firstName} `)
}
// console.log(classyGreet("Max", "Mezalon"))

//   * Create a second function `yell`  that takes string as input and returns the string in all capitalized letters.
function yell (str) {
  return str.toUpperCase()
}
//console.log(yell("johny"));

//   * Create a third function  `yellGreeting`  that will take the `firstName`  and `lastName`  as inputs and yell a greeting using the two.
function yellGreeting (firstName, lastName) {
  return (classyGreeting(firstName, lastName).toUpperCase());
}
// console.log(yellGreeting("Jean Max", "Mezalon"));

// 3. The [concat](https://www.w3schools.com/jsreF/jsref_concat_array.asp) array method is used to merge two (or more) arrays.
// Write a `removeDupes` function that takes an array as an argument and returns a copy without any duplicate elements.

const removeDupes = (arr) => {
  let answer = [];

  for (let i = 0; i < arr.length; i++) {
    if (!answer.includes(arr[i])) {
      answer.push(arr[i])
    }
  }

  return answer;
}
// console.log(removeDupes([1,1,2,3,3,4,5]));

// Then, write a function `concatAndRemoveDupes`  that combines two arrays and removes any duplicates.

//   _Hint:_ Use the array method `includes`, an object, or a Set. Or the spread operator instead of concat.

function concatAndRemoveDupes (arr1, arr2) {
  let arr3 = [...arr1, ...arr2]
  return removeDupes(arr3);
}
//console.log(concatAndRemoveDupes([1,2,2,4,5], [0,1,2,2,3]))


// 4. Given a list of grades, we can get the median grade by sorting the list and taking the middle element, or the average of the two middle elements.
// Create the functions `sort` and `middleElement`, and then use them to create the functions `median`.
let grades = [91, 85, 100, 92, 88];

function sort (arr) {
  arr.sort(function(a,b){return a - b})
  return arr
}
// console.log(sort(grades));
// console.log(median(grades)); // Should log 91

function median (arr) {

  let newSort = sort(arr)
  if (newSort.length % 2 === 1) {
    return newSort[Math.floor(arr.length / 2)]
  } else {
    return (newSort[Math.floor(arr.length / 2) - 1] + newSort[Math.floor(arr.length / 2)]) / 2
  }
}
// console.log(median(grades));


// 5. Write a function called `repeat` that takes in a string and numberOfTimes. The function should log to the screen the string however many times as numberOfTimes. If the user does not enter a numberOfTimes it should default to 2.

function repeat (str, numOftimes = 2) {
  let strHolder = []
  for (let i = 0; i < numOftimes; i++) {
    strHolder.push(`${i + 1} ${str}`)
  }

  return strHolder.join(" \n")
}

//console.log(repeat("repeat this", 5));


// 6. Using the spread operator, write a function that can take any number of arguments and return the sum of all of them.

const sumArguments = (...args) => {
  let result = 0
  for (let i = 0; i < args.length; i++){
    result += args[i]
  }
  return result
}

// console.log(sumArguments(1, 2, 3, 4,5));
// console.log(sumArguments(1,2,3,4))




// 7. Write a function called `adder` takes in one number and returns a function that will add that number with another number.
// Using `adder` create an `add5` and an `add9` function. Hint: Closures!

 function adder (num) {
   return function (num2) {
     return num + num2
   }
 }

const add5 = adder(5);

const add9 = adder(9)

//console.log(add5(3));
//console.log(add9(17));



// use the bottom for guidance to solve the last problem

/*
function greeting(str1) {
  return function (str2) {
    return `${str1} ${str2}`
  }
}

const whatUp = greeting("what up?");
const goodDay = greeting("good day,");

//console.log(whatUp("Matt"))
//console.log(goodDay("corey"))
*/
