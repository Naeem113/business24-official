import { Routes } from '@angular/router';
import { frontendRoutes } from './frontend/frontend.routes';
import { dashboardRoutes } from './layouts/dashboard/dashboard.routes';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  ...dashboardRoutes,
  ...frontendRoutes,
];
