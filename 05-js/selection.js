console.log('SELECTION')

// ngitung THR
// kalo misalkan karyawan udah kerja lebih dari 6 bulan, baru bisa terima THR

// kodingan kita static, kecuali si monthsWorking ini
let monthsWorking = 24

// partial => jika gw kerja lebih besar 6 bulan dan belum lebih dari setahun
if (monthsWorking > 6 && monthsWorking <= 12) {
  console.log('terima thr partial')
} else if (monthsWorking > 12) {
  console.log('terima thr full')
} else {
  console.log('ngga terima thr')
}

// if (monthsWorking > 12) {
//   console.log('terima thr full')
// } else if (monthsWorking > 6) {
//   console.log('terima thr full')
// } else {
//   console.log('ngga terima thr')
// }

// kalo misalkan dia kerjanya pas kelipatan 1 tahun, gw print work anniversary
// 5 / 2 sisa=> 1
// 125 / 100 sisa=> 25
// 125 % 100 => 25
let myMonthsWorking = 23
if (myMonthsWorking % 12 != 0) {
  console.log('ini anniversary lu')
}

let a = '0'
if (a === 0) {
  console.log('sama')
} else {
  console.log('tidak sama')
}

// TRUTHY & FALSY
let data = []
if (data) {
  console.log('truthy')
} else {
  console.log('falsy')
}
// truthy & falsy
// "test" "0" "asdfasdf" 123123 [] => true
// 0, undefined, null, "" => false
