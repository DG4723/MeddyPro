import { Component, OnInit } from '@angular/core';
import { LabcartService } from '../services/labcart.service';
import { BehaviorSubject } from 'rxjs';
import { LabCartviewPage } from '../lab-cartview/lab-cartview.page';
import { ModalController } from '@ionic/angular';
import { LabService } from '../_services/lab.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {

  filterTerm!: string;
  lab = [];
  cartItemCount: BehaviorSubject<number>;
  labcart: any;

  constructor(private labcartService: LabcartService,
    private modalCtrl: ModalController,private labService: LabService ) { }

  ngOnInit()
  {
  this.lab = this.labService.getCart();
    this.cartItemCount = this.labService.getCartItemCount();

  }

  addToCart(product) {
    this.labService.addProduct(product);

  }

  async openCart() {

    let modal = await this.modalCtrl.create({
      component: LabCartviewPage,
      cssClass: 'cart-modal'
    });
    modal.onWillDismiss().then(() => {

    });
    modal.present();
  }

  ionViewDidEnter() {
    this.labcartService.getLabcarts().subscribe((response) => {
     this.labcart = response;
    });
 }


}


