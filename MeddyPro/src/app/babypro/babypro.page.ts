/* eslint-disable @typescript-eslint/member-ordering */
import { Component, OnInit} from '@angular/core';
import { BabyproService } from '../_services/babypro.service';
import { ModalController } from '@ionic/angular';
import { BehaviorSubject } from 'rxjs';
import { Cartview2Page } from '../cartview2/cartview2.page';


@Component({
  selector: 'app-babycare',
  templateUrl: 'babypro.page.html',
  styleUrls: ['babypro.page.scss'],

})
export class BabyproPage implements OnInit{

  cart = [];
  products = [];
  cartItemCount: BehaviorSubject<number>;

  constructor(private babyproService:BabyproService, private modalCtrl: ModalController) {}

  ngOnInit(){
    this.products = this.babyproService.getProducts();
    this.cart = this.babyproService.getCart();
    this.cartItemCount = this.babyproService.getCartItemCount();

  }

  addToCart(product) {
    this.babyproService.addProduct(product);

  }

  async openCart() {

    let modal = await this.modalCtrl.create({
      component: Cartview2Page,
      cssClass: 'cart-modal'
    });
    modal.onWillDismiss().then(() => {

    });
    modal.present();
  }

}
