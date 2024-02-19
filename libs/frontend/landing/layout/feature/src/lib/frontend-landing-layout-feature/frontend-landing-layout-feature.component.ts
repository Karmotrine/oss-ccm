import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from '@oss-ccm/frontend/landing/layout/ui/navbar';
import { FooterComponent } from '@oss-ccm/frontend/landing/layout/ui/footer';

@Component({
  selector: 'oss-ccm-frontend-landing-layout-feature',
  standalone: true,
  imports: [CommonModule, RouterModule, NavbarComponent, FooterComponent],
  templateUrl: './frontend-landing-layout-feature.component.html',
  styleUrl: './frontend-landing-layout-feature.component.css',
})
export class FrontendLandingLayoutFeatureComponent {}
