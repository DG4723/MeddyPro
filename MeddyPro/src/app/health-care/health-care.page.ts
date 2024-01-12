import { Component, OnInit } from '@angular/core';
import { HpService } from '../services/hp.service';
import { BehaviorSubject } from 'rxjs';
import { Cartview3Page } from '../cartview3/cartview3.page';
import { ModalController } from '@ionic/angular';
import { HealthService } from '../_services/health.service';

@Component({
  selector: 'app-health-care',
  templateUrl: './health-care.page.html',
  styleUrls: ['./health-care.page.scss'],
})
export class HealthCarePage implements OnInit {

  health = [];
  hps = [];
  products=[];
  cartItemCount: BehaviorSubject<number>;

  constructor(private hpService: HpService,
    private modalCtrl: ModalController,private healthService: HealthService ) { }

  ngOnInit()
  {
    this.products = this.healthService.getProducts();
    this.hps = this.healthService.getCart();
    this.cartItemCount = this.healthService.getCartItemCount();

  }

  addToCart(product) {
    this.healthService.addProduct(product);

  }

  async openCart() {

    const modal = await this.modalCtrl.create({
      component: Cartview3Page,
      cssClass: 'cart-modal'
    });
    modal.onWillDismiss().then(() => {

    });
    modal.present();
  }





  ionViewDidEnter() {
    this.hpService.getHps().subscribe((response) => {
     this.hps = response;
    });
 }


}

