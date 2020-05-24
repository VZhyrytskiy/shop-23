import { Injectable } from '@angular/core';

@Injectable()
export class LocalStorageService implements Storage {
  private readonly storage: Storage = window.localStorage;

  constructor(){}

  length = this.storage.length;

  clear(): void {
    this.storage.clear();
  }

  getItem(key: string): string {
    return this.getItem(key);
  }

  key(index: number): string {
    return this.key(index);
  }

  removeItem(key: string): void {
    this.storage.removeItem(key);
  }

  setItem(key: string, value: string): void {
    this.storage.setItem(key, value);
  }
}
