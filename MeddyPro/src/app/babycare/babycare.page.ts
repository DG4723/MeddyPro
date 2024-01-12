/* eslint-disable @typescript-eslint/member-ordering */
import { Component, OnInit} from '@angular/core';
import { BuyService } from '../_services/buy.service';
import { ModalController } from '@ionic/angular';
import { BehaviorSubject } from 'rxjs';
import { Cartview1Page } from '../cartview1/cartview1.page';


@Component({
  selector: 'app-babycare',
  templateUrl: 'babycare.page.html',
  styleUrls: ['babycare.page.scss'],

})
export class BabycarePage implements OnInit{

  cart = [];
  products = [];
  cartItemCount: BehaviorSubject<number>;

  constructor(private cartService:BuyService, private modalCtrl: ModalController) {}

  ngOnInit(){
    this.products = this.cartService.getProducts();
    this.cart = this.cartService.getCart();
    this.cartItemCount = this.cartService.getCartItemCount();

  }

  addToCart(product) {
    this.cartService.addProduct(product);

  }

  async openCart() {

    let modal = await this.modalCtrl.create({
      component: Cartview1Page,
      cssClass: 'cart-modal'
    });
    modal.onWillDismiss().then(() => {

    });
    modal.present();
  }

}
