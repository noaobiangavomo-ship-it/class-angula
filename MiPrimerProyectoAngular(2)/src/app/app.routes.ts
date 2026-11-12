import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./shared/components/layouts/auth-layout/auth-layout').then((c) => c.AuthLayout),
    children: [
      {
        path: '',
        loadComponent: () => import('./features/login/login').then((c) => c.Login),
      },
      {
        path: 'registro',
        loadComponent: () => import('./features/registro/registro').then((c) => c.Registro),
      },
    ],
  },

  {
    path: 'login',
    redirectTo: '',
  },

  {
    path: 'app',
    loadComponent: () =>
      import('./shared/components/layouts/app-layout/app-layout').then((c) => c.AppLayout),
    children: [
      {
        path: 'control-panel',
        loadComponent: () => import('./features/dashboard/dashboard').then((c) => c.Dashboard),
      },

      {
        path: 'mi-perfil',
        loadComponent: () => import('./features/perfil/perfil').then((c) => c.Perfil),
      },
    ],
  },

  {
    path: 'general',
    loadComponent: () =>
      import('./shared/components/layouts/generic-layout/generic-layout').then(
        (c) => c.GenericLayout,
      ),
    children: [
      {
        path: 'not-found',
        loadComponent: () =>
          import('./features/pagina-no-encontrada/pagina-no-encontrada').then(
            (c) => c.PaginaNoEncontrada,
          ),
      },
      {
        path: 'forbidden',
        loadComponent: () =>
          import('./features/permiso-denegado/permiso-denegado').then((c) => c.PermisoDenegado),
      },
    ],
  },

  {
    path: '**',
    redirectTo: 'general/not-found',
  },
];
