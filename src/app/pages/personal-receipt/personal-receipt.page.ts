import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-personal-receipt',
  templateUrl: './personal-receipt.page.html',
  styleUrls: ['./personal-receipt.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, IonicModule, RouterModule] // Add IonicModule to imports

})
export class PersonalReceiptPage implements OnInit {

  constructor(private router: Router, private http: HttpClient, private authService: AuthService) { }

  //Lista delle ricevute
  public receipts: any[] = [];

  private apiUrl : string = 'http://192.168.1.71:3000/api/v1/receipts';

  ngOnInit() {
    this.fetchReceipts();
  }

  async fetchReceipts() {
    const token = await this.authService.getToken();
    console.log(token);

    this.http.get<any[]>(this.apiUrl, {
      headers: { Authorization: `Bearer ${token}` }
    })
      .subscribe({
        next: (data) => {
          console.log('Tipo di data:', Array.isArray(data) ? 'Array' : typeof data, data);
          if (data) {
            this.receipts = Array.isArray(data) ? data : [data]; // Forza l'array
            console.log('Receipts salvate:', this.receipts.length);
          } else {
            this.receipts = [];
            console.log('Receipts salvate:', this.receipts.length);
          }

        },
        error: (error) => {
          console.error('Errore nel recupero delle ricevute:', error);
        }
      });
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

  async gotoHome() {
    this.router.navigate(['/home']);
  }


}
