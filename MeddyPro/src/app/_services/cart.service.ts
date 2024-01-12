/* eslint-disable @typescript-eslint/member-ordering */
import { Injectable } from '@angular/core';
import { Product } from '../models/cart.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  getTests(): any[] {
    throw new Error('Method not implemented.');
  }

  data: Product[] = [
    { id: 1,
      imgurl: './assets/gokila/m1.webp ',
      name: 'Paracetamol',
      price:330,
      qty: 10
    },
    { id: 2,
      imgurl: './assets/gokila/m2.jpg',
      name: 'acetaminophen',
      price: 300,
      qty: 10
    },
    { id: 3,
      imgurl: './assets/gokila/m3.jpg',
      name: 'Tylenol',
      price: 830,
      qty: 10
    },
    { id: 4,
      imgurl: './assets/gokila/m4.jpg',
      name: 'ibuprofen',
      price: 420,
      qty: 10
    },

    { id: 5,
      imgurl: './assets/gokila/m5.jpg',
      name: 'acetaminophen',
      price: 720,
      qty: 10
    }
  ];

  private cart = [];
  private cartItemCount = new BehaviorSubject(0);


  constructor() { }

  getProducts(){
    return this.data;
  }

  getCart(){
    return this.cart;
  }

  getCartItemCount(): BehaviorSubject<number> {
		return this.cartItemCount;
	}

  addProduct(product) {
    let added = false;
    for (let p of this.cart) {
      if (p.id === product.id) {
        p.qty += 1;
        added = true;
        break;
      }
    }
    if (!added) {
      product.qty = 1;
      this.cart.push(product);
    }
    this.cartItemCount.next(this.cartItemCount.value + 1);
  }

  decreaseProduct(product) {
    for (const [index, item] of this.cart.entries()) {
			if (item.id === product.id) {
				item.qty -= 1;
				if (item.qty === 0) {
					this.cart.splice(index, 1);
				}
			}
		}
		this.cartItemCount.next(this.cartItemCount.value - 1);
  }

  removeProduct(product) {
    for (const [index, item] of this.cart.entries()) {
			if (item.id === product.id) {
				this.cartItemCount.next(this.cartItemCount.value - item.qty);
				this.cart.splice(index, 1);
			}
		}
  }
}
