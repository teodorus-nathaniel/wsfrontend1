// promise => asynchronous programming
// then & catch
// async & await => cara yang lebih baru

const productList = document.getElementById('product-list')
// console.log(productList, productList.innerHTML)
// productList.innerHTML = product.innerHTML + 'asdfasdfs'

export async function getData(page, search) {
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