import { Component, OnInit } from '@angular/core';
import { CartService } from '../_services/cart.service';
import { ModalController } from '@ionic/angular';
import { BehaviorSubject } from 'rxjs';
import { CartviewPage } from '../cartview/cartview.page';

@Component({
  selector: 'app-tests',
  templateUrl: './tests.page.html',
  styleUrls: ['./tests.page.scss'],
})
export class TestsPage implements OnInit {
  cart = [];
  tests = [];
  cartItemCount: BehaviorSubject<number>;

  constructor(private cartService: CartService, private modalCtrl: ModalController) { }

  ngOnInit() {
    this.tests = this.cartService.getTests();
    this.cart = this.cartService.getCart();
    this.cartItemCount = this.cartService.getCartItemCount();
  }
  addToCart(test) {
    this.cartService.addProduct(test);

  }

  async openCart() {

    let modal = await this.modalCtrl.create({
      component: CartviewPage,
      cssClass: 'cart-modal'
    });
    modal.onWillDismiss().then(() => {

    });
    modal.present();
  }

}
