import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    loadChildren: () =>
      import('@oss-ccm/frontend/landing/shell/feature').then(
        (r) => r.landingShellFeatureRoutes
      ),
  },
  {
    path: 'auth',
    loadChildren: () =>
      import('@oss-ccm/frontend/auth/shell/feature').then(
        (r) => r.authShellFeatureRoutes
      ),
  },
];
