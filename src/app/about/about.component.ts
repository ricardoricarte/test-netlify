import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent implements OnInit {
  knowledge: string[] = [
    'HTML 5,',
    'CSS 3,',
    'JavaScript,',
    'Java,',
    'Angular,',
    'Postgres',
  ];

  studying: string[] = ['Curso Especialista em REST Api com Spring.'];

  completeCourse: string[] = [
    'Curso Fullstack em Spring e Angular.',
  ];

  constructor() {}

  ngOnInit(): void {}
}
