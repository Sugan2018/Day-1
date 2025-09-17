// string
// boolean
// null
// undefined
// array
// object

// map
// filter
// reduce

// map

// iterate each an every element from the array
// transforming into element
// return a new array


let number = [2,3,4,5,6,]
let mapvalue = number.map(x => x*2)
console.log(mapvalue)


// filter

// filter works based on the condition

let number = [25,2,45,6,3,80,8,77,7]
let filterVal = number.filter(x => x>10)
console.log(filterVal);

let number = ["cow","cat",7,"tiger","lion"]
let filterVal = number.filter(x => x.length>3)
console.log(filterVal);

// reduce

// combine the element into single value

let number = [10,20,30,40,50,60]
let reduceVal = number.reduce((acc,cur)=> acc + cur)
let array = []
array.push(reduceVal)
console.log(array);

// pop
// eliminate the last element from the array

let array = [0,1,2,3,4,5,6]
let newArray = array.pop()
console.log(newArray);
console.log(array);

//push
// add the last element from the array

let array = [0,1,2,3,4,5,6]
let newArray = array.push(10)
console.log(newArray);
console.log(array);

let array = [0,1,2,3,4,5,6]
let newArray = array.push(10,"Hello")
console.log(newArray);
console.log(array);

// shift
// removes the first index value

let array = [0,1,2,3,4,5,6]
let newArray = array.shift()
console.log(newArray);
console.log(array);

//unshift
// Add the first index value

let array = [0,1,2,3,4,5,6]
let newArray = array.unshift(100,['Hello'])
console.log(newArray);
console.log(array);

// reverse
// reverse the entire the element

let array = [0,1,2,3,4,5,6]
let newArray = array.reverse()
console.log(newArray);
console.log(array);

//slice
// cuts the particular value

let array = [0,1,2,3,4,5,6]
let newArray = array.slice(2,4)
console.log(newArray);
console.log(array);

let array = [0,2,3,4,5,6,7,8,9]
let newArray = array.slice(2,8)
console.log(newArray);
console.log(array);


let arr1 = [1,2,3]
let arr2 = [4,5,6]
let arr3 = [7,8,9]
let newArray = arr1.concat(arr3,arr1,arr2)
console.log(newArray);

// split = convert the string into array

let sentence = "Hi how are you"
let newArray = sentence.split(" ")
console.log(newArray);

// sort 

let fruit = ["cherry","apple","orange","kiwi"]
let sortVal = fruit.sort()
console.log(sortVal);
