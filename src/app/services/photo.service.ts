import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Camera, CameraResultType, CameraSource, Photo } from '@capacitor/camera';
import { Filesystem, Directory } from '@capacitor/filesystem';
import { Preferences } from '@capacitor/preferences';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {
  private PHOTO_STORAGE: string = 'photos';
  private apiUrl: string = 'http://192.168.1.71:3000/api/v1/receipt/upload';  // URL API

  constructor(private http: HttpClient, private authService: AuthService ) {}

  public async takePhoto() {
    const photo: Photo = await Camera.getPhoto({
      resultType: CameraResultType.Uri,
      source: CameraSource.Camera,
      quality: 100
    });

    return await this.savePicture(photo);
  }

   // Seleziona una foto dalla galleria
   public async pickPhoto() {
    const photo: Photo = await Camera.getPhoto({
      resultType: CameraResultType.Uri,
      source: CameraSource.Photos, // Usa la galleria invece della fotocamera
      quality: 100,
    });

    return await this.savePicture(photo);
  }

  private async savePicture(photo: Photo) {
    const base64Data = await this.readAsBase64(photo);
    const fileName = Date.now() + '.jpeg';

    await Filesystem.writeFile({
      path: fileName,
      data: base64Data,
      directory: Directory.Data
    });

    return {
      filepath: fileName,
      webviewPath: photo.webPath,
      base64Data: base64Data  // Aggiungiamo il Base64 per inviarlo al server
    };
  }

  private async readAsBase64(photo: Photo) {
    const response = await fetch(photo.webPath!);
    const blob = await response.blob();
    return await this.convertBlobToBase64(blob) as string;
  }

  private convertBlobToBase64 = (blob: Blob) => new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onerror = reject;
    reader.onload = () => {
      resolve(reader.result);
    };
    reader.readAsDataURL(blob);
  });

  public async uploadPhoto(photo: UserPhoto) {
    const formData = new FormData();
    const imageBlob = this.dataURItoBlob(photo.base64Data);
    const token = await this.authService.getToken();
    console.log(token);
    
    formData.append('receipt', imageBlob, photo.filepath);

    return this.http.post(this.apiUrl, formData, {
      headers: { Authorization: `Bearer ${token}` }
    }).toPromise();
  }

  private dataURItoBlob(dataURI: string) {
    const byteString = atob(dataURI.split(',')[1]);
    const mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];
    const arrayBuffer = new ArrayBuffer(byteString.length);
    const uint8Array = new Uint8Array(arrayBuffer);

    for (let i = 0; i < byteString.length; i++) {
      uint8Array[i] = byteString.charCodeAt(i);
    }

    return new Blob([arrayBuffer], { type: mimeString });
  }
}

export interface UserPhoto {
  filepath: string;
  webviewPath?: string;
  base64Data: string;  // Aggiunto per l'invio al server
}
