import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _storage: Storage | null = null;

  constructor(private storage: Storage) {
    this.init();
  }

  async init() {
    this._storage = await this.storage.create();
  }

  async setToken(token: string) {
    await this._storage?.set('jwt', token);
  }

  async getToken(): Promise<string | null> {
    return await this._storage?.get('jwt');
  }

  async removeToken() {
    await this._storage?.remove('jwt');
  }
}
