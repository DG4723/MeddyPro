import { Injectable } from '@angular/core';
import { Product } from '../models/body.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BodycheckService {
  data: any;

    private body = [];
  private cartItemCount = new BehaviorSubject(0);


  constructor() { }

  getProducts(){
    return this.data;
  }

  getCart(){
    return this.body;
  }

  getCartItemCount(): BehaviorSubject<number> {
		return this.cartItemCount;
	}

  addProduct(product) {
    let added = false;
    for (let p of this.body) {
      if (p.id === product.id) {
        p.qty += 1;
        added = true;
        break;
      }
    }
    if (!added) {
      product.qty = 1;
      this.body.push(product);
    }
    this.cartItemCount.next(this.cartItemCount.value + 1);
  }

  decreaseProduct(product) {
    for (const [index, item] of this.body.entries()) {
			if (item.id === product.id) {
				item.qty -= 1;
				if (item.qty === 0) {
					this.body.splice(index, 1);
				}
			}
		}
		this.cartItemCount.next(this.cartItemCount.value - 1);
  }

  removeProduct(product) {
    for (const [index, item] of this.body.entries()) {
			if (item.id === product.id) {
				this.cartItemCount.next(this.cartItemCount.value - item.qty);
				this.body.splice(index, 1);
			}
		}
  }
}
