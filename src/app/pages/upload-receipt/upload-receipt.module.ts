import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UploadReceiptPageRoutingModule } from './upload-receipt-routing.module';

import { UploadReceiptPage } from './upload-receipt.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UploadReceiptPageRoutingModule
  ],
})
export class UploadReceiptPageModule {}
