import { Component, OnInit } from '@angular/core';
import { MriViewService } from '../_services/mri-view.service';
import { Product } from '../models/mri.model';
import { ModalController } from '@ionic/angular';
import { BehaviorSubject } from 'rxjs';
import { MriCartviewPage } from '../mri-cartview/mri-cartview.page';
import { MeddylabService } from '../services/meddylab.service';
import { MriService } from '../services/mri.service';


@Component({
  selector: 'app-mri',
  templateUrl: './mri.page.html',
  styleUrls: ['./mri.page.scss'],
})
export class MriPage implements OnInit {

  mri = [];
  products = [];
  cartItemCount: BehaviorSubject<number>;

  constructor(private mriviewService: MriViewService,private meddylabService: MeddylabService,
    private mriService: MriService,
    private modalCtrl: ModalController) { }

  ngOnInit() {
    this.products = this.mriviewService.getProducts();
    this.mri = this.mriviewService.getCart();
    this.cartItemCount = this.mriviewService.getCartItemCount();

}
addToCart(product) {
  this.mriviewService.addProduct(product);

}

async openCart() {

  let modal = await this.modalCtrl.create({
    component: MriCartviewPage,
    cssClass: 'cart-modal'
  });
  modal.onWillDismiss().then(() => {

  });
  modal.present();
}

/*ionViewDidEnter() {
  this.meddylabService.getMeddyLabs().subscribe((response) => {
    this.mri = response;
  });
}*/

ionViewDidEnter() {
  this.mriService.getMris().subscribe((response) => {
    this.mri = response;
  });
}


}



