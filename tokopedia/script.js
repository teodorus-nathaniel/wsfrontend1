'use strict'
// import & export
import merchandise, { fish, goat, sheep } from './moduleA.js'
import { getData } from './utils.js'
// import Swiper JS
import Swiper from 'swiper'
import { Navigation, Pagination } from 'swiper/modules'
// import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const swiper = new Swiper('.swiper', {
  modules: [Navigation, Pagination],
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
})
// import merchandise from './moduleA.js'
console.log(fish, goat, merchandise, sheep)

console.log('script connected')

// const logo = document.getElementById('logo')
// logo.style.background = 'red'

// bisa juga pake class, tapi harus akses index ke 0
// const logoClass = document.getElementsByClassName('logo')[0]
// console.log(logo, logoClass)

// let/const
// use strict untuk membuat kita tidak bisa memakai undeclared variable
// let num = 5
// numb = 10

// console.log(num + numb)

const sum = 5 + 10

console.log('above get data')
let currentPage = 1
getData(currentPage)
console.log('below get data')

const prevBtn = document.getElementById('prev-btn')
const nextBtn = document.getElementById('next-btn')

// anonymous function
nextBtn.addEventListener('click', function () {
  currentPage++
  getData(currentPage)
})

const searchInput = document.getElementById('search')
searchInput.addEventListener('keypress', function (event) {
  // console.log('keypressed!', event)
  if (event.key === 'Enter') {
    console.log('enter is pressed!', searchInput.value)
    getData(currentPage, searchInput.value)
  }
})

// function onKeyPress(event) {
//   console.log(event)
// }
// searchInput.addEventListener('keypress', onKeyPress)

// function addEventListener(type, listener) {
//   // ...
//   const event = '' // ... ini event nya
//   listener(event)
//   // ...
// }

// let num = 5
// num = num + 2
// num += 2

// penjelasan function di-call vs ngga di-call
// f(x) = x + 5
// function sum(a, b) {
//   return a + b
// }
// // let summedValue = sum(5, 1555)
// console.log('click', sum(5, 1555))
// console.log('click', sum)
