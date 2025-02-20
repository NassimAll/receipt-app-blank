import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { PhotoService } from 'src/app/services/photo.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.page.html',
  styleUrls: ['./gallery.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, IonicModule, RouterModule] // Add IonicModule to imports

})
export class GalleryPage implements OnInit {

  constructor(public photoService: PhotoService, private router: Router) { }

  async ngOnInit() {
    await this.photoService.loadSaved();
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
