'use strict'
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

const productList = document.getElementById('product-list')
// console.log(productList, productList.innerHTML)
// productList.innerHTML = product.innerHTML + 'asdfasdfs'
const sum = 5 + 10

// promise => asynchronous programming
// then & catch
// async & await => cara yang lebih baru
async function getData(page, search) {
  console.log('start get data')

  const limit = 5
  const skip = (page - 1) * limit
  // (page - 1) * limit
  // 1 => 0
  // 2 => 5
  // 3 => 10
  // 4 => 15

  let apiUrl = `https://dummyjson.com/products?limit=${limit}&skip=${skip}`
  if (search) {
    apiUrl = `https://dummyjson.com/products/search?q=${search}`
  }

  const response = await fetch(apiUrl)
  const data = await response.json()
  const products = data.products
  console.log(products)

  productList.innerHTML = ''
  for (let i = 0; i < products.length; i++) {
    const currentProduct = products[i]
    productList.innerHTML += `<div class="product">
  <!-- HEART BUTTON -->
  <button class="heart-button">
    <span class="material-symbols-outlined">favorite</span>
  </button>
  
  <!-- IMAGE -->
  <div class="product-image">
    <img
      src="${currentProduct.thumbnail}"
      alt=""
    />
  </div>
  <!-- PRODUCT DETAIL -->
  <div class="product-detail">
    <span>${currentProduct.title}</span>
    <span>$${currentProduct.price}</span>
    <div class="product-info">
      <div class="product-rating">
        <span class="material-symbols-outlined">star</span>
        <span>${currentProduct.rating}</span>
      </div>
      <span>Stok ${currentProduct.stock}</span>
    </div>
  </div>
  </div>`
  }

  const heartButtons = document.getElementsByClassName('heart-button')
  for (let i = 0; i < heartButtons.length; i++) {
    const button = heartButtons[i]
    function handleClick() {
      console.log('toggling')
      button.classList.toggle('active')
    }
    button.addEventListener('click', handleClick)
  }
}
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
