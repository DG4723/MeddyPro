import { Component } from '@angular/core';
import { WebIntent } from '@awesome-cordova-plugins/web-intent/ngx';


@Component({
  selector: 'app-upi',
  templateUrl: './upi.page.html',
  styleUrls: ['./upi.page.scss'],
})
export class UpiPage  {

    constructor(private webIntent: WebIntent) { }

   upi() {
    const options = {
      action: this.webIntent.ACTION_VIEW,
      url:'upi://pay?pa=8400000701@upi&pn=ClickerTech&tid=cxnkjcnkjdfdvjndkjfvn&tr=4894398cndhcd23&an=10&cu-INR&tn=App Payment',
    };

    this.webIntent.startActivityForResult(options).then(
      onSuccess =>{
        console.log('Success',onSuccess);
      },
      onError =>{
        console.log('error', onError);
      });
  }


}
