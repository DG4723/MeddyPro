import { BabyproService } from '../_services/babypro.service';
import { Product } from '../models/babypro.model';
import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cartview2',
  templateUrl: './cartview2.page.html',
  styleUrls: ['./cartview2.page.scss'],
})
export class Cartview2Page implements OnInit {

  cart: Product[] = [];

  constructor(private babyproService: BabyproService,
              private modalCtrl: ModalController,

              private router: Router) { }

  ngOnInit() {
    this.cart = this.babyproService.getCart();
  }

  decreaseCartItem(product) {
    this.babyproService.decreaseProduct(product);
  }

  increaseCartItem(product) {
    this.babyproService.addProduct(product);
  }

  removeCartItem(product) {
    this.babyproService.removeProduct(product);
  }

  getTotal() {
    return this.cart.reduce((i, j) => i + j.price * j.qty, 0);
  }

  close() {
    this.modalCtrl.dismiss();
  }

  carddetails() {
    this.close();
    this.router.navigate(['/']);
  }

}
