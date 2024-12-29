import { Injectable } from '@angular/core';
import { SvgIconRegistryService } from 'angular-svg-icon';

const ICONS = [
  { src: 'assets/images/svgs/dashboard-icon.svg', name: 'dashboard' },
  { src: 'assets/images/svgs/chevron-down.svg', name: 'chevron-down' },
  { src: 'assets/images/svgs/collapse.svg', name: 'collapse' },
  { src: 'assets/images/svgs/search.svg', name: 'search' },
  { src: 'assets/images/svgs/settings.svg', name: 'setting' },
  { src: 'assets/images/svgs/notification.svg', name: 'notification' },
  { src: 'assets/images/svgs/filter.svg', name: 'filter-solid' },


 ];

@Injectable({
  providedIn: 'root',
})
export class IconsService {
  constructor(private iconReg: SvgIconRegistryService) {
    this.loadIcons();
  }

  loadIcons(): void {
    ICONS.forEach((i) => this.iconReg.loadSvg(i.src, i.name));
  }
}
