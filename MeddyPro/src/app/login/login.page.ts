import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../_services/authentication.service';
import { DocregService } from '../services/docreg.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  userData = {
    name: '',
    phoneNumber: ''
  };

  constructor(
    private authService: AuthenticationService,
    private docregService: DocregService,
    private router: Router,
    private alertController: AlertController
  ) {}

  onLogin() {
    if (!this.userData.name || !this.userData.phoneNumber) {
      console.error('Name and phone number are required.');
      // You can also display an error message to the user
      return;
    }

    // Perform your login logic here
    this.authService.loginUser(this.userData)
      .subscribe(
        response => {
          console.log(response); // Handle success response
          // Navigate to the main part of the application
          this.router.navigate(['/tabs']); // Change 'tabs' to the appropriate route
        },
        error => { 
          console.error(error); // Handle error
        }
      );
  }
  async presentAlert(header: string, message: string) {
    const alert = await this.alertController.create({
      header,
      message,
      buttons: ['OK']
    });
    await alert.present();
  }
}
