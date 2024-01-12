import { MriViewService } from '../_services/mri-view.service';
import { Product } from '../models/mri.model';
import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mri-cartview',
  templateUrl: './mri-cartview.page.html',
  styleUrls: ['./mri-cartview.page.scss'],
})
export class MriCartviewPage implements OnInit {

  mri: Product[] = [];

  constructor(private mriviewService: MriViewService,
              private modalCtrl: ModalController,

              private router: Router) { }

  ngOnInit() {
    this.mri = this.mriviewService.getCart();

  }
  decreaseCartItem(product) {
    this.mriviewService.decreaseProduct(product);
  }

  increaseCartItem(product) {
    this.mriviewService.addProduct(product);
  }

  removeCartItem(product) {
    this.mriviewService.removeProduct(product);
  }

  getTotal() {
    return this.mri.reduce((i, j) => i + j.price * j.qty, 0);
  }

  close() {
    this.modalCtrl.dismiss();
  }

  carddetails() {
    this.close();
    this.router.navigate(['/payments']);
  }

}
