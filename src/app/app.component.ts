import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { IconsService } from './core/services/icons.service';
import { AngularSvgIconModule } from 'angular-svg-icon';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AngularSvgIconModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  constructor(private iconsService: IconsService) {
    let abc:any;
  }
}
