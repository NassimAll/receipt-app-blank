import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: false,
})
export class AppComponent {

  constructor(private authService: AuthService, private router: Router) {
    this.checkLogin();
  }

  async checkLogin() {
    const token = await this.authService.getToken();
    if (token) {
      this.router.navigate(['/home']); // ✅ Se il token esiste, vai alla pagina protetta
    } else {
      this.router.navigate(['/login']); // ⛔ Nessun token? Resta nella pagina di login
    }
  }

  async gotoHome() {
    this.router.navigate(['/home']);
  }

  async gotoUpload() {
    this.router.navigate(['/upload-receipt']);
  }

  async gotoGallery() {
    this.router.navigate(['/gallery']);
  }

  async gotoReciptList() {
    this.router.navigate(['/personal-receipt']);
  }
}
