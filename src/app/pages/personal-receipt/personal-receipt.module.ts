import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PersonalReceiptPageRoutingModule } from './personal-receipt-routing.module';

import { PersonalReceiptPage } from './personal-receipt.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PersonalReceiptPageRoutingModule
  ],
})
export class PersonalReceiptPageModule {}
