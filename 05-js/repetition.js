console.log('REPETITION')
// for, do-while, while
let input = 0

for (let i = 0; i < input; i++) {
  console.log('Hello World')
}
console.log('sesuatu')

// i = 0 | 0 < 3 ?
// hello world
// i = 1 | 1 < 3 ?
// hello world
// i = 2 | 2 < 3 ?
// hello world
// i = 3 | 3 < 3 ? => NGGA

// bikin garis
let inputGaris = 10
let garis = ''
for (let i = 0; i < inputGaris; i++) {
  // garis = garis + '*'
  garis += '*'
}
console.log(garis)

// bikin kotak
let inputKotak = 5

for (let i = 0; i < inputKotak; i++) {
  // iterasi 1 => i = 0
  // iterasi 2 => i = 6 ====> 6 < 5 ? ngga maka keluar
  let row = ''
  for (let i = 0; i < inputKotak; i++) {
    row += '*'
  }
  console.log(row)
  // i = 5
}
