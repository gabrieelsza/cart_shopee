import * as cartService from './service/cart.js';
import createItem from "./service/item.js";

const myCart = []; 

const item1 = await createItem("Blusa Botafogo 2024", 119.90, 2)
const item2 = await createItem("Blusa Botafogo 1988", 229.99, 2)


await cartService.addItem(myCart, item1)
await cartService.addItem(myCart, item2)

await cartService.removeItem(myCart, item1)
await cartService.removeItem(myCart, item2)

await cartService.displayCart(myCart, item1)
await cartService.displayCart(myCart, item2)

// await cartService.deleteItem(myCart, item2.name)

await cartService.calculateTotal(myCart); 