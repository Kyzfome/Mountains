import { Component, Input } from '@angular/core';
import { BaseService } from '../services/base.service';

export interface DataItem {
  url: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrl: './container.component.scss',
})
export class ContainerComponent {
  @Input() data!: DataItem[];

  constructor(public baseService: BaseService) {}
}
