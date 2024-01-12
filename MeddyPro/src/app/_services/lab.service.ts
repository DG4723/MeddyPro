import { Injectable } from '@angular/core';
import { Product } from '../models/lab.modal';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class LabService {

  private lab = [];
  private cartItemCount = new BehaviorSubject(0);

  constructor() { }

  getCart(){
    return this.lab;
  }

  getCartItemCount(): BehaviorSubject<number> {
		return this.cartItemCount;
	}

  addProduct(product) {
    let added = false;
    for (let p of this.lab) {
      if (p.id === product.id) {
        p.qty += 1;
        added = true;
        break;
      }
    }
    if (!added) {
      product.qty = 1;
      this.lab.push(product);
    }
    this.cartItemCount.next(this.cartItemCount.value + 1);
  }

  decreaseProduct(product) {
    for (const [index, item] of this.lab.entries()) {
			if (item.id === product.id) {
				item.qty -= 1;
				if (item.qty === 0) {
					this.lab.splice(index, 1);
				}
			}
		}
		this.cartItemCount.next(this.cartItemCount.value - 1);
  }

  removeProduct(product) {
    for (const [index, item] of this.lab.entries()) {
			if (item.id === product.id) {
				this.cartItemCount.next(this.cartItemCount.value - item.qty);
				this.lab.splice(index, 1);
			}
		}
  }
}


