import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UploadReceiptPage } from './upload-receipt.page';

const routes: Routes = [
  {
    path: '',
    component: UploadReceiptPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UploadReceiptPageRoutingModule {}
