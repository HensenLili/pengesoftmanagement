import { Component, OnInit } from '@angular/core';
import {Dynamic} from 'pengesoft-ng-lib';

@Component({
  selector: 'app-my-home',
  templateUrl: './my-home.component.html',
  styleUrls: ['./my-home.component.less']
})
@Dynamic()
export class MyHomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
