import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'login',
    loadComponent: () =>
      import('@oss-ccm/frontend/login/feature').then((c) => c.LoginComponent),
  },
  {
    path: 'register',
    loadComponent: () =>
      import('@oss-ccm/frontend/register/feature').then(
        (c) => c.RegisterComponent
      ),
  },
];
