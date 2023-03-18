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
    <img src= {{img}}   width="210" height="240" alt="Logo HTML5">
  `,
})
export class App {
  name = 'Sofia'; 
  img='https://firebasestorage.googleapis.com/v0/b/sofia-beautiful-center.appspot.com/o/beautiful-center%2Fbeautiful.png?alt=media&token=8b4e9248-f469-4e39-8983-3955dfc10b73';
}

bootstrapApplication(App);
