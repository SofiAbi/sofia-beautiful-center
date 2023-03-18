import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import { PortalComponent } from './components/portal/portal.component';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule,PortalComponent],
  template: `
  <app-portal>
  `,
})
export class App {
  name = 'Sofia'; 
  img='https://firebasestorage.googleapis.com/v0/b/sofia-beautiful-center.appspot.com/o/beautiful-center%2Fbeautiful.png?alt=media&token=8b4e9248-f469-4e39-8983-3955dfc10b73';
}

bootstrapApplication(App);
