import { Injectable } from '@angular/core';
import MenuItem from '../../shared/interfaces/MenuItem';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

const MenuItems: MenuItem[] = [
  {
    title: 'Dashboard',
    subTitle: '',
    icon: 'dashboard',
    link: '/dashboard',
    active: false,
    badge: {
      value: 1,
      color: 'accent',
    },
  },
];

@Injectable({
  providedIn: 'root',
})
export class SidebarService {
  menuItems: MenuItem[] = MenuItems;

  constructor(private router: Router) {
    // Listen for route changes to update the active state of the menu items
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        this.setActiveMenuItem();
      });
  }

  private setActiveMenuItem() {
    const currentRoute = this.router.url;
    console.log('currentRoute', currentRoute);

    // Reset the active state for all menu items
    this.menuItems.forEach((item) => (item.active = false));

    // Find and set active menu item based on the current route
    const activeItem = this.menuItems.find((item) =>
      currentRoute.includes(item.link)
    );
    if (activeItem) {
      activeItem.active = true;
    }
  }

  // Check if the menu item has children
  menuHasChildren(item: MenuItem): boolean {
    return Array.isArray(item.children) && item.children.length > 0;
  }
}
