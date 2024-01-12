import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { CartModalPageModule } from './cart-modal/cart-modal.module';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
// Import
import { HttpClientModule } from '@angular/common/http';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';


import { WebIntent } from '@awesome-cordova-plugins/web-intent/ngx';


@NgModule({
    declarations: [AppComponent],

    imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, ReactiveFormsModule
      ,CartModalPageModule, FormsModule,HttpClientModule ],

    providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
        WebIntent
    ],
    bootstrap: [AppComponent]
})
export class AppModule {}














