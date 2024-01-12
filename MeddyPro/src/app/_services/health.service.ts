import { Injectable } from '@angular/core';
import {Product } from '../models/health.model';
import { BehaviorSubject } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class HealthService {

  data: Product[] = [
     
  ];
 
  private health = [];
  private cartItemCount = new BehaviorSubject(0);


  constructor() { }

  getProducts(){
    return this.data;
  }

  getCart(){
    return this.health;
  }

  getCartItemCount(): BehaviorSubject<number> {
		return this.cartItemCount;
	}

  addProduct(product) {
    let added = false;
   /* for (let p of this.health) {
      if (p.id === product.id) {
        p.qty += 1;
        added = true;
        break;
      }
    }*/
    if (!added) {
      product.qty = 1;
      this.health.push(product);
    }
    this.cartItemCount.next(this.cartItemCount.value + 1);
  }

  decreaseProduct(product) {
    for (const [index, item] of this.health.entries()) {
      if (item.id === product.id) {
        item.qty -= 1;
        if (item.qty == 0) {
          this.health.splice(index, 1);
        }
      }
    }
    this.cartItemCount.next(this.cartItemCount.value - 1);
  }

  removeProduct(product) {
    for (const [index, item] of this.health.entries()) {
			if (item.id === product.id) {
				this.cartItemCount.next(this.cartItemCount.value - item.qty);
				this.health.splice(index, 1);
			}
		}
  }
}
