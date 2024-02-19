import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

interface INavbarLink {
  label: string;
  url: string;
}

@Component({
  selector: 'oss-ccm-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './frontend-shared-ui-navbar.component.html',
  styleUrl: './frontend-shared-ui-navbar.component.css',
})
export class NavbarComponent {
  NAVBAR_LINKS: INavbarLink[] = [
    { label: 'soul', url: '/' },
    { label: 'manifesto', url: '/manifesto' },
    { label: 'projects', url: '/projects' },
    { label: 'courses', url: '/courses' },
    { label: 'blog', url: '/blog' },
    { label: 'team', url: '/team' },
    { label: 'login', url: '/auth/login' },
    { label: 'register', url: '/auth/register' },
  ];
}
