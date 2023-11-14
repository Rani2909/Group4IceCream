import { Component } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  cartItems: any[] = [];

  constructor() {}

  addToCart(item: any) {
    // Check if the item is already in the cart
    const existingItemIndex = this.cartItems.findIndex(cartItem => cartItem.id === item.id);

    if (existingItemIndex !== -1) {
      // If the item is already in the cart, increase its quantity
      this.cartItems[existingItemIndex].quantity++;
    } else {
      // If the item is not in the cart, add it with a quantity of 1
      this.cartItems.push({ ...item, quantity: 1 });
    }
  }

  removeFromCart(index: number) {
    // Remove the item from the cart based on its index
    this.cartItems.splice(index, 1);
  }

  getTotal(): number {
    // Calculate the total cost of items in the cart
    return this.cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  }

  clearCart() {
    // Clear all items from the cart
    this.cartItems = [];
  }
}
