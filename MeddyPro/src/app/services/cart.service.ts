import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface Product {
  id: number;
  name: string;
  price: number;
  amount: number;
}
@Injectable({
  providedIn: 'root'
})
export class CartService {
  data: Product[] = [
    { id: 0, name: 'Himalaya Herbals BABY KIT  (White)', price: 520, amount: 0 },
    { id: 1, name: 'Baby Lotion, Shampoo, Body Wash', price: 1179, amount: 0 },
    { id: 2, name: 'Baby Care Products', price: 1500, amount: 0 },
    { id: 3, name: 'Baby Care Products', price: 1500, amount: 0 },
    { id: 4, name: 'Baby Care Products', price: 1500, amount: 0 },
    { id: 5, name: 'Baby Care Products', price: 1500, amount: 0 },
    { id: 6, name: 'Baby Care Products', price: 1500, amount: 0 },
    { id: 7, name: 'Hubby Babies Baby Care Kit', price: 1400, amount: 0 }
  ];

  private cart = [];
  private cartItemCount = new BehaviorSubject(0);

  constructor() {}

  getProducts() {
    return this.data;
  }

  getCart() {
    return this.cart;
  }

  getCartItemCount() {
    return this.cartItemCount;
  }

  addProduct(product) {
    let added = false;
    for (const p of this.cart) {
      if (p.id === product.id) {
        p.amount += 1;
        added = true;
        break;
      }
    }
    if (!added) {
      product.amount = 1;
      this.cart.push(product);
    }
    this.cartItemCount.next(this.cartItemCount.value + 1);
  }

  decreaseProduct(product) {
    for (const [index, p] of this.cart.entries()) {
      if (p.id === product.id) {
        p.amount -= 1;
        if (p.amount === 0) {
          this.cart.splice(index, 1);
        }
      }
    }
    this.cartItemCount.next(this.cartItemCount.value - 1);
  }

  removeProduct(product) {
    for (const [index, p] of this.cart.entries()) {
      if (p.id === product.id) {
        this.cartItemCount.next(this.cartItemCount.value - p.amount);
        this.cart.splice(index, 1);
      }
    }
  }
}
