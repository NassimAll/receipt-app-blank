import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular'; // Import IonicModule
import { Router, RouterModule } from '@angular/router'; // Add this import
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Browser } from '@capacitor/browser';
import { App } from '@capacitor/app';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, IonicModule, RouterModule] // Add IonicModule to imports
})
export class LoginPage{

  username : string = '';
  password : string = '';


  constructor(private authService: AuthService,private router: Router) {}

  async login() {
    const loginUrl = 'http://192.168.1.71:3000/login';

    try {
      const response = await fetch(loginUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username: this.username, password: this.password })
      });

      const data = await response.json();

      if (response.ok && data.accessToken) {
        await this.authService.setToken(data.accessToken); // ✅ Salva il token in Storage
        console.log('Token salvato:', data.accessToken);
        this.router.navigate(['/home']); // 🔄 Naviga alla schermata principale
      } else {
        console.error('Errore di login:', data.error);
        alert('Credenziali errate');
      }
    } catch (error) {
      console.error('Errore di rete:', error);
      alert('Errore di connessione al server');
    }
  }

  /* async openLoginPage() {

    const authUrl = 'http://192.168.1.71:3000/login';
   //const authUrl = 'http://127.0.0.1:3000/login';

    // Open the in-app browser
    await Browser.open({ url: authUrl });

    // Add listener for appUrlOpen event
    App.addListener('appUrlOpen', (event) => {
      console.log('appUrlOpen event triggered:', event.url); // Debugging

      if (event.url.startsWith('receiptapp://home')) {
        const url = new URL(event.url);
        const token = url.searchParams.get('token');
        console.log('Token received:', token); // Debugging

        if (token) {
          localStorage.setItem('jwt', token);
          console.log('Token stored in localStorage:', token); // Debugging
          Browser.close();
          this.router.navigate(['/home']);
        }


      }
    });

    console.log('Listener registered'); // Debugging
  }
 */

}
