import { Component, OnInit } from '@angular/core';
import { BodyService } from '../services/body.service';
import { BehaviorSubject } from 'rxjs';
import { BodyCartviewPage } from '../body-cartview/body-cartview.page';
import { ModalController } from '@ionic/angular';
import { BodycheckService } from '../_services/bodycheck.service';


@Component({
  selector: 'app-body-checkup',
  templateUrl: './body-checkup.page.html',
  styleUrls: ['./body-checkup.page.scss'],
})
export class BodyCheckupPage implements OnInit {


  health = [];
  bc = [];
  products=[];
  cartItemCount: BehaviorSubject<number>;

  constructor(private bodycheckService: BodycheckService,
    private modalCtrl: ModalController,private bodyService: BodyService ) { }

  ngOnInit()
  {
    this.products = this.bodycheckService.getProducts();
    this.bc = this.bodycheckService.getCart();
    this.cartItemCount = this.bodycheckService.getCartItemCount();

  }

  addToCart(product) {
    this.bodycheckService.addProduct(product);

  }

  async openCart() {

    const modal = await this.modalCtrl.create({
      component: BodyCartviewPage,
      cssClass: 'cart-modal'
    });
    modal.onWillDismiss().then(() => {

    });
    modal.present();
  }

    ionViewDidEnter() {
    this.bodyService.getBcs().subscribe((response) => {
     this.bc = response;
    });
 }


}


