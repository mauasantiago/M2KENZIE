const products = [
  {
    name: "Camiseta",
    price: 29.99,
  },
  {
    name: "Calça Jeans",
    price: 59.99,
  },
  {
    name: "Sapatos",
    price: 59.99,
  },
  {
    name: "Vestido",
    price: 89.99,
  },
  {
    name: "Chapéu",
    price: 19.99,
  },
];

// const productList = document.querySelector("ul")
// for (let i = 0; i < products.length; i++) {
//   const listItem = document.createElement('li')

//   const productName = document.createElement('h3')
//   const productPrice = document.createElement('p')
//   const addToCartButton = document.createElement('button')

//   productName.innerText = products[i].name
//   productPrice.innerText = products[i].price
//   addToCartButton.innerText = "Adicionar ao carrinho"

//   listItem.appendChild(productName)
//   listItem.appendChild(productPrice)
//   listItem.appendChild(addToCartButton)

//   productsList.appendChild(listItem)

// }

const productsList = document.querySelector('ul')

for (let i = 0; i < products.length; i++) {
   const listItem = document.createElement('li')

   const productName = document.createElement('h3')
   const productPrice = document.createElement('p')
   const addToCartButton = document.createElement('button')

   productName.innerText = products[i].name
   productPrice.innerText = products[i].price
   addToCartButton.innerText = "Adicionar ao carrinho"

   listItem.appendChild(productName)
   listItem.appendChild(productPrice)
   listItem.appendChild(addToCartButton)

   productsList.appendChild(listItem)
}

