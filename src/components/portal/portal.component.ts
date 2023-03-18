import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portal',
  standalone:true,
  templateUrl: './portal.component.html',
  styleUrls: ['./portal.component.css']
})
export class PortalComponent implements OnInit {
name="Sofia";
img='https://firebasestorage.googleapis.com/v0/b/sofia-beautiful-center.appspot.com/o/beautiful-center%2Fbeautiful.png?alt=media&token=8b4e9248-f469-4e39-8983-3955dfc10b73';
  constructor() { }

  ngOnInit() {
  }

}