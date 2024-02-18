import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import { NavbarComponent } from '@oss-ccm/frontend/shared/ui/navbar';
import { FooterComponent } from '@oss-ccm/frontend/shared/ui/footer';

@Component({
  standalone: true,
  imports: [NxWelcomeComponent, RouterModule, NavbarComponent, FooterComponent],
  selector: 'oss-ccm-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'ccm-fe';
}
