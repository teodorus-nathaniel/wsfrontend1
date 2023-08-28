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
const data = [
  {
    name: 'iPhone 1',
    image: 'https://i.dummyjson.com/data/products/1/thumbnail.jpg',
    rating: 4.5,
    stok: 90,
    price: 'Rp 80.000',
  },
  {
    name: 'iPhone 10',
    image: 'https://i.dummyjson.com/data/products/1/thumbnail.jpg',
    rating: 5,
    stok: 3,
    price: 'Rp 6.000.000',
  },
]
for (let i = 0; i < data.length; i++) {
  const currentProduct = data[i]
  productList.innerHTML += `<div class="product">
  <!-- HEART BUTTON -->
  <button class="heart-button">
    <span class="material-symbols-outlined">favorite</span>
  </button>
  
  <!-- IMAGE -->
  <div class="product-image">
    <img
      src="${currentProduct.image}"
      alt=""
    />
  </div>
  <!-- PRODUCT DETAIL -->
  <div class="product-detail">
    <span>${currentProduct.name}</span>
    <span>${currentProduct.price}</span>
    <div class="product-info">
      <div class="product-rating">
        <span class="material-symbols-outlined">star</span>
        <span>${currentProduct.rating}</span>
      </div>
      <span>Stok ${currentProduct.stok}</span>
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
