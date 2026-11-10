import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./login/login').then((c) => c.Login),
  },

  {
    path: 'login',
    redirectTo: '',
  },

  {
    path: 'registro',
    loadComponent: () => import('./registro/registro').then((c) => c.Registro),
  },

  {
    path: 'control-panel',
    loadComponent: () => import("./dashboard/dashboard").then(c => c.Dashboard)
  }
];
