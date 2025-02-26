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

   async signUp() {

    const signUpUrl = 'http://192.168.1.71:3000/signup';

    // Open the in-app browser
    await Browser.open({ url: signUpUrl });

    console.log('Browser aperto per la registrazione'); // Debugging


    // Listener per intercettare quando l'utente torna all'app
  App.addListener('appStateChange', async (state) => {
    if (state.isActive) {
      console.log('L\'app è tornata attiva'); // Debugging

      Browser.close();
    }
  });

    console.log('Successfully registered'); // Debugging
  }


}
