import { Component, HostListener } from '@angular/core';
import { BaseService } from '../services/base.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  @HostListener('window:resize', ['$event'])
  onResize() {
    this.baseService.isMobile = window.innerWidth <= 768;
  }

  constructor(public baseService: BaseService) {}

  goToHome() {
    if (window.location.pathname !== '/') {
      window.location.href = '/';
    }
  }
}
