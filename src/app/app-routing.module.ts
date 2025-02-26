import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guard/auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule),
    canActivate: [AuthGuard]  // Protezione delle Tabs
  },
  {
    path: 'personal-receipt',
    loadChildren: () => import('./pages/personal-receipt/personal-receipt.module').then( m => m.PersonalReceiptPageModule),
    canActivate: [AuthGuard]  // Protezione delle Tabs
  },
  {
    path: 'upload-receipt',
    loadChildren: () => import('./pages/upload-receipt/upload-receipt.module').then( m => m.UploadReceiptPageModule),
    canActivate: [AuthGuard]  // Protezione delle Tabs
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
