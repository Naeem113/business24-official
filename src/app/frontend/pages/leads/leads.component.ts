import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SidebarComponent } from '../../components/sidebar/sidebar.component';
import { AngularSvgIconModule } from 'angular-svg-icon';

@Component({
  selector: 'app-leads',
  standalone: true,
  imports: [CommonModule,SidebarComponent, AngularSvgIconModule],
  templateUrl: './leads.component.html',
  styleUrl: './leads.component.css'
})
export class LeadsComponent {

}
