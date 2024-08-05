import { Routes } from '@angular/router';


export const routes: Routes = [
  {
    path: 'dashboard',
    loadComponent: () => import('./dashboard/dashboard.component'),
    children: [
      {
        path: 'agregar-producto',
        loadComponent: () => import('./dashboard/pages/agregar-producto/agregar-producto.component')
      },
      {
        path: 'inicio',
        loadComponent: () => import('./dashboard/pages/inicio/inicio.component')
      },
      {
        path: 'login',
        loadComponent: () => import('./dashboard/pages/login/login.component')
      },
      {
      path: '', redirectTo: 'inicio', pathMatch: 'full'
      },
    ]

  },
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  }



];
