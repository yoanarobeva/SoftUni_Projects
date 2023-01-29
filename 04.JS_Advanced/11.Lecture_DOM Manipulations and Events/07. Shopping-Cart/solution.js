function solve() {
   let outputField = document.querySelector('textarea');
   let shoppingCart = document.querySelector('.shopping-cart');

   shoppingCart.addEventListener('click', addProduct);

   let allProductsPrice = 0;
   let productsArr = [];

   function addProduct(event) {
      let container = event.target.parentElement.parentElement;
      let name = container.querySelector('.product-title').textContent;
      let price = Number(container.querySelector('.product-line-price').textContent);

      if (Array.from(event.target.classList).includes('add-product')) {

         outputField.value += `Added ${name} for ${price.toFixed(2)} to the cart.\n`;
         allProductsPrice += price;
         if (!productsArr.includes(name)) {
            productsArr.push(name);
         }
      } else if (Array.from(event.target.classList).includes('checkout')) {
         outputField.value += `You bought ${productsArr.join(", ")} for ${allProductsPrice.toFixed(2)}.`
         shoppingCart.removeEventListener('click', addProduct);
      } 
   }
}