import { HealthService } from '../_services/health.service';
import { Product } from '../models/health.model';
import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Router } from '@angular/router';
//import { productCrudService } from '../service/product-crud.service';

@Component({
  selector: 'app-cartview3',
  templateUrl: './cartview3.page.html',
  styleUrls: ['./cartview3.page.scss'],
})
export class Cartview3Page implements OnInit {

  health: Product[] = [];
  parseFloat: any;


  constructor(private healthService: HealthService,
              private modalCtrl: ModalController,

              private router: Router) { }

  ngOnInit() {
    this.health = this.healthService.getCart();
  }

  decreaseCartItem(product) {
    this.healthService.decreaseProduct(product);
  }

  increaseCartItem(product) {
    this.healthService.addProduct(product);
  }

  removeCartItem(product) {
    this.healthService.removeProduct(product);
  }

  getTotal() {
    //return this.health.reduce((i, j) => i + j.price * j.qty, 0);
    return this.health.reduce((total, product) => total + parseFloat(product.price) * parseFloat(product.qty), 0);
  }

  close() {
    this.modalCtrl.dismiss();
  }

  carddetails() {
    this.close();
    this.router.navigate(['/payments']);
  }

}
