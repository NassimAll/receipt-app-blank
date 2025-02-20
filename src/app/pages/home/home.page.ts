import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, IonicModule, RouterModule] // Add IonicModule to imports

})
export class HomePage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
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
