import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-training-manage',
  templateUrl: './training-manage.component.html',
  styleUrls: ['./training-manage.component.less']
})
export class TrainingManageComponent implements OnInit {
  theme = true;
  constructor() { }

  ngOnInit(): void {
  }

}
