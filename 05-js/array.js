console.log('ARRAY & OBJECT')

// array
let myArray = ['test', 5, 10]
console.log(myArray[0])

// function
function checkIsEven(num) {
  if (num % 2 === 0) {
    console.log('even')
  } else {
    console.log('odd')
  }
}

checkIsEven(50)

function printFullName(firstName, lastName) {
  // console.log(firstName + ' ' + lastName)
  console.log(firstName, lastName)
}
printFullName('Teodorus', 'Nathaniel')

// object (di c ini struct)
let person = {
  firstName: 'Budi',
  age: 17,
  lastName: 'John',
}
console.log(person.firstName)

// function untuk mencari angka terbesar di dalam suatu array
function getMaxValue(numArray) {
  let candidate = 0
  for (let i = 0; i < numArray.length; i++) {
    let current = numArray[i]
    if (current > candidate) {
      candidate = current
    }
  }
  console.log(candidate)
}

let array = [3, 6, 765, 12]
getMaxValue(array)
