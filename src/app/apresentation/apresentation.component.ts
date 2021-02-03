import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-apresentation',
  templateUrl: './apresentation.component.html',
  styleUrls: ['./apresentation.component.css'],
})
export class ApresentationComponent implements OnInit {
  name = 'Ricardo Ricarte';
  job = 'Desenvolvedor Backend/Frontend';

  constructor() {}

  ngOnInit(): void {}
}
