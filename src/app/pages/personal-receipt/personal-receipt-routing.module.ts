import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PersonalReceiptPage } from './personal-receipt.page';

const routes: Routes = [
  {
    path: '',
    component: PersonalReceiptPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PersonalReceiptPageRoutingModule {}
