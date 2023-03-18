import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h1>Hola, soy {{name}}!</h1>
    <a target="_blank" href="https://angular.io/start">
      Esta es mi primera aplicación en Angular 
    </a>
  `,
})
export class App {
  name = 'Sofia';
}

bootstrapApplication(App);
