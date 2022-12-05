// const array1 = [5,7,1,0,9]

// array1.map(number => number * 2)
// const oddNumbers = array1.filter(number => number % 2 === 1) 
// const numberThreeOnly = array1.filter(number => number === 3)
// const sortedArray = array1.sort((a, b) => a - b) 

// console.log(sortedArray)

const arr = ['start', 'mid', 'mid', 'mid', 'error', 'error', 'end']
const arr2 = ['start', 'mid', 'mid', 'mid', 'end']
// console.log(arr.slice(0,2))

// console.log(arr.filter(item => item !== 'error'))

// console.log(arr.indexOf('error'))
// arr.splice(arr.indexOf(item => item === 'error'), 1)
// console.log(arr)

// const indexOfError = arr.indexOf('error')
// console.log(indexOfError)

// arr.splice(indexOfError, 1)

// console.log(arr)

const months = ['Jan', 'March', 'April', 'June'];
months.splice(1, 0, 'Feb');
console.log(months)
