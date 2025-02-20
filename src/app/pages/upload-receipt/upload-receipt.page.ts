import { Component, OnInit } from '@angular/core';
import { PhotoService } from 'src/app/services/photo.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-upload-receipt',
  templateUrl: './upload-receipt.page.html',
  styleUrls: ['./upload-receipt.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, IonicModule, RouterModule] // Add IonicModule to imports

})
export class UploadReceiptPage {

  photo: string | null = null;

  constructor(private photoService: PhotoService, private router: Router) {}

  async capturePhoto() {
    await this.photoService.takePhoto();
  }

  async selectPhoto() {
    this.photo = await this.photoService.pickPhoto();
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
