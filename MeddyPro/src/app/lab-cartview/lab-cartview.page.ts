import { LabService } from '../_services/lab.service';
import { Product } from '../models/lab.modal';
import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lab-cartview',
  templateUrl: './lab-cartview.page.html',
  styleUrls: ['./lab-cartview.page.scss'],
})
export class LabCartviewPage implements OnInit {
  lab: Product[] = [];

  constructor(private labService: LabService,
              private modalCtrl: ModalController,

              private router: Router) { }

  ngOnInit() {
    this.lab = this.labService.getCart();

  }
  decreaseCartItem(product) {
    this.labService.decreaseProduct(product);
  }

  increaseCartItem(product) {
    this.labService.addProduct(product);
  }

  removeCartItem(product) {
    this.labService.removeProduct(product);
  }

  getTotal() {
    return this.lab.reduce((i, j) => i + j.price * j.qty, 0);
  }

  close() {
    this.modalCtrl.dismiss();
  }

  carddetails() {
    this.close();
    this.router.navigate(['/payments']);
  }

}

