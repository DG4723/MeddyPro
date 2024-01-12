import { BodycheckService } from '../_services/bodycheck.service';
import { Product } from '../models/body.model';
import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-body-cartview',
  templateUrl: './body-cartview.page.html',
  styleUrls: ['./body-cartview.page.scss'],
})
export class BodyCartviewPage implements OnInit {

    bc: Product[] = [];

  constructor(private bodycheckService: BodycheckService,
              private modalCtrl: ModalController,

              private router: Router) { }

  ngOnInit() {
    this.bc= this.bodycheckService.getCart();

  }
  decreaseCartItem(product) {
    this.bodycheckService.decreaseProduct(product);
  }

  increaseCartItem(product) {
    this.bodycheckService.addProduct(product);
  }

  removeCartItem(product) {
    this.bodycheckService.removeProduct(product);
  }

  getTotal() {
    return this.bc.reduce((i, j) => i + j.price * j.qty, 0);
  }

  close() {
    this.modalCtrl.dismiss();
  }

  carddetails() {
    this.close();
    this.router.navigate(['/payments']);
  }

}
