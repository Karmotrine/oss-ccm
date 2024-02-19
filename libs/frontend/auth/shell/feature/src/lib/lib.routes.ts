import { Route } from '@angular/router';
import { LoginComponent } from '@oss-ccm/frontend/auth/login/feature';
import { RegisterComponent } from '@oss-ccm/frontend/auth/register/feature';

export const authShellFeatureRoutes: Route[] = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
];
