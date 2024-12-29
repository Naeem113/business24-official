import { Routes } from '@angular/router';
import { FrontendComponent } from './frontend';

export const frontendRoutes: Routes = [
  {
    path: 'frontend',
    component: FrontendComponent,

    children: [
      {
        path: '',
        redirectTo: 'leads',
        pathMatch: 'full',
      },
      {
        path: 'leads',
        loadComponent: () =>
          import('./pages/leads/leads.component').then((m) => m.LeadsComponent),
      },
    ],
  },
];
