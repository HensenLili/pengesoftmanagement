import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-statement',
  templateUrl: './statement.component.html',
  styleUrls: ['./statement.component.less']
})
export class StatementComponent implements OnInit {
  theme = true;
  constructor() { }

  ngOnInit(): void {
  }

}
