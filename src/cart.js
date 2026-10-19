const products = require("./data/products");

function notImplemented() {
  throw new Error('Корзина ещё не реализована. Сначала прочитайте тесты.');
}

function addToCart(cart, productItem, quantity = 1) {
if (quantity <= 0) {
    throw new RangeError('Количество товара должно быть больше нуля');
  }

if (!productItem) return cart;

const cartItem = cart.find((item) => item.id === productItem.id);
const currentQtyInCart = cartItem ? cartItem.quantity : 0;

if (currentQtyInCart + quantity > productItem.stock) {
    throw new RangeError('Недостаточно товара на складе');
  }
if (cartItem) {
   return cart.map((item) =>
      item.id === productItem.id
        ? { ...item, quantity: item.quantity + quantity }
        : item
   );
} return [
    ...cart,
    {
...productItem,
      quantity: quantity
    }
  ];
}
function changeQuantity(cart, id, newQuantity) {
  if (newQuantity <= 0) {
    throw new RangeError('Количество товара должно быть больше нуля');
  }
 const cartItem = cart.find((item) => item.id === id);
  if (!cartItem) {
    return cart;
  }

   const originalProduct = products.find((p) => p.id === id);

 if (originalProduct && newQuantity > originalProduct.stock) {
    throw new RangeError('Указанное количество превышает остаток на складе');
  }
  return cart.map((item) =>
    item.id === id 
      ? { ...item, quantity: newQuantity } 
      : item
  );
}
function removeFromCart(cart, id) {
  return cart.filter((item) => item.id !== id);
  }
function calculateCartSubtotal(cart) {
  return cart.reduce((sum, item) => {
    return sum + (item.price * item.quantity);
  }, 0);
}
function calculateOrderTotal(cart, promoCode = null) {
const subtotal = calculateCartSubtotal(cart);
  let discount = 0;

if(promoCode === 'SAVE10' && subtotal>= 20000){
  discount = subtotal * 0.1;
}
const dostCost = subtotal >= 50000 ? 0 : 30000;

const total = subtotal - discount + dostCost;
return{
  subtotal: subtotal,
  discount: discount,
  delivery: dostCost,
  total: total
}
}

const cartApi = { addToCart, changeQuantity, removeFromCart, calculateCartSubtotal, calculateOrderTotal };

if (typeof module !== 'undefined') module.exports = cartApi;
if (typeof window !== 'undefined') window.cartApi = cartApi;
