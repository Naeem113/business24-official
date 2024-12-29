import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AngularSvgIconModule } from 'angular-svg-icon';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, AngularSvgIconModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
})
export class SidebarComponent {
  active: boolean = true;
}
