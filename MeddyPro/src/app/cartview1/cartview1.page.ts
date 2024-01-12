import { BuyService } from '../_services/buy.service';
import { Product } from '../models/buy.model';
import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cartview1',
  templateUrl: './cartview1.page.html',
  styleUrls: ['./cartview1.page.scss'],
})
export class Cartview1Page implements OnInit {

  cart: Product[] = [];

  constructor(private buyService: BuyService,
              private modalCtrl: ModalController,

              private router: Router) { }

  ngOnInit() {
    this.cart = this.buyService.getCart();
  }

  decreaseCartItem(product) {
    this.buyService.decreaseProduct(product);
  }

  increaseCartItem(product) {
    this.buyService.addProduct(product);
  }

  removeCartItem(product) {
    this.buyService.removeProduct(product);
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
