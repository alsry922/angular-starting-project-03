import {Component, input, Input} from '@angular/core';
import {ServerStatusComponent} from "../server-status/server-status.component";

interface Image {
  src: string;
  alt: string;
}

@Component({
  selector: 'app-dashboard-item',
  standalone: true,
  imports: [
    ServerStatusComponent
  ],
  templateUrl: './dashboard-item.component.html',
  styleUrl: './dashboard-item.component.css',
  host: {
    class: 'dashboard-item',
  }
})
export class DashboardItemComponent {
  // @Input({required: true}) image!: Image;
  // @Input({required: true}) title!: string;
  image = input.required<Image>();
  title = input.required<string>();
}
