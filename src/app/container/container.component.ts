import { Component, Input } from '@angular/core';

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
}
