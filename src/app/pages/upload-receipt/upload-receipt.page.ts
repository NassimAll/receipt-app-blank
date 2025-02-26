import { Component, OnInit } from '@angular/core';
import { PhotoService, UserPhoto } from 'src/app/services/photo.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AlertController, IonicModule } from '@ionic/angular';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-upload-receipt',
  templateUrl: './upload-receipt.page.html',
  styleUrls: ['./upload-receipt.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, IonicModule, RouterModule] // Add IonicModule to imports

})
export class UploadReceiptPage {

  photo: UserPhoto | null = null;

  constructor(private alertController: AlertController, private authService: AuthService, private photoService: PhotoService, private router: Router) {}

  async capturePhoto() {
    this.photo =await this.photoService.takePhoto();
    if (this.photo) {
      await this.uploadToServer();
    }
  }

  async selectPhoto() {
    this.photo = await this.photoService.pickPhoto();
    if (this.photo) {
      await this.uploadToServer();
    }
  }

  async uploadToServer() {
    if (!this.photo) return;

    try {
      const response = await this.photoService.uploadPhoto(this.photo);
      console.log('Risultati AI:', response);
      this.confirmPopUp(response);
    } catch (error) {
      console.error('Errore upload:', error);
    }
  }

  async confirmPopUp(response : any) {
    return new Promise(async (resolve) => {
      //Creazione dell'alert attraverso il controller
      const confirm = await this.alertController.create({
        header: 'Receipt scan done',
        message: response,
        buttons: [
          {
            text: 'Done',
            handler: () => {
              return resolve(true);
            },
          }
        ],
      });
      //Presenta l'alert e attende che l'utente ci clichi sopra
      await confirm.present();
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
