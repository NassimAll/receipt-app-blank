import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { AuthService } from '../../services/auth.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, IonicModule, RouterModule] // Add IonicModule to imports

})
export class HomePage implements OnInit {

  public user: any;
  private apiUrl = `http://192.168.1.71:3000/api/v1/user/profile`;

  constructor(private authService: AuthService, private router: Router, private http: HttpClient) { }

  async ngOnInit() {
    try {
      await this.getUserProfile();
    } catch (error) {
      console.error('Error loading user profile:', error);
    }
  }

  async getUserProfile() {
    const token = await this.authService.getToken();
    console.log(token);

    if (!token) throw new Error('Token not found');

    this.http.get(this.apiUrl, {
      headers: { Authorization: `Bearer ${token}` }
    }).subscribe({
      next: (data) => {
        this.user = data; // Salva i dati dell'utente
        console.log(this.user);
      },
      error: (err) => {
        console.error('Errore nel recupero del profilo utente:', err);
      }
    });
  }

  // Funzione di logout
  async logout() {
    // Rimuovi il token JWT da localStorage
    await this.authService.removeToken();
    
    // Reindirizza l'utente alla pagina di login
    this.router.navigate(['/login']);
  }

  async gotoUpload() {
    this.router.navigate(['/upload-receipt']);
  }

  async gotoReciptList() {
    this.router.navigate(['/personal-receipt']);
  }

  async gotoHome() {
    this.router.navigate(['/home']);
  }

}
