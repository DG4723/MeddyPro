import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BookTestPageRoutingModule } from './book-test-routing.module';

import { BookTestPage } from './book-test.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BookTestPageRoutingModule
  ],
  declarations: [BookTestPage]
})
export class BookTestPageModule {}
