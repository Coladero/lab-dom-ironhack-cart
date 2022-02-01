// ITERATION 1



function updateSubtotal(product) {
  const priceDOM = product.querySelector('.price span');
  const quantityDOM = product.querySelector(".quantity input");
  const subtotalNumber = product.querySelector(".subtotal span");
  subtotalNumber.innerHTML = (priceDOM.innerHTML)*(quantityDOM.value);

  let total = document.querySelector("#total-value span");
  total.innerHTML = Number (total.innerHTML) +  Number(subtotalNumber.innerHTML);
}

function calculateAll() {
  let total = document.querySelector("#total-value span");
  total.innerHTML = 0;
  let everyProduct = document.querySelectorAll('.product');
  everyProduct.forEach(updateSubtotal);

  let sumAllSubtotal = document.querySelectorAll(".subtotal span");


  total.value = sumAllSubtotal.value*2;

}


// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
}

// ITERATION 5

function createProduct() {
   
  let listItemDom = document.createElement("span");
  let addName = document.createTextNode("Patata");
  listItemDom.appendChild(addName);
  let currentProduct= document.querySelector(".nombre1");
  document.body.insertBefore(listItemDom, currentProduct)
  

}


window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

});
