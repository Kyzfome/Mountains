import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BaseService {
  public isMobile!: boolean;

  constructor(
  ) {
    this.isMobile = window.innerWidth <= 768;
  }
}
